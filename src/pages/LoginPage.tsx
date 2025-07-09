import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, BuildingIcon } from 'lucide-react';
const LoginPage = () => {
  const [userType, setUserType] = useState('buyer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', {
      userType,
      email,
      password
    });
  };
  return <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Log in to B2B Marketplace
          </h1>
          <p className="mt-2 text-gray-600">
            Enter your details to access your account
          </p>
        </div>
        {/* User Type Selection */}
        <div className="flex border border-gray-300 rounded-lg mb-6">
          <button type="button" className={`w-1/2 py-3 flex justify-center items-center ${userType === 'buyer' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'} rounded-l-lg transition-colors`} onClick={() => setUserType('buyer')}>
            <UserIcon size={18} className="mr-2" />
            Buyer Login
          </button>
          <button type="button" className={`w-1/2 py-3 flex justify-center items-center ${userType === 'supplier' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'} rounded-r-lg transition-colors`} onClick={() => setUserType('supplier')}>
            <BuildingIcon size={18} className="mr-2" />
            Supplier Login
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
          </div>
          <div className="mb-6">
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <input id="password" name="password" type="password" autoComplete="current-password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium">
            Log In
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>;
};
export default LoginPage;