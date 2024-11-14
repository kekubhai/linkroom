/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import '../../app/globals.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function SignupPage() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
  
    console.log('Signup with:', formData)
  }

  const handleOAuthLogin = (provider: string) => {
    setIsModalOpen(true)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
        
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>

        <div className="flex items-center justify-center mt-6">
          <span className="text-gray-600">Or sign up with</span>
        </div>
        
        <div className="flex space-x-4 mt-4 justify-center">
          <Button variant="outline" onClick={() => handleOAuthLogin('google')}>
            <FcGoogle className="mr-2 h-4 w-4" />
            Google
          </Button>
          
          <Button variant="outline" onClick={() => handleOAuthLogin('github')}>
            <FaGithub className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          
          <Button variant="outline" onClick={() => handleOAuthLogin('twitter')}>
            <FaTwitter className="mr-2 h-4 w-4" />
            Twitter
          </Button>
        </div>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold">Oops!</DialogTitle>
            <DialogDescription className="text-center text-lg">
              Abhi Tak nhi hua Bhaiya, Maaf Kardio
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 flex justify-center">
            <Button onClick={() => setIsModalOpen(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}