import React from 'react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Career & Education
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My professional journey and academic background.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="flex items-center gap-3 text-2xl font-headline font-bold mb-8">
              <Briefcase className="h-7 w-7 text-primary" />
              Work Experience
            </h3>
            <div className="relative flex flex-col gap-8 before:absolute before:top-0 before:left-4 before:h-full before:w-px before:bg-border">
              {EXPERIENCE_DATA.map((job, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-4 top-1 h-px w-4 bg-border"></div>
                  <div className="absolute left-[11px] top-0 h-2.5 w-2.5 rounded-full bg-primary"></div>
                  <h4 className="font-headline text-lg font-semibold mt-1">{job.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="flex items-center gap-3 text-2xl font-headline font-bold mb-8">
              <GraduationCap className="h-7 w-7 text-primary" />
              Education
            </h3>
            <div className="relative flex flex-col gap-8 before:absolute before:top-0 before:left-4 before:h-full before:w-px before:bg-border">
              {EDUCATION_DATA.map((edu, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-4 top-1 h-px w-4 bg-border"></div>
                  <div className="absolute left-[11px] top-0 h-2.5 w-2.5 rounded-full bg-primary"></div>
                  <p className="text-sm text-muted-foreground">{edu.date}</p>
                  <h4 className="font-headline text-lg font-semibold mt-1">{edu.degree}</h4>
                  <p className="text-sm font-medium text-muted-foreground">{edu.school}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
