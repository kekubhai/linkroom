/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-children-prop */
"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Cable, Sparkles } from "lucide-react";

import Component from "../components/navbar";
import { ThreeDCardDemo } from "@/components/ui/threedCard";
import Features from "./features";
import GradualSpacing from "@/components/ui/gradual-spacing";
import FlickeringGrid from "@/components/ui/Dotbgdemo";
import BoxReveal from "@/components/ui/box-reveal";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted relative">
      
     

      <header className="sticky pl-10 top-3 w-full border-b bg-background/80 backdrop-blur-sm z-10">
        <Component />
      </header>

      <main className="container mx-auto px-4 pt-24 relative z-10">
        <section className="py-20 text-center">
          <GradualSpacing text={"One Link to Rule Them All"} className="text-7xl font-semibold font-sans" />
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create a beautiful, customizable link-in-bio page that showcases all your important links in one place.
          </p>
          <div className="space-x-2">
            <Link href="/dashboard" passHref>
              <Button size="lg" className="w-full sm:w-auto">
                <Cable /> Create Your Linkroom
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
              

              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
        Your Digital Identity, Simplified<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>
 
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
        Linkroom gives you a beautiful, customizable page to share all your links, .{" "}
          <span className="text-[#5046e6]">social media profiles, and content in one place</span>
        </h2>
      </BoxReveal>
 
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6">
          <p>
            -&gt; Customizable themes and styles for your
            <span className="font-semibold text-[#5046e6]"> Work</span>,
            <span className="font-semibold text-[#5046e6]"> Friends</span>,
            <span className="font-semibold text-[#5046e6]"> Loved Ones</span>,
            and
            <span className="font-semibold text-[#5046e6]"> And More...</span>
            . <br />
            -&gt; Analytics and insights <br />
            -&gt; Custom Domains <br />
            -&gt; Social media integration <br />
          </p>
        </div>
      </BoxReveal>
 
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
      </BoxReveal>

            </div>
            <div className="relative aspect-square">
              <ThreeDCardDemo />
            </div>
          </div>
          <Features />
        </section>
      </main>

      <footer className="border-t relative z-10">
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
