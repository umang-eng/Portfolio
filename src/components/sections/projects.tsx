import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PROJECTS_DATA } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here are some of the projects I'm proud to have worked on.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => {
            const projectImage = PlaceHolderImages.find(p => p.id === `project-${index + 1}`);
            return (
              <Card key={project.title} className="flex flex-col overflow-hidden group">
                <div className="relative h-48 w-full overflow-hidden">
                  {projectImage && (
                     <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={projectImage.imageHint}
                    />
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="font-headline">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                   <Button asChild variant="outline" className="mt-auto w-fit">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
