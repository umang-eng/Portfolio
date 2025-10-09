import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { PROFILE_DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <p className="text-sm">
          &copy; {currentYear} {PROFILE_DATA.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {PROFILE_DATA.socials.map((social) => (
            <Button key={social.name} variant="ghost" size="icon" asChild>
              <Link href={social.url} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
