import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboardIcon, PackageIcon, MessageSquareIcon, UserIcon, SettingsIcon, LogOutIcon, PlusIcon, EditIcon, TrashIcon, BarChart2Icon } from 'lucide-react';
// Mock data for supplier products
const supplierProducts = [{
  id: 1,
  name: 'Industrial Steel Pipes',
  image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  price: '$500 - $1,200',
  category: 'Building & Construction',
  inquiries: 24,
  status: 'active'
}, {
  id: 2,
  name: 'Stainless Steel Flanges',
  image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  price: '$50 - $200',
  category: 'Industrial & Engineering',
  inquiries: 16,
  status: 'active'
}, {
  id: 3,
  name: 'Steel Pipe Fittings',
  image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  price: '$20 - $80',
  category: 'Industrial & Engineering',
  inquiries: 8,
  status: 'active'
}, {
  id: 4,
  name: 'Galvanized Steel Tubes',
  image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  price: '$450 - $900',
  category: 'Building & Construction',
  inquiries: 12,
  status: 'inactive'
}];
// Mock data for recent inquiries
const recentInquiries = [{
  id: 1,
  product: 'Industrial Steel Pipes',
  buyer: 'Construction Co. Ltd.',
  message: 'We are interested in your industrial steel pipes. Can you provide more details about the specifications and bulk pricing?',
  date: '2023-05-15',
  status: 'new'
}, {
  id: 2,
  product: 'Stainless Steel Flanges',
  buyer: 'Engineering Solutions',
  message: 'Hello, we need 500 units of stainless steel flanges. What is your best price and delivery time?',
  date: '2023-05-14',
  status: 'replied'
}, {
  id: 3,
  product: 'Industrial Steel Pipes',
  buyer: 'Global Builders Inc.',
  message: 'Can you ship 1000 meters of industrial steel pipes to our location in Dubai? Please quote including shipping.',
  date: '2023-05-12',
  status: 'new'
}];
const SupplierDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <div>
            {/* Dashboard Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Total Products
                  </h3>
                  <PackageIcon size={24} className="text-blue-600" />
                </div>
                <p className="text-3xl font-bold">{supplierProducts.length}</p>
                <p className="text-sm text-gray-600 mt-2">
                  {supplierProducts.filter(p => p.status === 'active').length}{' '}
                  active
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Total Inquiries
                  </h3>
                  <MessageSquareIcon size={24} className="text-green-600" />
                </div>
                <p className="text-3xl font-bold">{recentInquiries.length}</p>
                <p className="text-sm text-gray-600 mt-2">
                  {recentInquiries.filter(i => i.status === 'new').length} new
                  inquiries
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Profile Views
                  </h3>
                  <UserIcon size={24} className="text-purple-600" />
                </div>
                <p className="text-3xl font-bold">142</p>
                <p className="text-sm text-gray-600 mt-2">
                  +23% from last month
                </p>
              </div>
            </div>
            {/* Recent Inquiries */}
            <div className="bg-white rounded-lg shadow-sm mb-8">
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold">Recent Inquiries</h2>
                <Link to="/supplier/inquiries" className="text-blue-600 text-sm font-medium hover:underline">
                  View All
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
                    <tr>
                      <th className="px-6 py-3 text-left">Product</th>
                      <th className="px-6 py-3 text-left">Buyer</th>
                      <th className="px-6 py-3 text-left">Message</th>
                      <th className="px-6 py-3 text-left">Date</th>
                      <th className="px-6 py-3 text-left">Status</th>
                      <th className="px-6 py-3 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentInquiries.map(inquiry => <tr key={inquiry.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          {inquiry.product}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {inquiry.buyer}
                        </td>
                        <td className="px-6 py-4 max-w-xs truncate">
                          {inquiry.message}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {inquiry.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${inquiry.status === 'new' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                            {inquiry.status === 'new' ? 'New' : 'Replied'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="text-blue-600 hover:text-blue-800">
                            Reply
                          </button>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Performance Chart Placeholder */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">
                Performance Overview
              </h2>
              <div className="h-64 flex items-center justify-center border border-dashed border-gray-300 rounded-lg bg-gray-50">
                <div className="text-center">
                  <BarChart2Icon size={48} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-500">
                    Performance chart would appear here
                  </p>
                </div>
              </div>
            </div>
          </div>;
      case 'products':
        return <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">My Products</h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center">
                <PlusIcon size={16} className="mr-2" />
                Add New Product
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
                    <tr>
                      <th className="px-6 py-3 text-left">Product</th>
                      <th className="px-6 py-3 text-left">Category</th>
                      <th className="px-6 py-3 text-left">Price</th>
                      <th className="px-6 py-3 text-left">Inquiries</th>
                      <th className="px-6 py-3 text-left">Status</th>
                      <th className="px-6 py-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {supplierProducts.map(product => <tr key={product.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img src={product.image} alt={product.name} className="h-10 w-10 rounded-md object-cover" />
                            </div>
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">
                                {product.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {product.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {product.price}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {product.inquiries}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${product.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {product.status === 'active' ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <EditIcon size={16} />
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              <TrashIcon size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>;
      case 'inquiries':
        return <div>
            <h2 className="text-xl font-semibold mb-6">All Inquiries</h2>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
                    <tr>
                      <th className="px-6 py-3 text-left">Product</th>
                      <th className="px-6 py-3 text-left">Buyer</th>
                      <th className="px-6 py-3 text-left">Message</th>
                      <th className="px-6 py-3 text-left">Date</th>
                      <th className="px-6 py-3 text-left">Status</th>
                      <th className="px-6 py-3 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentInquiries.map(inquiry => <tr key={inquiry.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          {inquiry.product}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {inquiry.buyer}
                        </td>
                        <td className="px-6 py-4 max-w-xs truncate">
                          {inquiry.message}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {inquiry.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${inquiry.status === 'new' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                            {inquiry.status === 'new' ? 'New' : 'Replied'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="text-blue-600 hover:text-blue-800">
                            {inquiry.status === 'new' ? 'Reply' : 'View'}
                          </button>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>;
      case 'profile':
        return <div>
            <h2 className="text-xl font-semibold mb-6">Company Profile</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="h-20 w-20 bg-gray-200 rounded-md flex items-center justify-center">
                    <BuildingIcon size={36} className="text-gray-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Steel Works Ltd.</h3>
                    <p className="text-gray-600">Manufacturer & Exporter</p>
                  </div>
                </div>
                <button className="text-blue-600 text-sm font-medium hover:underline">
                  Change Company Logo
                </button>
              </div>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input type="text" defaultValue="Steel Works Ltd." className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Type
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>Manufacturer</option>
                      <option>Wholesaler</option>
                      <option>Distributor</option>
                      <option>Retailer</option>
                      <option>Service Provider</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Year Established
                    </label>
                    <input type="number" defaultValue="2005" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Employees
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>1-10</option>
                      <option>11-50</option>
                      <option>51-100</option>
                      <option selected>100-500</option>
                      <option>500+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Person
                    </label>
                    <input type="text" defaultValue="Rajesh Kumar" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Email
                    </label>
                    <input type="email" defaultValue="sales@steelworksltd.com" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Phone
                    </label>
                    <input type="tel" defaultValue="+91-9876543210" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input type="text" defaultValue="Mumbai, Maharashtra, India" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Description
                  </label>
                  <textarea rows={4} defaultValue="Steel Works Ltd. is a leading manufacturer and exporter of high-quality steel products including pipes, flanges, and fittings. With over 15 years of experience, we serve clients in construction, oil & gas, and manufacturing industries worldwide." className="w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
                </div>
                <div>
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>;
      default:
        return <div>Select a tab</div>;
    }
  };
  return <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Supplier Dashboard</h1>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Navigation */}
          <aside className="md:w-1/5">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold">Steel Works Ltd.</h2>
                <p className="text-sm text-gray-600">Manufacturer</p>
              </div>
              <nav className="p-2">
                <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center px-4 py-2 rounded-md text-left mb-1 ${activeTab === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}>
                  <LayoutDashboardIcon size={18} className="mr-3" />
                  Dashboard
                </button>
                <button onClick={() => setActiveTab('products')} className={`w-full flex items-center px-4 py-2 rounded-md text-left mb-1 ${activeTab === 'products' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}>
                  <PackageIcon size={18} className="mr-3" />
                  Products
                </button>
                <button onClick={() => setActiveTab('inquiries')} className={`w-full flex items-center px-4 py-2 rounded-md text-left mb-1 ${activeTab === 'inquiries' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}>
                  <MessageSquareIcon size={18} className="mr-3" />
                  Inquiries
                </button>
                <button onClick={() => setActiveTab('profile')} className={`w-full flex items-center px-4 py-2 rounded-md text-left mb-1 ${activeTab === 'profile' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}>
                  <UserIcon size={18} className="mr-3" />
                  Company Profile
                </button>
                <button onClick={() => setActiveTab('settings')} className={`w-full flex items-center px-4 py-2 rounded-md text-left mb-1 ${activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}>
                  <SettingsIcon size={18} className="mr-3" />
                  Settings
                </button>
                <Link to="/login" className="w-full flex items-center px-4 py-2 rounded-md text-left text-gray-700 hover:bg-gray-100">
                  <LogOutIcon size={18} className="mr-3" />
                  Logout
                </Link>
              </nav>
            </div>
          </aside>
          {/* Main Content */}
          <main className="md:w-4/5">{renderTabContent()}</main>
        </div>
      </div>
    </div>;
};
export default SupplierDashboard;