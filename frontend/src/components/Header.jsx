import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Infotron Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`text-base font-medium transition-colors ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  <Link
                    to="/services/managed-services"
                    className="block px-6 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-semibold text-gray-900">Managed Services</div>
                    <div className="text-sm text-gray-600 mt-1">End-to-end technology operations</div>
                  </Link>
                  <Link
                    to="/services/staff-augmentation"
                    className="block px-6 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-semibold text-gray-900">Staff Augmentation</div>
                    <div className="text-sm text-gray-600 mt-1">Elite technology talent</div>
                  </Link>
                  <Link
                    to="/services/business-consulting"
                    className="block px-6 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-semibold text-gray-900">Business Consulting</div>
                    <div className="text-sm text-gray-600 mt-1">Strategic technology advisory</div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`text-base font-medium transition-colors ${
                isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
            </Link>

            <Link
              to="/resources"
              className={`text-base font-medium transition-colors ${
                isActive('/resources') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Resources
            </Link>

            <Link
              to="/careers"
              className={`text-base font-medium transition-colors ${
                isActive('/careers') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Careers
            </Link>

            <Link
              to="/contact"
              className={`text-base font-medium transition-colors ${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact?type=client">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/careers">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90">
                View Positions
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-base font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <div className="text-base font-medium text-gray-500 px-2">Services:</div>
              <Link to="/services/managed-services" className="text-base pl-4 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                Managed Services
              </Link>
              <Link to="/services/staff-augmentation" className="text-base pl-4 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                Staff Augmentation
              </Link>
              <Link to="/services/business-consulting" className="text-base pl-4 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                Business Consulting
              </Link>
              <Link to="/about" className="text-base font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link to="/resources" className="text-base font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                Resources
              </Link>
              <Link to="/careers" className="text-base font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                Careers
              </Link>
              <Link to="/contact" className="text-base font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="flex flex-col gap-3 mt-4">
                <Link to="/contact?type=client" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600">
                    Schedule Consultation
                  </Button>
                </Link>
                <Link to="/careers" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    View Positions
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
