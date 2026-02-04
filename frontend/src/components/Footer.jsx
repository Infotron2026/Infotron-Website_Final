import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Infotron Solutions
            </div>
            <p className="text-gray-400 mb-6">
              Delivering enterprise IT services, elite talent, and strategic consulting to global organizations.
            </p>
            <a
              href="https://www.linkedin.com/company/infotron-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              Follow us on LinkedIn
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/managed-services" className="text-gray-400 hover:text-white transition-colors">
                  Managed Services
                </Link>
              </li>
              <li>
                <Link to="/services/staff-augmentation" className="text-gray-400 hover:text-white transition-colors">
                  Staff Augmentation
                </Link>
              </li>
              <li>
                <Link to="/services/business-consulting" className="text-gray-400 hover:text-white transition-colors">
                  Business Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="mailto:info@infotron-solutions.com" className="hover:text-white transition-colors">
                  info@infotron-solutions.com
                </a>
              </li>
              <li>
                <a href="tel:+18005551234" className="hover:text-white transition-colors">
                  +1 (800) 555-1234
                </a>
              </li>
              <li className="pt-4">
                <Link to="/contact?type=client">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity">
                    Schedule Consultation
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Infotron Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
