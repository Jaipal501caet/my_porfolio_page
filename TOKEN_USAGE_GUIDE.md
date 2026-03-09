# Token Usage & Limit Status Guide

## 📊 Overview

Your chatbot now includes a **real-time token usage tracker** that displays:
- ✅ Tokens used today
- ✅ Tokens remaining
- ✅ Visual progress bar (color-coded)
- ✅ Estimated tokens before sending
- ✅ Daily limit resets automatically

---

## 🎯 Features Explained

### 1. **Token Usage Display (Header)**
Located at the top of the chat window, showing:
```
Token Usage
150 / 10,000 tokens  [Progress Bar]
9,850 remaining
```

### 2. **Color-Coded Progress Bar**
The progress bar changes color based on usage:
- 🟢 **Green** (0-50%): Plenty of tokens remaining
- 🟡 **Yellow** (50-75%): Getting closer to limit
- 🟠 **Orange** (75-90%): Use tokens carefully
- 🔴 **Red** (90%+): Critical - few tokens left

### 3. **Estimated Token Preview**
As you type, you'll see:
```
~18 tokens
```
This estimates how many tokens your message will use **before** you send it.

### 4. **Token Limit & Reset**
- **Daily Limit**: 10,000 tokens (configurable)
- **Reset Time**: Midnight daily (automatic)
- **Limit Reached**: Chat disabled with warning message

---

## ⚙️ Configuration

### Change Daily Token Limit
Edit `src/lib/tokenUsage.ts`:

```typescript
export const usageConfig: UsageConfig = {
  dailyLimit: 10000,  // Change this number
  estimateTokensPerChar: 0.25,
  enableTracking: true,
};
```

**Common tier limits:**
- Free: 5,000 tokens/day
- Pro: 50,000 tokens/day
- Enterprise: Unlimited

### Disable Token Tracking
```typescript
enableTracking: false,  // Turns off all usage tracking
```

### Adjust Token Estimation
The formula: `tokens = messageLength × 0.25`

Change `estimateTokensPerChar` to match your API's actual usage:
```typescript
estimateTokensPerChar: 0.25,  // 1 token per 4 chars
// For more aggressive counting:
estimateTokensPerChar: 0.35,  // 1 token per ~3 chars
// For more lenient:
estimateTokensPerChar: 0.15,  // 1 token per 6+ chars
```

---

## 💾 How It Works

### Storage
Token usage is stored in browser's **LocalStorage** with:
- **Key**: `chatbot_token_usage` (number of tokens used)
- **Date Key**: `chatbot_usage_date` (MM/DD/YYYY format)
- **Automatic Reset**: When date changes

### Token Calculation
Each message costs tokens:
```
User message: "What is your experience?"
Characters: 27
Tokens: 27 × 0.25 = ~7 tokens

Bot response: "I have 16+ years..."
Characters: 150
Tokens: 150 × 0.25 = ~37 tokens

Total for this exchange: 44 tokens
```

### Real-Time Updates
- Usage updates **immediately** after each message
- Progress bar animates smoothly
- Color warning changes based on usage level
- Disabled when limit reached

---

## 🔧 API Integration (Future)

When you integrate with real AI (OpenAI, Claude, etc.), you can replace the token estimation with actual token counts:

### Example with OpenAI:
```typescript
import { encoding_for_model } from "js-tiktoken";

const enc = encoding_for_model("gpt-4");
const tokens = enc.encode(message).length;  // Exact count
```

### Example with Anthropic Claude:
```typescript
import Anthropic from "@anthropic-ai/sdk";

const message = await client.messages.countTokens({
  model: "claude-3-5-sonnet-20241022",
  messages: [{ role: "user", content: messageText }],
});

const tokenCount = message.input_tokens;  // Actual count
```

---

## 📱 Component Structure

### Files:
1. **`src/lib/tokenUsage.ts`** - Token tracking logic
   - `initializeUsage()` - Get current usage
   - `updateUsage()` - Add tokens to counter
   - `estimateTokens()` - Calculate tokens for text
   - `resetUsage()` - Manual reset (for testing)
   - Color/status helper functions

2. **`src/components/ChatBot.tsx`** - Updated with:
   - Token usage display in header
   - Token budget check before sending
   - Real-time progress updates
   - Token estimate preview in input
   - Error message when limit reached

---

## 🧪 Testing & Debugging

### Check Current Usage
Open browser DevTools → Console:
```javascript
// Check localStorage
console.log(localStorage.getItem('chatbot_token_usage'));
console.log(localStorage.getItem('chatbot_usage_date'));

// Reset manually (for testing)
localStorage.removeItem('chatbot_token_usage');
localStorage.removeItem('chatbot_usage_date');
```

### Test Limit Reached
1. Lower the daily limit in `usageConfig`:
   ```typescript
   dailyLimit: 100,  // Very low for testing
   ```
2. Send a few messages until limit is reached
3. Chat button should disable with warning
4. Reset via DevTools and try again

### Monitor Token Usage
Add this to your browser console to see live updates:
```javascript
setInterval(() => {
  const usage = localStorage.getItem('chatbot_token_usage');
  console.log('Current tokens used:', usage);
}, 1000);
```

---

## 🎨 Customization

### Change Header Styling
Edit the token usage display colors in `ChatBot.tsx`:

```tsx
{/* Token Usage Status */}
<div className="bg-blue-700 bg-opacity-50">  // Adjust background color/opacity
```

### Change Status Text
```tsx
<span className="text-xs font-bold">
  {formatTokens(tokenUsage.used)} / {formatTokens(tokenUsage.total)}
</span>
```

### Customize Progress Bar
```tsx
<div className={`h-full ${getProgressBarColor(tokenUsage.percentageUsed)}`}>
  {/* Change height: h-2 to h-1, h-3, etc. */}
  {/* Change colors in getProgressBarColor() function */}
</div>
```

---

## 🚀 Advanced Features

### Add Monthly Limits (Premium Feature)
```typescript
export interface TimeBasedLimit {
  daily: number;
  monthly: number;
  resetDaily: () => void;
  resetMonthly: () => void;
}
```

### Implement User Tiers
```typescript
type UserTier = 'free' | 'pro' | 'enterprise';

const tierLimits: Record<UserTier, number> = {
  free: 5000,
  pro: 50000,
  enterprise: Infinity,
};
```

### Add Premium Upgrade CTA
When usage reaches 75%, show upgrade message:
```tsx
{tokenUsage.percentageUsed >= 75 && (
  <div className="bg-yellow-50 border border-yellow-200 p-2 rounded text-xs">
    🚀 <a href="/upgrade">Upgrade to Pro</a> for unlimited tokens!
  </div>
)}
```

---

## 📊 Analytics & Reporting

### Track Usage Patterns
```typescript
interface UsageAnalytics {
  daily: { date: string; tokensUsed: number }[];
  avgTokensPerConversation: number;
  mostExpensiveQuery: string;
}
```

### Store Historical Data
```typescript
// Save daily snapshots
const historyKey = `chatbot_daily_${date}`;
localStorage.setItem(historyKey, JSON.stringify({
  tokensUsed,
  messageCount,
  timestamp
}));
```

---

## ⚠️ Important Notes

1. **LocalStorage Persistence**: Usage is stored in browser storage, so:
   - Private/Incognito mode won't persist
   - Clearing browser data resets counters
   - Different browsers have separate counts

2. **Token Estimation**: The `0.25` multiplier is approximate. For production:
   - Use your API provider's exact token counting
   - Test with your actual use cases
   - Adjust multiplier based on real data

3. **Daily Reset**: Automatic at midnight (user's local timezone)
   - Based on user's device date
   - Not server-side controlled

4. **Unlimited Option**: Set `dailyLimit: Infinity` to disable limits entirely

---

## 🔗 Related Files
- Main guidebook: [CHATBOT_GUIDE.md](CHATBOT_GUIDE.md)
- Profile data: [src/lib/profileData.ts](src/lib/profileData.ts)
- Chat component: [src/components/ChatBot.tsx](src/components/ChatBot.tsx)

---

**Your token usage system is ready! Start testing by opening the chatbot and watching the counter update in real-time.** 🎉
