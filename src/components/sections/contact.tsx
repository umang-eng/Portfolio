"use client";

import React from 'react';
import { PROFILE_DATA } from '@/lib/data';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I'm currently available for freelance work and open to new opportunities.
          </p>
        </div>

        <div className="max-w-xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="flex items-center gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="font-headline text-lg font-semibold">Email</h3>
                    <a href={`mailto:${PROFILE_DATA.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {PROFILE_DATA.email}
                    </a>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="font-headline text-lg font-semibold">Phone</h3>
                    <a href={`tel:${PROFILE_DATA.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {PROFILE_DATA.phone}
                    </a>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="font-headline text-lg font-semibold">Location</h3>
                    <p className="text-muted-foreground">{PROFILE_DATA.location}</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
