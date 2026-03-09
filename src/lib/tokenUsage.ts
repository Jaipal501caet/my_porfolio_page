// Token usage tracking and management
export interface TokenUsage {
  used: number;
  remaining: number;
  total: number;
  percentageUsed: number;
}

export interface UsageConfig {
  dailyLimit: number;
  estimateTokensPerChar: number;
  enableTracking: boolean;
}

// Configuration - Adjust these based on your API tier
export const usageConfig: UsageConfig = {
  dailyLimit: 10000, // Total tokens available per day (adjust for your API plan)
  estimateTokensPerChar: 0.25, // Rough estimate: 1 token ≈ 4 characters
  enableTracking: true,
};

// Initialize usage from localStorage
export function initializeUsage(): TokenUsage {
  if (typeof window === 'undefined') {
    return {
      used: 0,
      remaining: usageConfig.dailyLimit,
      total: usageConfig.dailyLimit,
      percentageUsed: 0,
    };
  }

  const stored = localStorage.getItem('chatbot_token_usage');
  const today = new Date().toDateString();
  const storedDate = localStorage.getItem('chatbot_usage_date');

  // Reset if it's a new day
  if (storedDate !== today) {
    localStorage.setItem('chatbot_usage_date', today);
    localStorage.setItem('chatbot_token_usage', '0');
    return {
      used: 0,
      remaining: usageConfig.dailyLimit,
      total: usageConfig.dailyLimit,
      percentageUsed: 0,
    };
  }

  const used = parseInt(stored || '0', 10);
  const remaining = Math.max(0, usageConfig.dailyLimit - used);
  return {
    used,
    remaining,
    total: usageConfig.dailyLimit,
    percentageUsed: (used / usageConfig.dailyLimit) * 100,
  };
}

// Estimate tokens used for text input/output
export function estimateTokens(text: string): number {
  if (!text) return 0;
  return Math.ceil(text.length * usageConfig.estimateTokensPerChar);
}

// Update usage after a message
export function updateUsage(messageText: string): TokenUsage {
  if (!usageConfig.enableTracking) {
    return initializeUsage();
  }

  const tokens = estimateTokens(messageText);
  const currentUsage = initializeUsage();
  const newUsed = currentUsage.used + tokens;

  if (typeof window !== 'undefined') {
    localStorage.setItem('chatbot_token_usage', newUsed.toString());
  }

  return {
    used: newUsed,
    remaining: Math.max(0, usageConfig.dailyLimit - newUsed),
    total: usageConfig.dailyLimit,
    percentageUsed: (newUsed / usageConfig.dailyLimit) * 100,
  };
}

// Reset usage (manual reset or admin function)
export function resetUsage(): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('chatbot_token_usage', '0');
    localStorage.setItem('chatbot_usage_date', new Date().toDateString());
  }
}

// Format tokens for display
export function formatTokens(tokens: number): string {
  if (tokens >= 1000) {
    return `${(tokens / 1000).toFixed(1)}K`;
  }
  return tokens.toString();
}

// Get status message color based on usage
export function getStatusColor(percentageUsed: number): string {
  if (percentageUsed < 50) return 'text-green-600'; // Below 50% - Green
  if (percentageUsed < 75) return 'text-yellow-600'; // 50-75% - Yellow
  if (percentageUsed < 90) return 'text-orange-600'; // 75-90% - Orange
  return 'text-red-600'; // 90%+ - Red
}

// Get progress bar color
export function getProgressBarColor(percentageUsed: number): string {
  if (percentageUsed < 50) return 'bg-green-500';
  if (percentageUsed < 75) return 'bg-yellow-500';
  if (percentageUsed < 90) return 'bg-orange-500';
  return 'bg-red-500';
}

// Check if user has remaining tokens
export function hasRemainingTokens(): boolean {
  const usage = initializeUsage();
  return usage.remaining > 0;
}

// Get status summary
export function getStatusSummary(): string {
  const usage = initializeUsage();
  return `${formatTokens(usage.used)} / ${formatTokens(usage.total)} tokens used`;
}
