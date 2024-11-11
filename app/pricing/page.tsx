"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Toggle } from "@/components/ui/toggle"
import { Check } from "lucide-react"
import { useState } from "react"

export default function Component() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Free",
      description: "For your personal Linktree",
      subtext: "Boost your digital presence and monetize your socials",
      bgColor: "bg-sage-100 dark:bg-sage-900",
      features: [
        "Unlimited links",
        "Drive your offline traffic online with QR codes",
        "Grow your cross-channel following and connect all of your social profiles with one easy link",
        "Sell your merchandise and affiliate products with our Shop tab",
      ],
    },
    {
      name: "Starter",
      description: "For growing influencers",
      subtext: "Capture attention and engage visitors effortlessly",
      bgColor: "bg-sage-200 dark:bg-sage-800",
      features: [
        "Schedule a link to go live and disappear at specific dates and times",
        "Add animations to your most important links to highlight what's important",
        "Customize your button colors and shapes and choose the font that aligns with your brand or style",
        "Spotlight a link so that the content is already on display when a visitor lands on your Linktree",
        "View the performance of a specific link or social icon and track your commerce value",
      ],
    },
    {
      name: "Pro",
      description: "For content creators and businesses",
      subtext: "Elevate your brand, unlock insights and supercharge growth",
      bgColor: "bg-purple-600 dark:bg-purple-800",
      isPopular: true,
      textColor: "text-white",
      features: [
        "Create a bespoke Linktree that matches your branding or style. Add text, images, thumbnails, and animated backgrounds",
        "Gain deeper insights with comprehensive location/referrer based analytics and conversion tracking",
        "Collect email addresses and phone numbers directly from your Linktree to build your own visitor list",
        "Marketing tech capabilities including SEO settings, Google Analytics, Zapier, and Mailchimp integrations",
      ],
    },
    {
      name: "Premium",
      description: "For brands and businesses",
      subtext: "Gain personalized, high touch support to build your best Linktree",
      bgColor: "bg-sage-300 dark:bg-sage-700",
      features: [
        "Get tailored onboarding to help you get setup and optimise your Linktree from day one",
        "Priority customer support from one of our experts via email or video call",
        "Access to unlimited historical insights from the lifetime of your Linktree",
        "Export your analytics data",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background px-4 py-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Pricing</h1>
          <p className="text-xl text-muted-foreground">Save up to 30% on annual plans</p>
          
          {/* Billing Toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant={isAnnual ? "ghost" : "secondary"}
              onClick={() => setIsAnnual(false)}
              className="w-24"
            >
              Monthly
            </Button>
            <Button
              variant={isAnnual ? "secondary" : "ghost"}
              onClick={() => setIsAnnual(true)}
              className="w-24"
            >
              Annually
            </Button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                plan.bgColor
              } ${plan.textColor || ""}`}
            >
              {plan.isPopular && (
                <Badge className="absolute right-4 top-4 bg-[#CCFF00] text-black hover:bg-[#CCFF00]/80">
                  Most popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-sm font-medium">{plan.description}</p>
                <p className="mt-2 text-sm opacity-90">{plan.subtext}</p>
              </CardHeader>
              <CardContent>
                <div className="mt-4">
                  <p className="mb-4 font-medium">Key features:</p>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="mt-1 h-4 w-4 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  className={`mt-6 w-full ${
                    plan.name === "Pro"
                      ? "bg-[#CCFF00] text-black hover:bg-[#CCFF00]/90"
                      : plan.textColor
                      ? "bg-white text-black hover:bg-white/90"
                      : ""
                  }`}
                >
                  {plan.name === "Free" ? "Get started" : "Choose plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}