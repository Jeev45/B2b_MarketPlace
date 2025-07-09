import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FilterIcon, ChevronDownIcon, StarIcon } from 'lucide-react';
// Mock data for products
const mockProducts = [{
  id: 1,
  name: 'Industrial Steel Pipes',
  image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  price: '$500 - $1,200',
  minOrder: '100 pieces',
  supplier: 'Steel Works Ltd.',
  location: 'Mumbai, India',
  rating: 4.5,
  verified: true,
  description: 'High-quality industrial steel pipes for construction and manufacturing. Available in various sizes and specifications.'
}, {
  id: 2,
  name: 'Stainless Steel Flanges',
  image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  price: '$50 - $200',
  minOrder: '50 pieces',
  supplier: 'Metal Solutions Co.',
  location: 'Ahmedabad, India',
  rating: 4.2,
  verified: true,
  description: 'Premium quality stainless steel flanges for industrial piping systems. Corrosion resistant and durable.'
}, {
  id: 3,
  name: 'PVC Pipes (75mm)',
  image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  price: '$15 - $25',
  minOrder: '200 meters',
  supplier: 'Plastix Industries',
  location: 'Delhi, India',
  rating: 4.7,
  verified: true,
  description: 'High-grade PVC pipes for plumbing and drainage systems. UV resistant and long-lasting.'
}, {
  id: 4,
  name: 'TMT Steel Bars (12mm)',
  image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  price: '$600 - $750 per ton',
  minOrder: '5 tons',
  supplier: 'Steel Masters Inc.',
  location: 'Jamshedpur, India',
  rating: 4.8,
  verified: true,
  description: 'High tensile strength TMT steel bars for construction. Earthquake resistant and corrosion protected.'
}, {
  id: 5,
  name: 'Cement (53 Grade)',
  image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  price: '$7 - $9 per bag',
  minOrder: '100 bags',
  supplier: 'BuildWell Cements',
  location: 'Chennai, India',
  rating: 4.3,
  verified: false,
  description: 'Premium quality Portland cement for all construction needs. High strength and quick setting.'
}, {
  id: 6,
  name: 'Construction Bricks',
  image: 'https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  price: '$0.15 - $0.25 per piece',
  minOrder: '5000 pieces',
  supplier: 'Red Clay Products',
  location: 'Kolkata, India',
  rating: 4.1,
  verified: true,
  description: 'Red clay construction bricks with high compression strength. Uniform size and quality.'
}];
// Mock category names
const categoryNames = {
  construction: 'Building & Construction',
  industrial: 'Industrial & Engineering',
  food: 'Food Products',
  agriculture: 'Agriculture & Farming',
  machinery: 'Machinery & Equipment',
  medical: 'Medical Equipment',
  pharma: 'Pharmaceutical & Chemicals',
  electronics: 'Electronics'
};
const ProductListingPage = () => {
  const {
    categoryId
  } = useParams();
  const [products, setProducts] = useState(mockProducts);
  const [priceFilter, setPriceFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [verifiedFilter, setVerifiedFilter] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const categoryName = categoryNames[categoryId as keyof typeof categoryNames] || 'Products';
  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    if (verifiedFilter && !product.verified) return false;
    if (locationFilter !== 'all' && product.location.indexOf(locationFilter) === -1) return false;
    return true;
  });
  return <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Home / Categories / {categoryName}
          </p>
        </div>
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6">{categoryName}</h1>
        {/* Filter Toggle for Mobile */}
        <div className="md:hidden mb-4">
          <button onClick={() => setShowFilters(!showFilters)} className="flex items-center justify-between w-full bg-white p-4 rounded-md shadow-sm">
            <span className="flex items-center font-medium">
              <FilterIcon size={18} className="mr-2" /> Filters
            </span>
            <ChevronDownIcon size={18} className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <aside className={`md:w-1/4 ${showFilters ? 'block' : 'hidden'} md:block`}>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="font-semibold text-lg mb-4">Filters</h2>
              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="price" value="all" checked={priceFilter === 'all'} onChange={() => setPriceFilter('all')} className="mr-2" />
                    <span>All Prices</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="price" value="low" checked={priceFilter === 'low'} onChange={() => setPriceFilter('low')} className="mr-2" />
                    <span>Under $100</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="price" value="medium" checked={priceFilter === 'medium'} onChange={() => setPriceFilter('medium')} className="mr-2" />
                    <span>$100 - $500</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="price" value="high" checked={priceFilter === 'high'} onChange={() => setPriceFilter('high')} className="mr-2" />
                    <span>Above $500</span>
                  </label>
                </div>
              </div>
              {/* Location Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Location</h3>
                <select value={locationFilter} onChange={e => setLocationFilter(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="all">All Locations</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                </select>
              </div>
              {/* Verified Suppliers Filter */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input type="checkbox" checked={verifiedFilter} onChange={() => setVerifiedFilter(!verifiedFilter)} className="mr-2" />
                  <span>Verified Suppliers Only</span>
                </label>
              </div>
              {/* Clear Filters Button */}
              <button onClick={() => {
              setPriceFilter('all');
              setLocationFilter('all');
              setVerifiedFilter(false);
            }} className="w-full py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
                Clear All Filters
              </button>
            </div>
          </aside>
          {/* Product Listings */}
          <div className="md:w-3/4">
            {/* Sort Options */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                <span className="font-medium">{filteredProducts.length}</span>{' '}
                products found
              </p>
              <div className="flex items-center">
                <span className="mr-2 text-gray-600">Sort by:</span>
                <select className="border border-gray-300 rounded-md p-1">
                  <option>Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>
            {/* Products Grid */}
            <div className="space-y-6">
              {filteredProducts.map(product => <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Product Image */}
                    <div className="md:w-1/4 h-48 md:h-auto">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    {/* Product Details */}
                    <div className="p-4 md:w-3/4 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h2 className="text-xl font-semibold mb-2">
                            {product.name}
                          </h2>
                          <div className="flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">
                            <StarIcon size={14} className="mr-1 fill-current text-yellow-500" />
                            {product.rating}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-2">
                          {product.description}
                        </p>
                        <div className="flex flex-wrap gap-y-2 gap-x-4 mb-4">
                          <div>
                            <span className="text-gray-600 text-sm">
                              Price:
                            </span>
                            <p className="font-semibold text-blue-600">
                              {product.price}
                            </p>
                          </div>
                          <div>
                            <span className="text-gray-600 text-sm">
                              Min. Order:
                            </span>
                            <p className="font-medium">{product.minOrder}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2">
                        <div>
                          <p className="font-medium">{product.supplier}</p>
                          <div className="flex items-center">
                            <span className="text-sm text-gray-600">
                              {product.location}
                            </span>
                            {product.verified && <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Verified
                              </span>}
                          </div>
                        </div>
                        <button className="mt-3 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                          Contact Supplier
                        </button>
                      </div>
                    </div>
                  </div>
                </div>)}
              {/* Empty State */}
              {filteredProducts.length === 0 && <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <p className="text-gray-600 mb-2">
                    No products match your filters
                  </p>
                  <button onClick={() => {
                setPriceFilter('all');
                setLocationFilter('all');
                setVerifiedFilter(false);
              }} className="text-blue-600 hover:underline">
                    Clear all filters
                  </button>
                </div>}
            </div>
            {/* Pagination */}
            {filteredProducts.length > 0 && <div className="mt-8 flex justify-center">
                <div className="flex items-center space-x-1">
                  <button className="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 rounded-md bg-blue-600 text-white">
                    1
                  </button>
                  <button className="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                    ...
                  </button>
                  <button className="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                    10
                  </button>
                  <button className="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </div>;
};
export default ProductListingPage;