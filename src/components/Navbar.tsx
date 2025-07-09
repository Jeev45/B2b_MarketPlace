import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, HelpCircleIcon, MessageSquareIcon, UserIcon, ShoppingBagIcon } from 'lucide-react';
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  // Mock categories for suggestions
  const categories = ['Food Products', 'Agricultural Products', 'Industrial Machinery', 'Engineering Products', 'Medical Equipment', 'Pharmaceuticals', 'Chemicals', 'Electronics', 'Building Materials', 'Construction Equipment'];
  const filteredCategories = categories.filter(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()));
  return <nav className="bg-blue-700 text-white shadow-md">
      {/* Top Navigation */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            B2B Marketplace
          </Link>
          {/* Search */}
          <div className="relative w-full md:w-2/5">
            <div className="flex items-center bg-white rounded-md">
              <input type="text" placeholder="Search Products, Suppliers..." className="w-full py-2 px-4 rounded-l-md text-gray-800 focus:outline-none" value={searchQuery} onChange={e => {
              setSearchQuery(e.target.value);
              setShowSuggestions(e.target.value.length > 0);
            }} onFocus={() => setShowSuggestions(searchQuery.length > 0)} onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} />
              <button className="bg-yellow-500 text-white p-2 rounded-r-md hover:bg-yellow-600">
                <SearchIcon size={20} />
              </button>
            </div>
            {/* Search suggestions */}
            {showSuggestions && <div className="absolute z-10 w-full bg-white mt-1 rounded-md shadow-lg text-gray-800">
                {filteredCategories.length > 0 ? filteredCategories.map((category, index) => <div key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => {
              setSearchQuery(category);
              setShowSuggestions(false);
            }}>
                      {category}
                    </div>) : <div className="px-4 py-2">No suggestions found</div>}
              </div>}
          </div>
          {/* User Links */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="flex items-center hover:text-yellow-300">
              <UserIcon size={18} className="mr-1" />
              <span>Login</span>
            </Link>
            <Link to="/help" className="flex items-center hover:text-yellow-300">
              <HelpCircleIcon size={18} className="mr-1" />
              <span>Help</span>
            </Link>
            <Link to="/messages" className="flex items-center hover:text-yellow-300">
              <MessageSquareIcon size={18} className="mr-1" />
              <span>Messages</span>
            </Link>
          </div>
        </div>
      </div>
      {/* Category Navigation */}
      <div className="bg-blue-800 py-2 overflow-x-auto">
        <div className="container mx-auto px-4 flex space-x-6">
          <Link to="/category/food" className="text-sm whitespace-nowrap hover:text-yellow-300">
            Food
          </Link>
          <Link to="/category/agriculture" className="text-sm whitespace-nowrap hover:text-yellow-300">
            Agriculture & Farming
          </Link>
          <Link to="/category/industrial" className="text-sm whitespace-nowrap hover:text-yellow-300">
            Industrial Products
          </Link>
          <Link to="/category/machinery" className="text-sm whitespace-nowrap hover:text-yellow-300">
            Machinery & Equipment
          </Link>
          <Link to="/category/medical" className="text-sm whitespace-nowrap hover:text-yellow-300">
            Medical Equipment
          </Link>
          <Link to="/category/pharma" className="text-sm whitespace-nowrap hover:text-yellow-300">
            Pharmaceutical
          </Link>
          <Link to="/category/electronics" className="text-sm whitespace-nowrap hover:text-yellow-300">
            Electronics
          </Link>
          <Link to="/category/construction" className="text-sm whitespace-nowrap hover:text-yellow-300">
            Building & Construction
          </Link>
        </div>
      </div>
    </nav>;
};
export default Navbar;