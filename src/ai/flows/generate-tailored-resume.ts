'use server';

/**
 * @fileOverview An AI agent for generating tailored resumes based on job descriptions.
 *
 * - generateTailoredResume - A function that generates tailored resume options.
 * - GenerateTailoredResumeInput - The input type for the generateTailoredResume function.
 * - GenerateTailoredResumeOutput - The return type for the generateTailoredResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTailoredResumeInputSchema = z.object({
  jobDescription: z
    .string()
    .describe('The description of the job posting to tailor the resume to.'),
  resumeData: z.string().describe('The user current resume data.'),
  numOptions: z
    .number()
    .min(1)
    .max(5)
    .default(3)
    .describe('The number of tailored resume options to generate.'),
});
export type GenerateTailoredResumeInput = z.infer<
  typeof GenerateTailoredResumeInputSchema
>;

const GenerateTailoredResumeOutputSchema = z.object({
  resumeOptions: z.array(
    z.object({
      resumeText: z.string().describe('A tailored resume option.'),
    })
  ),
});
export type GenerateTailoredResumeOutput = z.infer<
  typeof GenerateTailoredResumeOutputSchema
>;

export async function generateTailoredResume(
  input: GenerateTailoredResumeInput
): Promise<GenerateTailoredResumeOutput> {
  return generateTailoredResumeFlow(input);
}

const generateTailoredResumePrompt = ai.definePrompt({
  name: 'generateTailoredResumePrompt',
  input: {schema: GenerateTailoredResumeInputSchema},
  output: {schema: GenerateTailoredResumeOutputSchema},
  prompt: `You are an expert resume writer. You will generate multiple resume options tailored to a specific job description.

    Job Description: {{{jobDescription}}}
    Resume Data: {{{resumeData}}}
    Number of Options: {{{numOptions}}}

    Each resume option should be tailored to the job description, highlighting the most relevant skills and experience. Generate alternative phrasing for descriptions based on data found in job postings.
  `,
});

const generateTailoredResumeFlow = ai.defineFlow(
  {
    name: 'generateTailoredResumeFlow',
    inputSchema: GenerateTailoredResumeInputSchema,
    outputSchema: GenerateTailoredResumeOutputSchema,
  },
  async input => {
    const {output} = await generateTailoredResumePrompt(input);
    return output!;
  }
);
