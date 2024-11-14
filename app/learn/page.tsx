/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link, BookOpen, Edit3, Grid, Shield, Lightbulb, HelpCircle } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function LearnPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Learn LinkRoom</h1>
        <p className="text-xl text-muted-foreground">
          Discover how to organize and access your links with ease
        </p>
      </header>

      <main className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Link className="mr-2" />
            Link Management
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Adding, Removing, and Updating Links</CardTitle>
              <CardDescription>
                Easily manage your collection of web links, social media accounts, and project pages.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Click the "Add Link" button on your dashboard to create a new link entry.</li>
                <li>Fill in the URL, title, and optionally add a description and category.</li>
                <li>To edit a link, click the edit icon next to any existing link.</li>
                <li>Remove links by clicking the delete icon or selecting multiple links for batch deletion.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <BookOpen className="mr-2" />
            Categorization
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Organizing Your Links</CardTitle>
              <CardDescription>
                Keep your links tidy and easy to find with custom categories.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Create categories like "Social Media," "Projects," or "Work Resources."</li>
                <li>Assign categories when adding or editing links.</li>
                <li>Filter your dashboard view by category for quick access.</li>
                <li>Drag and drop links between categories for easy reorganization.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Grid className="mr-2" />
            User Dashboard
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Your LinkRoom at a Glance</CardTitle>
              <CardDescription>
                Navigate your personalized link management hub with ease.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>View all your links organized by category.</li>
                <li>See quick stats on your total links and category distribution.</li>
                <li>Access recently added or frequently used links prominently.</li>
                <li>Use the search function to quickly find specific links.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Shield className="mr-2" />
            Privacy Settings
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Managing Link Visibility</CardTitle>
              <CardDescription>
                Control who can see your links with flexible privacy options.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Set individual links as public or private.</li>
                <li>Create a public profile to share selected links with others.</li>
                <li>Use password protection for sensitive link collections.</li>
                <li>Generate temporary access links for time-limited sharing.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Lightbulb className="mr-2" />
            Tips for Effective Organization
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Maximize Your LinkRoom Experience</CardTitle>
              <CardDescription>
                Best practices to keep your digital life organized.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use clear, descriptive titles for your links to make them easy to identify.</li>
                <li>Create a logical category structure that suits your needs.</li>
                <li>Regularly review and clean up your links to keep your LinkRoom tidy.</li>
                <li>Utilize tags for cross-category organization and easier searching.</li>
                <li>Take advantage of the notes feature to add context to your links.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <HelpCircle className="mr-2" />
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How many links can I store in LinkRoom?</AccordionTrigger>
              <AccordionContent>
                LinkRoom offers unlimited link storage for all users. You can add as many links as you need to keep your digital life organized.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I share my LinkRoom profile with others?</AccordionTrigger>
              <AccordionContent>
                Yes! You can create a public profile that showcases selected links. You control which links are visible to others, ensuring your private information stays secure.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is there a mobile app for LinkRoom?</AccordionTrigger>
              <AccordionContent>
                Currently, LinkRoom is available as a responsive web application that works great on both desktop and mobile browsers. We're working on dedicated mobile apps for iOS and Android, coming soon!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How do I recover a deleted link?</AccordionTrigger>
              <AccordionContent>
                LinkRoom keeps a trash bin of recently deleted links for 30 days. You can access this from your dashboard to restore any accidentally deleted links within this timeframe.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Can I import links from other services?</AccordionTrigger>
              <AccordionContent>
                Yes! LinkRoom supports importing links from popular bookmark managers and browser exports. Check out our "Import" feature in the dashboard for step-by-step instructions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </div>
  )
}