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
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-emerald-500/20 shadow-lg">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_9e7beba8-14e2-44de-8374-3ab1c3cccef8/artifacts/hgqw9370_Logo%20white%20no%20background.png" 
              alt="Infotron Solutions" 
              className="h-[100px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation - Refined */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-normal transition-colors ${
                isActive('/') ? 'text-emerald-400' : 'text-gray-300 hover:text-emerald-400'
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
              <button className="flex items-center gap-1 text-sm font-normal text-gray-300 hover:text-emerald-400 transition-colors">
                Services
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-800 rounded-lg shadow-xl border border-emerald-500/20 py-2">
                  <Link
                    to="/services/managed-services"
                    className="block px-6 py-3 hover:bg-emerald-500/10 transition-all"
                  >
                    <div className="font-semibold text-white text-sm">Managed Services</div>
                    <div className="text-xs text-gray-400 mt-1">Full-stack teams that own delivery</div>
                  </Link>
                  <Link
                    to="/services/staff-augmentation"
                    className="block px-6 py-3 hover:bg-emerald-500/10 transition-all"
                  >
                    <div className="font-semibold text-white text-sm">Staff Augmentation</div>
                    <div className="text-xs text-gray-400 mt-1">Senior engineers in 2 weeks</div>
                  </Link>
                  <Link
                    to="/services/business-consulting"
                    className="block px-6 py-3 hover:bg-emerald-500/10 transition-all"
                  >
                    <div className="font-semibold text-white text-sm">Business Consulting</div>
                    <div className="text-xs text-gray-400 mt-1">Former CTOs and VPs of Engineering</div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`text-sm font-normal transition-colors ${
                isActive('/about') ? 'text-emerald-400' : 'text-gray-300 hover:text-emerald-400'
              }`}
            >
              About
            </Link>

            <Link
              to="/resources"
              className={`text-sm font-normal transition-colors ${
                isActive('/resources') ? 'text-emerald-400' : 'text-gray-300 hover:text-emerald-400'
              }`}
            >
              Resources
            </Link>

            <Link
              to="/careers"
              className={`text-sm font-normal transition-colors ${
                isActive('/careers') ? 'text-emerald-400' : 'text-gray-300 hover:text-emerald-400'
              }`}
            >
              Careers
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-normal transition-colors ${
                isActive('/contact') ? 'text-emerald-400' : 'text-gray-300 hover:text-emerald-400'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons - Refined with Brand Colors */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/careers">
              <Button variant="ghost" className="text-gray-300 hover:text-emerald-400 text-sm font-normal">
                Careers
              </Button>
            </Link>
            <Link to="/contact?type=client">
              <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-emerald-500/30 text-sm font-semibold px-6 transition-all duration-300">
                Talk to Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <div className="text-sm font-medium text-gray-500 px-2">Services:</div>
              <Link to="/services/managed-services" className="text-sm pl-4 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                Managed Services
              </Link>
              <Link to="/services/staff-augmentation" className="text-sm pl-4 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                Staff Augmentation
              </Link>
              <Link to="/services/business-consulting" className="text-sm pl-4 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                Business Consulting
              </Link>
              <Link to="/about" className="text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link to="/resources" className="text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                Resources
              </Link>
              <Link to="/careers" className="text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                Careers
              </Link>
              <Link to="/contact" className="text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="flex flex-col gap-3 mt-4">
                <Link to="/contact?type=client" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gray-900 text-white">
                    Talk to Us
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
