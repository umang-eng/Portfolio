import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PROFILE_DATA } from '@/lib/data';
import { Download, Mail } from 'lucide-react';

export default function Hero() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <section id="hero" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={PROFILE_DATA.name}
                width={400}
                height={400}
                priority
                className="rounded-full object-cover shadow-lg border-4 border-card"
                data-ai-hint={profileImage.imageHint}
              />
            )}
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              {PROFILE_DATA.name}
            </h1>
            <p className="mt-2 text-xl md:text-2xl font-medium text-primary">
              {PROFILE_DATA.title}
            </p>
            <p className="mt-4 max-w-2xl mx-auto md:mx-0 text-base md:text-lg text-muted-foreground">
              {PROFILE_DATA.bio}
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <Button asChild size="lg">
                <Link href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/Umang's-Resume.pdf" target="_blank">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Link>
              </Button>
            </div>
             <div className="mt-8 flex justify-center md:justify-start gap-4">
              {PROFILE_DATA.socials.map((social) => (
                <Button key={social.name} variant="ghost" size="icon" asChild>
                  <Link href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
