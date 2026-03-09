import { findAnswer } from '@/lib/profileData';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      );
    }

    // Get the answer from the profile data
    const answer = findAnswer(message);

    return NextResponse.json(
      {
        success: true,
        question: message,
        answer: answer,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process your question' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      message: 'Chat API is running. Use POST to send chat messages.',
      endpoints: {
        post: '/api/chat',
      },
    },
    { status: 200 }
  );
}
