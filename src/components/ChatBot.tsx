'use client';

import React, { useState, useRef, useEffect } from 'react';
import { findAnswer } from '@/lib/profileData';
import { 
  initializeUsage, 
  updateUsage, 
  hasRemainingTokens,
  getProgressBarColor,
  getStatusColor,
  formatTokens,
  estimateTokens
} from '@/lib/tokenUsage';
import type { TokenUsage } from '@/lib/tokenUsage';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  { q: "What is your experience?", icon: "💼" },
  { q: "What are your core skills?", icon: "⚙️" },
  { q: "Which companies have you worked with?", icon: "🏢" },
  { q: "How can I contact you?", icon: "📞" },
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! 👋 I'm Jaipal's AI Assistant. Ask me anything about his professional experience, skills, certifications, previous clients, or how to work together.",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tokenUsage, setTokenUsage] = useState<TokenUsage>(initializeUsage());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setTokenUsage(initializeUsage());
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Check if tokens are available
    if (!hasRemainingTokens()) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: "⚠️ Daily token limit reached. Please try again tomorrow!",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      return;
    }

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const userInput = input;
    setInput('');
    setIsLoading(true);

    // Update token usage for user message
    const updatedUsage = updateUsage(userInput);
    setTokenUsage(updatedUsage);

    // Simulate bot response delay and get answer
    setTimeout(() => {
      const answer = findAnswer(userInput);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: answer,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      
      // Update token usage for bot response
      const finalUsage = updateUsage(answer);
      setTokenUsage(finalUsage);
      
      setIsLoading(false);
    }, 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuestionClick = (question: string) => {
    setInput(question);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:to-blue-800 transition-all duration-300 flex items-center justify-center z-40 border-2 border-white group"
          title="Open assistant"
        >
          <div className="text-xl">🤖</div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white animate-pulse"></div>
        </button>
      )}

      {/* Enhanced Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-full max-w-md h-screen sm:h-auto sm:max-h-[700px] bg-white rounded-none sm:rounded-2xl shadow-2xl flex flex-col z-50 border-0 sm:border border-gray-200 overflow-hidden">
          {/* Premium Header */}
          <div className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-800 text-white px-6 py-5 flex flex-col gap-4 shadow-md">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-lg">🤖</div>
                  <h3 className="font-bold text-lg">Jaipal's AI Assistant</h3>
                </div>
                <p className="text-xs text-blue-200">Powered by intelligent Q&A</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl text-blue-200 hover:text-white hover:bg-blue-700 p-1 rounded-lg transition-all duration-200"
                title="Close chat"
              >
                ✕
              </button>
            </div>

            {/* Token Usage Bar - Professional Style */}
            <div className="bg-slate-800 bg-opacity-50 rounded-xl p-3 border border-blue-500 border-opacity-30">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-blue-300">Daily Query Limit</span>
                <span className={`text-sm font-bold px-2.5 py-0.5 rounded-full ${
                  tokenUsage.percentageUsed < 50 ? 'bg-emerald-500/20 text-emerald-300' :
                  tokenUsage.percentageUsed < 75 ? 'bg-amber-500/20 text-amber-300' :
                  tokenUsage.percentageUsed < 90 ? 'bg-orange-500/20 text-orange-300' :
                  'bg-red-500/20 text-red-300'
                }`}>
                  {formatTokens(tokenUsage.used)} / {formatTokens(tokenUsage.total)}
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    tokenUsage.percentageUsed < 50 ? 'bg-emerald-500' :
                    tokenUsage.percentageUsed < 75 ? 'bg-amber-500' :
                    tokenUsage.percentageUsed < 90 ? 'bg-orange-500' :
                    'bg-red-500'
                  }`}
                  style={{ width: `${Math.min(tokenUsage.percentageUsed, 100)}%` }}
                ></div>
              </div>
              <p className="text-xs text-blue-300 mt-2">
                {tokenUsage.remaining > 0
                  ? `${formatTokens(tokenUsage.remaining)} queries remaining today`
                  : '⚠️ Limit reached - Returns tomorrow'}
              </p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white space-y-4 flex flex-col">
            {messages.map((msg, index) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
              >
                <div
                  className={`max-w-xs lg:max-w-sm px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none shadow-md'
                      : 'bg-white text-gray-800 border border-gray-300 rounded-bl-none shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-wrap break-words">{msg.text}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-600 px-4 py-3 rounded-2xl rounded-bl-none border border-gray-300 shadow-sm">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="px-4 py-4 bg-blue-50 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">Quick Questions</p>
              <div className="space-y-2">
                {SUGGESTED_QUESTIONS.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuestionClick(item.q)}
                    className="w-full text-left text-sm px-3 py-2.5 bg-white hover:bg-blue-100 border border-gray-200 rounded-lg text-gray-700 hover:text-blue-700 hover:border-blue-300 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="text-lg group-hover:scale-125 transition-transform">{item.icon}</span>
                    <span className="font-medium flex-1">{item.q}</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-600">→</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-gray-200 bg-white px-4 py-4 flex flex-col gap-3">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask anything about Jaipal..."
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-gray-50 hover:bg-white transition-colors"
                disabled={isLoading || !hasRemainingTokens()}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !input.trim() || !hasRemainingTokens()}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-400 text-white px-4 py-2.5 rounded-xl transition-all duration-200 font-semibold shadow-md hover:shadow-lg active:scale-95"
                title="Send message"
              >
                {isLoading ? '⏳' : '→'}
              </button>
            </div>
            <div className="flex justify-between items-center px-1">
              <span className="text-xs text-gray-500 font-medium">Press Enter to send</span>
              {input && (
                <span className="text-xs rounded-full bg-blue-100 text-blue-700 px-2 py-1 font-semibold">
                  ~{estimateTokens(input)} tokens
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

