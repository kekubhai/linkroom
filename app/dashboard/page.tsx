/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import * as React from "react"
import { Archive, Copy, Link2, MoreVertical, Plus, Share2, Trash } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"

import Image from "next/image"
import { toast } from "@/hooks/use-toast"

interface LinkItem {
  id: string
  title: string
  url: string
  icon: string
  clicks: number
  active: boolean
}

export default function Component() {
  const [links, setLinks] = React.useState<LinkItem[]>([
    {
      id: "1",
      title: "Instagram",
      url: "https://www.instagram.com/onirbannn/",
      icon: "/placeholder.svg?height=32&width=32",
      clicks: 14,
      active: true,
    },
    {
      id: "2",
      title: "kekubhai - Overview",
      url: "https://github.com/kekubhai",
      icon: "/placeholder.svg?height=32&width=32",
      clicks: 25,
      active: true,
    },
    {
      id: "3",
      title: "x.com",
      url: "https://x.com/onirbanhere",
      icon: "/placeholder.svg?height=32&width=32",
      clicks: 5,
      active: true,
    },
  ])

  const handleShare = async () => {
    try {
      await navigator.share({
        title: "@onirbannn's Linktree",
        url: "https://linktr.ee/onirbannn",
      })
    } catch (error) {
      toast({
        title: "Copied link to clipboard!",
        description: "Share this link with others to show them your Linktree.",
      })
      await navigator.clipboard.writeText("https://linktr.ee/onirbannn")
    }
  }

  const toggleLink = (id: string) => {
    setLinks(links.map(link => 
      link.id === id ? { ...link, active: !link.active } : link
    ))
  }

  return (
    <div className="mx-auto max-w-6xl p-4">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <Button className="w-full bg-purple-600 hover:bg-purple-700" size="lg">
            <Plus className="mr-2" />
            Add link
          </Button>
          <div className="flex items-center justify-between">
            <Button variant="ghost" className="text-gray-600">
              <Archive className="mr-2 h-4 w-4" />
              Add collection
            </Button>
            <Button variant="ghost" className="text-gray-600">
              View archive
              <Archive className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            {links.map((link) => (
              <div
                key={link.id}
                className="flex items-center justify-between rounded-lg border p-4 shadow-sm"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Image
                      alt={link.title}
                      className="h-8 w-8 rounded-full"
                      src={link.icon}
                      width={10}
                      height={100}
                    />
                    <div>
                      <h3 className="font-medium">{link.title}</h3>
                      <p className="text-sm text-gray-500">{link.url}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{link.clicks} clicks</span>
                  <Switch
                    checked={link.active}
                    onCheckedChange={() => toggleLink(link.id)}
                  />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                        <span className="sr-only">More options</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy URL
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link2 className="mr-2 h-4 w-4" />
                        Edit link
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-[300px]">
          <div className="sticky top-4 rounded-[40px] border-8 border-gray-900 bg-gray-100 p-4 shadow-xl">
            <div className="absolute right-4 top-4">
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-4 pt-8">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg?height=80&width=80" alt="@onirbannn" />
                <AvatarFallback>ON</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold">@onirbannn</h2>
              <div className="w-full space-y-2">
                {links.filter(link => link.active).map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    className="flex items-center space-x-2 rounded-md bg-white p-3 shadow-sm transition-colors hover:bg-gray-50"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      alt={link.title}
                      className="h-6 w-6 rounded-full"
                      src={link.icon}
                      width={100}
                      height={100}
                    />
                    <span>{link.title}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="text-sm text-gray-500">Linktree*</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}