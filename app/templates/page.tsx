'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, Heart, Zap, Tv, Gem } from "lucide-react"
import Image from "next/image"

export default function Component() {
  const categories = [
    "Fashion",
    "Health and Fitness",
    "Influencer and Creator",
    "Marketing",
    "Music",
    "Small Business",
    "Social Media",
    "Sports",
    "Work",
    "Personal",
    "Anime",
    "Cyberpunk",
  ]

  const templates = [
   
    {
      name: "Tatiana Reine",
      description: "Mindfulness and wellbeing",
      image: "/placeholder.svg?height=100&width=100",
      buttons: ["Last Album", "Book a Session", "Resources"],
      bgColor: "bg-orange-700",
      textColor: "text-white",
      icon:  <Gem className="h-8 w-8" />,
    },
    {
      name: "Professional Portfolio",
      description: "Showcase your work and skills",
      image: "/placeholder.svg?height=100&width=100",
      buttons: ["Resume", "Projects", "Contact"],
      bgColor: "bg-blue-600",
      textColor: "text-white",
      icon: <Briefcase className="h-8 w-8" />,
    },
    {
      name: "Friend Zone",
      description: "Connect with your squad",
      image: "/placeholder.svg?height=100&width=100",
      buttons: ["Events", "Photos", "Group Chat"],
      bgColor: "bg-green-500",
      textColor: "text-white",
      icon: <Users className="h-8 w-8" />,
    },
    {
      name: "Love Links",
      description: "Share moments with loved ones",
      image: "/placeholder.svg?height=100&width=100",
      buttons: ["Our Story", "Date Ideas", "Wishlist"],
      bgColor: "bg-pink-500",
      textColor: "text-white",
      icon: <Heart className="h-8 w-8" />,
    },
    {
      name: "Neon Nexus",
      description: "Your cyberpunk digital identity",
      image: "/placeholder.svg?height=100&width=100",
      buttons: ["Augments", "Netrunner Status", "Black Market"],
      bgColor: "bg-purple-900",
      textColor: "text-neon-green",
      icon: <Zap className="h-8 w-8" />,
    },
    {
      name: "Anime Central",
      description: "Your otaku headquarters",
      image: "/placeholder.svg?height=100&width=100",
      buttons: ["Watchlist", "Cosplay Gallery", "Anime News"],
      bgColor: "bg-red-600",
      textColor: "text-white",
      icon: <Tv className="h-8 w-8" />,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      
      <section className="container px-4 py-24 text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          A LinkRoom Template To
          <br />
          Suit Every Brand And
          <br />
          Creator
        </h1>
        <p className="mx-auto max-w-3xl text-muted-foreground">
          Different Link Apps, Integrations and visual styles can help you create a Linktree that looks and feels like you and
          your brand. Explore our library of custom templates to grow and connect with your audience even more easily!
        </p>
      </section>

      {/* Browse Section */}
      <section className="container px-4 py-8">
        <h2 className="mb-4 text-xl font-semibold">Browse by</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="cursor-pointer px-4 py-2 text-sm hover:bg-secondary/80"
            >
              {category}
            </Badge>
          ))}
          <Button variant="link" className="text-primary">
            View all
          </Button>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="container px-4 py-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {templates.map((template) => (
            <Card
              key={template.name}
              className={`group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${template.bgColor} ${template.textColor}`}
            >
              <CardContent className="p-6">
                <div className="mb-6 flex flex-col items-center gap-4">
                  <div className="overflow-hidden rounded-full">
                    {template.icon ? (
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                        {template.icon}
                      </div>
                    ) : (
                      <Image
                        src={template.image}
                        alt={template.name}
                        width={80}
                        height={80}
                        className="h-20 w-20 object-cover"
                      />
                    )}
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">{template.name}</h3>
                    <p className="text-sm opacity-90">{template.description}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {template.buttons.map((button) => (
                    <Button
                      key={button}
                      variant="secondary"
                      className="w-full bg-white/90 text-black hover:bg-white/100 dark:bg-white/90 dark:text-black dark:hover:bg-white/100"
                    >
                      {button}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}