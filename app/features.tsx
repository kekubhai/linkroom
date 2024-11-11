import { Card, CardContent } from "@/components/ui/card"
import { Link, Sparkles, Users } from "lucide-react"

export default function Features() {
  return (
    <div className="container px-4 py-8">
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Beautiful Themes</h3>
            <p className="text-muted-foreground">
              Choose from a wide range of professionally designed themes or create your own.
            </p>
          </CardContent>
        </Card>
        <Card className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Built for Creators</h3>
            <p className="text-muted-foreground">
              Perfect for influencers, artists, businesses, and anyone who wants to share multiple links.
            </p>
          </CardContent>
        </Card>
        <Card className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <Link className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Custom Domains</h3>
            <p className="text-muted-foreground">
              Use your own domain name for a more professional and branded experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}