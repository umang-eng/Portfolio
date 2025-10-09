import React from 'react';
import { SKILLS_DATA } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2 } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Technical Skills
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A snapshot of the technologies, languages, and tools I work with.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category) => (
            <Card key={category.title} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className="h-6 w-6 text-primary" />
                  <span className='font-headline'>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
