import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';
const industries = [{
  id: 'food',
  name: 'Food',
  image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  subCategories: ['Packaged Foods', 'Beverages', 'Snacks & Confectionery']
}, {
  id: 'agriculture',
  name: 'Agriculture & Farming',
  image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  subCategories: ['Seeds', 'Fertilizers', 'Farm Equipment']
}, {
  id: 'industrial',
  name: 'Industrial & Engineering',
  image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  subCategories: ['Metal Products', 'Industrial Supplies', 'Engineering Services']
}, {
  id: 'machinery',
  name: 'Machinery & Equipment',
  image: 'https://images.unsplash.com/photo-1581092921461-eab10380699b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  subCategories: ['Construction Machinery', 'Manufacturing Equipment', 'Material Handling']
}, {
  id: 'medical',
  name: 'Medical Equipment',
  image: 'https://images.unsplash.com/photo-1516549655103-982afbfce8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  subCategories: ['Diagnostic Equipment', 'Surgical Instruments', 'Medical Supplies']
}, {
  id: 'pharma',
  name: 'Pharmaceutical & Chemicals',
  image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  subCategories: ['Medicines', 'Chemical Compounds', 'Bulk Drugs']
}, {
  id: 'electronics',
  name: 'Electronics',
  image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  subCategories: ['Consumer Electronics', 'Electronic Components', 'Industrial Electronics']
}, {
  id: 'construction',
  name: 'Building & Construction',
  image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  subCategories: ['TMT Bars', 'PVC Pipes', 'Construction Materials']
}];
const featuredProducts = [{
  id: 1,
  name: 'Industrial Steel Pipes',
  image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  price: '$500 - $1,200',
  supplier: 'Steel Works Ltd.',
  location: 'Mumbai, India',
  rating: 4.5
}, {
  id: 2,
  name: 'Organic Rice (25kg)',
  image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  price: '$45 - $60',
  supplier: 'Green Farms Co.',
  location: 'Punjab, India',
  rating: 4.8
}, {
  id: 3,
  name: 'CNC Milling Machine',
  image: 'https://images.unsplash.com/photo-1565034946487-077786996e27?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  price: '$8,000 - $12,000',
  supplier: 'Precision Tools Inc.',
  location: 'Gujarat, India',
  rating: 4.2
}, {
  id: 4,
  name: 'Medical Surgical Masks',
  image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  price: '$0.10 - $0.25',
  supplier: 'HealthSafe Products',
  location: 'Delhi, India',
  rating: 4.7
}];
const HomePage = () => {
  return <div className="bg-gray-100 min-h-screen">
      {/* Hero Banner */}
      <div className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Connect with Trusted Suppliers & Grow Your Business
              </h1>
              <p className="text-lg mb-6">
                Find verified manufacturers, exporters, and wholesalers across
                various industries
              </p>
              <div className="flex space-x-4">
                <Link to="/signup" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-md">
                  Join as Buyer
                </Link>
                <Link to="/supplier/register" className="bg-transparent border border-white hover:bg-white hover:text-blue-700 text-white font-semibold py-2 px-6 rounded-md">
                  List Your Business
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Business Handshake" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
      {/* Industry Categories */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Browse by Industry
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map(industry => <Link key={industry.id} to={`/category/${industry.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-40 overflow-hidden">
                <img src={industry.image} alt={industry.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{industry.name}</h3>
                <ul className="text-sm text-gray-600">
                  {industry.subCategories.map((subCategory, index) => <li key={index} className="flex items-center mb-1">
                      <ChevronRightIcon size={14} className="mr-1 text-blue-600" />
                      {subCategory}
                    </li>)}
                </ul>
                <div className="mt-3 text-blue-600 text-sm font-medium flex items-center">
                  View All Products
                  <ChevronRightIcon size={16} className="ml-1" />
                </div>
              </div>
            </Link>)}
        </div>
      </div>
      {/* Featured Products */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => <Link key={product.id} to={`/product/${product.id}`} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {product.price}
                  </p>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">
                      {product.supplier}
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">{product.location}</p>
                  <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium">
                    Contact Supplier
                  </button>
                </div>
              </Link>)}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="inline-flex items-center bg-transparent text-blue-600 hover:text-blue-800 font-semibold py-2 px-4 border border-blue-600 hover:border-blue-800 rounded-md">
              View All Products
              <ChevronRightIcon size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
      {/* Why Choose Us */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Why Choose Our B2B Marketplace
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Verified Suppliers</h3>
            <p className="text-gray-600">
              All suppliers on our platform are thoroughly verified to ensure
              authenticity and reliability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Direct Communication</h3>
            <p className="text-gray-600">
              Connect directly with suppliers without any intermediaries for
              better deals and faster responses.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
            <p className="text-gray-600">
              Access thousands of products across multiple industries to find
              exactly what your business needs.
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default HomePage;