/* eslint-disable @next/next/no-html-link-for-pages */
import '../../app/globals.css'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { AuthFormData } from '../../types/auth';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Signup = () => {
  const [formData, setFormData] = useState<AuthFormData>({ email: '', password: '' });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push('/auth/login');
    } else {
      alert('Signup failed');
    }
  };

  const handleOAuthLogin = async (provider: string) => {
    // You would replace this with actual OAuth logic, possibly using NextAuth
    router.push(`/api/auth/${provider}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
        
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center justify-center mt-6">
          <span className="text-gray-600">Or sign up with</span>
        </div>
        
        <div className="flex space-x-4 mt-4 justify-center">
          <button
            onClick={() => handleOAuthLogin('google')}
            className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            <FcGoogle className="text-2xl" />
            <span className="ml-2 text-gray-700">Google</span>
          </button>
          
          <button
            onClick={() => handleOAuthLogin('github')}
            className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            <FaGithub className="text-2xl text-gray-800" />
            <span className="ml-2 text-gray-700">GitHub</span>
          </button>
          
          <button
            onClick={() => handleOAuthLogin('twitter')}
            className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            <FaTwitter className="text-2xl text-blue-400" />
            <span className="ml-2 text-gray-700">Twitter</span>
          </button>
        </div>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account? <a href="/auth/login" className="text-blue-500 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
