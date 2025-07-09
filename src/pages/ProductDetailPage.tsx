import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, MessageSquareIcon, StarIcon, CheckIcon, ChevronRightIcon } from 'lucide-react';
// Mock product data
const product = {
  id: 1,
  name: 'Industrial Steel Pipes',
  images: ['https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'],
  price: '$500 - $1,200',
  minOrder: '100 pieces',
  material: 'Stainless Steel',
  sizes: ['2 inch', '4 inch', '6 inch', '8 inch'],
  thickness: '2mm - 10mm',
  certification: 'ISO 9001:2015',
  description: 'High-quality industrial steel pipes for construction and manufacturing. These pipes are corrosion resistant and suitable for high-pressure applications. Available in various sizes and specifications to meet different industrial requirements.',
  supplier: {
    name: 'Steel Works Ltd.',
    location: 'Mumbai, Maharashtra, India',
    established: 2005,
    employees: '100-500',
    rating: 4.5,
    verified: true,
    responseTime: '< 24 hours',
    contact: {
      person: 'Rajesh Kumar',
      phone: '+91-9876543210',
      email: 'sales@steelworksltd.com'
    }
  },
  specifications: [{
    name: 'Material',
    value: 'Stainless Steel 304/316/316L'
  }, {
    name: 'Diameter',
    value: '15mm to 300mm'
  }, {
    name: 'Length',
    value: '3m / 6m / Custom'
  }, {
    name: 'Wall Thickness',
    value: '2mm to 10mm'
  }, {
    name: 'Surface Finish',
    value: 'Polished/Brushed/Matt'
  }, {
    name: 'Application',
    value: 'Industrial, Construction, Oil & Gas'
  }, {
    name: 'Standard',
    value: 'ASTM A312, ASME SA312'
  }, {
    name: 'Testing',
    value: 'Hydrostatic, Ultrasonic'
  }],
  relatedProducts: [{
    id: 2,
    name: 'Stainless Steel Flanges',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    price: '$50 - $200'
  }, {
    id: 3,
    name: 'Steel Pipe Fittings',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    price: '$20 - $80'
  }, {
    id: 4,
    name: 'Galvanized Steel Tubes',
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    price: '$450 - $900'
  }]
};
const ProductDetailPage = () => {
  const {
    productId
  } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showContact, setShowContact] = useState(false);
  const [inquiry, setInquiry] = useState('');
  return <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Home / Building & Construction / Industrial Pipes / {product.name}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="p-6">
            {/* Product Overview Section */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Product Images */}
              <div className="lg:w-1/2">
                <div className="mb-4">
                  <img src={product.images[selectedImage]} alt={product.name} className="w-full h-80 object-contain border border-gray-200 rounded-lg" />
                </div>
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {product.images.map((image, index) => <div key={index} className={`border-2 rounded-md cursor-pointer flex-shrink-0 w-20 h-20 ${selectedImage === index ? 'border-blue-600' : 'border-gray-200'}`} onClick={() => setSelectedImage(index)}>
                      <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                    </div>)}
                </div>
              </div>
              {/* Product Info */}
              <div className="lg:w-1/2">
                <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <StarIcon size={16} className="text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm font-medium">
                      {product.supplier.rating}
                    </span>
                  </div>
                  {product.supplier.verified && <span className="ml-3 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full flex items-center">
                      <CheckIcon size={12} className="mr-1" />
                      Verified Supplier
                    </span>}
                </div>
                <div className="mb-4">
                  <span className="text-gray-600">Price:</span>
                  <p className="text-2xl font-bold text-blue-600">
                    {product.price}
                  </p>
                  <p className="text-sm text-gray-600">
                    Min. Order: {product.minOrder}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <span className="text-gray-600 text-sm">Material</span>
                    <p className="font-medium">{product.material}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Certification</span>
                    <p className="font-medium">{product.certification}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">
                      Available Sizes
                    </span>
                    <p className="font-medium">{product.sizes.join(', ')}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Thickness</span>
                    <p className="font-medium">{product.thickness}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Product Description</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
                {/* Supplier Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">
                        {product.supplier.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {product.supplier.location}
                      </p>
                    </div>
                    <Link to={`/supplier/${1}`} className="text-blue-600 text-sm hover:underline">
                      View Profile
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-2">Established:</span>
                      <span>{product.supplier.established}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-2">Employees:</span>
                      <span>{product.supplier.employees}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-2">Response Time:</span>
                      <span>{product.supplier.responseTime}</span>
                    </div>
                  </div>
                  {/* Contact Supplier Button */}
                  <button onClick={() => setShowContact(!showContact)} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-semibold">
                    Contact Supplier
                  </button>
                  {/* Contact Form */}
                  {showContact && <div className="mt-4 border border-gray-200 rounded-md p-4">
                      <h3 className="font-semibold mb-3">
                        Contact {product.supplier.name}
                      </h3>
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <PhoneIcon size={16} className="mr-2 text-gray-600" />
                          <span>{product.supplier.contact.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <MailIcon size={16} className="mr-2 text-gray-600" />
                          <span>{product.supplier.contact.email}</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                          Send Inquiry
                        </label>
                        <textarea value={inquiry} onChange={e => setInquiry(e.target.value)} placeholder="I am interested in your product. Please send more details..." className="w-full border border-gray-300 rounded-md p-2 text-sm h-24"></textarea>
                      </div>
                      <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-sm font-medium flex items-center">
                        <MessageSquareIcon size={16} className="mr-2" />
                        Send Message
                      </button>
                    </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product Specifications */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Product Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specifications.map((spec, index) => <div key={index} className="flex">
                  <div className="w-1/3 text-gray-600">{spec.name}</div>
                  <div className="w-2/3 font-medium">{spec.value}</div>
                </div>)}
            </div>
          </div>
        </div>
        {/* Related Products */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.relatedProducts.map(relatedProduct => <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <div className="h-40 overflow-hidden">
                    <img src={relatedProduct.image} alt={relatedProduct.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">{relatedProduct.name}</h3>
                    <p className="text-blue-600 font-medium">
                      {relatedProduct.price}
                    </p>
                    <div className="mt-2 text-blue-600 text-sm font-medium flex items-center">
                      View Details
                      <ChevronRightIcon size={16} className="ml-1" />
                    </div>
                  </div>
                </Link>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ProductDetailPage;