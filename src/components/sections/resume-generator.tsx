"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { generateTailoredResume, GenerateTailoredResumeOutput } from '@/ai/flows/generate-tailored-resume';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const resumeSchema = z.object({
  resumeData: z.string().min(50, { message: "Please enter your full resume data." }),
  jobDescription: z.string().min(50, { message: "Please enter the full job description." }),
});

type ResumeFormValues = z.infer<typeof resumeSchema>;

export default function ResumeGenerator() {
  const [generatedResumes, setGeneratedResumes] = useState<GenerateTailoredResumeOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<ResumeFormValues>({
    resolver: zodResolver(resumeSchema),
    defaultValues: {
      resumeData: "",
      jobDescription: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit: SubmitHandler<ResumeFormValues> = async (data) => {
    try {
      const result = await generateTailoredResume({ ...data, numOptions: 3 });
      setGeneratedResumes(result);
    } catch (error) {
      console.error("Error generating resume:", error);
      toast({
        title: "Generation Failed",
        description: "There was an error generating your resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="resume-ai" className="py-16 sm:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground flex items-center justify-center gap-3">
            <Wand2 className="w-8 h-8 text-primary" />
            AI Resume Tailor
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Paste your resume and a job description to get AI-powered suggestions. Our tool analyzes the job requirements and tailors your resume to highlight your most relevant skills and experience.
          </p>
        </div>

        <Card className="mt-12 max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="resumeData"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-headline">Your Current Resume</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Paste your entire resume text here..."
                            className="min-h-[300px] resize-y"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="jobDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-headline">Target Job Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Paste the full job description here..."
                            className="min-h-[300px] resize-y"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="text-center">
                  <Button type="submit" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                      <Wand2 className="mr-2 h-5 w-5" />
                    )}
                    Generate Tailored Resumes
                  </Button>
                </div>
              </form>
            </Form>

            {isSubmitting && (
                <div className="mt-8 text-center">
                    <p className="text-muted-foreground">AI is thinking... this may take a moment.</p>
                </div>
            )}

            {generatedResumes && generatedResumes.resumeOptions.length > 0 && (
              <div className="mt-12">
                <h3 className="font-headline text-2xl font-bold text-center mb-6">
                  Generated Options
                </h3>
                <Tabs defaultValue="option-0" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    {generatedResumes.resumeOptions.map((_, index) => (
                       <TabsTrigger key={index} value={`option-${index}`}>Option {index + 1}</TabsTrigger>
                    ))}
                  </TabsList>
                  {generatedResumes.resumeOptions.map((option, index) => (
                    <TabsContent key={index} value={`option-${index}`}>
                      <Card>
                        <CardContent className="p-6 whitespace-pre-wrap font-mono text-sm bg-background rounded-md border">
                          {option.resumeText}
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
