import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              About B2B Marketplace
            </h3>
            <p className="text-gray-300 text-sm">
              Connecting businesses with suppliers across various industries.
              Find the best products and services for your business needs.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-yellow-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-yellow-300">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-yellow-300">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          {/* For Businesses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Businesses</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/supplier/register" className="hover:text-yellow-300">
                  Register as Supplier
                </Link>
              </li>
              <li>
                <Link to="/supplier/login" className="hover:text-yellow-300">
                  Supplier Login
                </Link>
              </li>
              <li>
                <Link to="/advertise" className="hover:text-yellow-300">
                  Advertise with Us
                </Link>
              </li>
              <li>
                <Link to="/premium" className="hover:text-yellow-300">
                  Premium Membership
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-sm text-gray-300 space-y-2">
              <p>1234 Business Avenue</p>
              <p>Business District, BZ 56789</p>
              <p>Email: info@b2bmarketplace.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} B2B Marketplace. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;