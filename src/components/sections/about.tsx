import React from 'react';
import { PROFILE_DATA } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            About Me
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {PROFILE_DATA.about}
          </p>
        </div>
      </div>
    </section>
  );
}
