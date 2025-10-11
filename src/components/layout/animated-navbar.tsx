"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Briefcase, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS: { name: string; href: string }[] = [];

export default function AnimatedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const airplaneRef = useRef<HTMLDivElement>(null);
  const cloudsRef = useRef<HTMLDivElement>(null);
  const cloudsRefw = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Initialize animations
    if (airplaneRef.current && cloudsRef.current) {
      startAnimations();
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, []);

  const startAnimations = async () => {
    // Dynamically import anime.js (v4 exports `animate`)
    const { animate } = await import('animejs');
    
    // Clear any existing animations
    if (animationRef.current) {
      animationRef.current.pause();
    }

    // Airplane animation - staying in position but moving up and down slightly like pilot control
    animate(airplaneRef.current as unknown as Element, {
      translateY: ['0px', '-8px', '0px', '5px', '0px'],
      rotate: ['0deg', '-1deg', '0deg', '1deg', '0deg'],
      duration: 4000,
      easing: 'easeInOutSine',
      loop: true,
      delay: 0,
    });

    // Clouds animation - passing by at different speeds
    const cloudElements = cloudsRef.current?.children;
    if (cloudElements) {
      Array.from(cloudElements).forEach((cloud, index) => {
        const speeds = [20000, 25000, 22000, 28000, 30000, 36000, 33000, 37000, 39000]; // Slower speeds for each cloud
        const delays = [1000, 1500, 2500, 2000, 2800, 3000, 3500, 3800, 4300, 4900,5500,5000,6500,6000,1900]; // Different start times
        
        animate(cloud as Element, {
          // Move from offscreen right to offscreen left (opposite direction)
          translateX: ['calc(130vw + 100px)', '-100px'],
          duration: speeds[index] || 25000,
          easing: 'easeOutCirc',
          loop: true,
          delay: delays[index] || 0,
        });
      });
    }
    const cloudElementsw = cloudsRefw.current?.children;
    if (cloudElementsw) {
      Array.from(cloudElementsw).forEach((cloud, index) => {
        const speeds = [5100, 7200, 4300, 6400, 3500, 2600, 5700, 7800, 3900,5000, 7500, 4200, 6800, 3400, 2600, 5300, 7700, 3900,3400, 2600, 5300, 7700,3200,4400]; // Slower speeds for each cloud
        const delays = [230, 220, 150, 250, 200, 280, 300, 350, 380, 400, 450,480,500,520,560,190,430,250,130,230,530,750,700,730]; // Different start times
        
        animate(cloud as Element, {
          // Move from offscreen right to offscreen left (opposite direction)
          translateX: ['calc(100vw + 100px)', '-100px'],
          duration: speeds[index] || 100000,
          easing: 'easeInSine',
          loop: true,
          delay: delays[index] || 0,
        });
      });
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 overflow-hidden",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent",
        "animate-pop-in"
      )}
    >
      {/* Simple sky background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(135deg, #7acdeeff 0%, #98D8E8 50%, #B0E0E6 100%)'
        }}
      />

      {/* Animated Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Rocket Image */}
        <div 
          ref={airplaneRef}
          className="absolute top-2 w-20 h-12 opacity-90"
          style={{ zIndex: 10, left: '30%' }}
        >
          <img 
            src="/Airplan.png" 
            alt="Cartoon Rocket" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Realistic Clouds passing by */}
        <div ref={cloudsRef} className="absolute top-0 left-0 w-full h-full">
          {/* Large fluffy clouds */}
          <div className="absolute top-1 text-5xl opacity-50" style={{left: '-100px'}}>☁️</div>
          <div className="absolute top-4 text-4xl opacity-40" style={{left: '-120px'}}>☁️</div>
          <div className="absolute top-2 text-3xl opacity-45" style={{left: '-80px'}}>☁️</div>
          <div className="absolute top-6 text-4xl opacity-35" style={{left: '-150px'}}>☁️</div>
          <div className="absolute top-0 text-3xl opacity-40" style={{left: '-110px'}}>☁️</div>
          <div className="absolute top-5 text-5xl opacity-40" style={{left: '-130px'}}>☁️</div>
          <div className="absolute top-1 text-5xl opacity-50" style={{left: '-100px'}}>☁️</div>
          <div className="absolute top-4 text-4xl opacity-50" style={{left: '-120px'}}>☁️</div>
          <div className="absolute top-2 text-3xl opacity-45" style={{left: '-80px'}}>☁️</div>
          <div className="absolute top-6 text-4xl opacity-35" style={{left: '-150px'}}>☁️</div>
          <div className="absolute top-0 text-3xl opacity-40" style={{left: '-110px'}}>☁️</div>
          <div className="absolute top-5 text-5xl opacity-30" style={{left: '-130px'}}>☁️</div>
          
          {/* Additional smaller clouds */}
          <div className="absolute top-3 text-2xl opacity-35" style={{left: '-90px'}}>☁️</div>
          <div className="absolute top-7 text-3xl opacity-45" style={{left: '-140px'}}>☁️</div>
          <div className="absolute top-1 text-4xl opacity-55" style={{left: '-160px'}}>☁️</div>
        </div>

        {/* Wind Flakes (Snowflakes) - Reduced Opacity */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-2 text-xl opacity-49" style={{left: '10%', animation: 'floatDown 8s linear infinite', filter: 'brightness(0) invert(1)'}}>❄️</div>
          <div className="absolute top-4 text-lg opacity-42" style={{left: '25%', animation: 'floatDown 10s linear infinite 1s', filter: 'brightness(0) invert(1)'}}>❄️</div>
          <div className="absolute top-1 text-xl opacity-56" style={{left: '40%', animation: 'floatDown 7s linear infinite 2s', filter: 'brightness(0) invert(1)'}}>❄️</div>
          <div className="absolute top-6 text-lg opacity-45" style={{left: '60%', animation: 'floatDown 9s linear infinite 0.5s', filter: 'brightness(0) invert(1)'}}>❄️</div>
          <div className="absolute top-3 text-xl opacity-52" style={{left: '75%', animation: 'floatDown 6s linear infinite 3s', filter: 'brightness(0) invert(1)'}}>❄️</div>
          <div className="absolute top-5 text-lg opacity-38" style={{left: '85%', animation: 'floatDown 11s linear infinite 1.5s', filter: 'brightness(0) invert(1)'}}>❄️</div>
          <div className="absolute top-2 text-lg opacity-49" style={{left: '15%', animation: 'floatDown 8.5s linear infinite 2.5s', filter: 'brightness(0) invert(1)'}}>❄️</div>
          <div className="absolute top-4 text-xl opacity-42" style={{left: '35%', animation: 'floatDown 7.5s linear infinite 4s', filter: 'brightness(0) invert(1)'}}>❄️</div>
          <div className="absolute top-1 text-lg opacity-56" style={{left: '55%', animation: 'floatDown 9.5s linear infinite 0.8s', filter: 'brightness(0) invert(1)'}}>❄️</div>
          <div className="absolute top-6 text-xl opacity-45" style={{left: '70%', animation: 'floatDown 6.5s linear infinite 3.2s', filter: 'brightness(0) invert(1)'}}>❄️</div>
          <div className="absolute top-3 text-lg opacity-52" style={{left: '90%', animation: 'floatDown 10.5s linear infinite 1.8s', filter: 'brightness(0) invert(1)'}}>❄️</div>
          <div className="absolute top-5 text-xl opacity-38" style={{left: '5%', animation: 'floatDown 8.8s linear infinite 2.8s', filter: 'brightness(0) invert(1)'}}>❄️</div>
        </div>

        {/* Air Flakes - Fast Moving Through Airplane Area */}
        <div ref={cloudsRefw} className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-3 text-sm opacity-10" style={{left: '15%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-4 text-xs opacity-15" style={{left: '18%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-20 text-sm opacity-15" style={{left: '22%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-5 text-xs opacity-18" style={{left: '16%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-7 text-sm opacity-12" style={{left: '24%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-8 text-xs opacity-17" style={{left: '19%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-2 text-sm opacity-13" style={{left: '21%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-9 text-xs opacity-19" style={{left: '17%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-10 text-sm opacity-10" style={{left: '15%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-14 text-xs opacity-15" style={{left: '18%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-20 text-sm opacity-15" style={{left: '22%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-5 text-xs opacity-18" style={{left: '16%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-8 text-sm opacity-12" style={{left: '24%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-7 text-xs opacity-17" style={{left: '19%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-9 text-sm opacity-13" style={{left: '21%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-5 text-xs opacity-19" style={{left: '17%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-6 text-sm opacity-10" style={{left: '15%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-4 text-xs opacity-15" style={{left: '18%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-14 text-sm opacity-15" style={{left: '22%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-5 text-xs opacity-18" style={{left: '16%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-3 text-sm opacity-12" style={{left: '24%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-15 text-xs opacity-17" style={{left: '19%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-20 text-sm opacity-13" style={{left: '21%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
          <div className="absolute top-5 text-xs opacity-19" style={{left: '17%'}}><img src="/Airflow.jpg" alt="Cartoon Rocket" className="w-50 h-50 object-contain"/></div>
        </div>
      </div>

      {/* Navigation Content */}
      <div className="relative z-20 container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl font-bold text-foreground">
              Portfolio
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          {NAV_LINKS.length > 0 && (
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-xs bg-background">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b">
                      <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <Briefcase className="h-6 w-6 text-primary" />
                        <span className="font-headline text-xl font-bold text-foreground">
                          Gitfolio Pro
                        </span>
                      </Link>
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <X className="h-6 w-6" />
                          <span className="sr-only">Close menu</span>
                        </Button>
                      </SheetTrigger>
                    </div>
                    <nav className="flex flex-col gap-4 p-4">
                      {NAV_LINKS.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={(e) => handleLinkClick(e, link.href)}
                          className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}


