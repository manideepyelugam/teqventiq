import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  console.log('Contact form submission:', data);

  // Here you would typically send an email or save to a database.
  // For now, we'll just return a success response.
  
  return NextResponse.json({ success: true });
}
