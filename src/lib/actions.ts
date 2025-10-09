"use server";

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function handleContactForm(data: unknown) {
  const parsedData = contactSchema.parse(data);

  // Here you would typically send an email or save to a database
  console.log("New contact form submission:", parsedData);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // For demonstration, we'll just return a success message.
  // In a real app, you might return an ID or handle errors.
  return { success: true, message: "Message received!" };
}
