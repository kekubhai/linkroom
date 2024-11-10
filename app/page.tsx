/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-children-prop */
"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Cable, Sparkles, Users } from "lucide-react";

import Component from "./navbar";
import { CardContainer,  } from "@/components/ui/3d-card";
import { ThreeDCardDemo } from "@/components/ui/threedCard";

import { CardHoverEffectDemo } from "./features";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      
        
      <header className="sticky pl-10  top-3 w-full border-b bg-background/80 backdrop-blur-sm ">
        <Component/>
      </header>

      <main className="container mx-auto px-4 pt-24">
        <section className="py-20 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            One Link to Rule Them All
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create a beautiful, customizable link-in-bio page that showcases all your important links in one place.
          </p>
         <div className="space-x-2">
     <Link href="/dashboard" passHref>
          
     
    <Button size="lg" className="w-full sm:w-auto">
         <Cable></Cable>Create Your Linkroom
      <Sparkles className="ml-2 h-4 w-4" />
    </Button>
  </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Demo
            </Button>
          </div>
          
        </section>

        <section className="py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Your Digital Identity, Simplified</h2>
              <p className="text-lg text-muted-foreground">
                Linkroom gives you a beautiful, customizable page to share all your links, social media profiles, and content in one place.
              </p>
              <ul className="space-y-4">
                {[
                  "Customizable themes and styles",
                  "Analytics and insights",
                  "Custom domains",
                  "Social media integration",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square">
              <ThreeDCardDemo
                //src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
              
              />
            </div>
          </div>
          <CardHoverEffectDemo/>
        </section>
  
       
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Cable className="h-5 w-5" />
              <span className="font-semibold">Linkroom</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}