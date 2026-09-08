import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budgetRange: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    const { name, email, projectType, budgetRange, message } = body;

    // Strict validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please provide a valid name (at least 2 characters).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Please enter a valid email address so we can reply.' },
        { status: 400 }
      );
    }

    if (!projectType || typeof projectType !== 'string') {
      return NextResponse.json(
        { error: 'Please select a project type.' },
        { status: 400 }
      );
    }

    if (!budgetRange || typeof budgetRange !== 'string') {
      return NextResponse.json(
        { error: 'Please select an estimated budget tier.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please share a brief summary of what you want to build (at least 10 characters).' },
        { status: 400 }
      );
    }

    // In production, this can send an email via Resend, Postmark, or save to Firestore/DB.
    console.log('[Pinnacle Inquiry Received]', {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: body.company?.trim() || 'N/A',
      projectType,
      budgetRange,
      message: message.trim(),
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out to Pinnacle Digital Studios. Mateo and Omar will review your project and get back to you within 24 hours.',
        inquiryId: `PDS-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API handler error:', error);
    return NextResponse.json(
      { error: 'Something went wrong processing your request. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
