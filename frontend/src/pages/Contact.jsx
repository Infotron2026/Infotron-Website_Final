import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
  const [formType, setFormType] = useState('client');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    jobId: '',
    message: ''
  });

  useEffect(() => {
    const type = searchParams.get('type');
    const service = searchParams.get('service');
    const jobId = searchParams.get('job');
    
    if (type) setFormType(type);
    if (service) setFormData(prev => ({ ...prev, service }));
    if (jobId) setFormData(prev => ({ ...prev, jobId }));
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission - ready for HubSpot integration
    console.log('Form submitted:', { type: formType, data: formData });
    
    toast({
      title: "Thank you for reaching out!",
      description: formType === 'client' 
        ? "Our team will contact you within 1 business day to discuss your requirements."
        : "We've received your application and will review it within 2-3 business days.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: formData.service,
      jobId: formData.jobId,
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether you're a company looking for technology delivery excellence or a professional 
              seeking your next challenge, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <a href="mailto:info@infotron-solutions.com" className="text-blue-600 hover:text-blue-700">
                  info@infotron-solutions.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <a href="tel:+18005551234" className="text-blue-600 hover:text-blue-700">
                  +1 (800) 555-1234
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Headquarters</h3>
                <p className="text-gray-600">United States</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          {/* Form Type Toggle */}
          <div className="flex gap-4 mb-10 justify-center">
            <Button
              variant={formType === 'client' ? 'default' : 'outline'}
              onClick={() => setFormType('client')}
              size="lg"
              className="px-8"
            >
              I'm a Client
            </Button>
            <Button
              variant={formType === 'candidate' ? 'default' : 'outline'}
              onClick={() => setFormType('candidate')}
              size="lg"
              className="px-8"
            >
              I'm a Candidate
            </Button>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {formType === 'client' ? 'Client Inquiry Form' : 'Candidate Application Form'}
            </h2>
            <p className="text-gray-600 mb-8">
              {formType === 'client' 
                ? 'Tell us about your project requirements and our team will respond within 1 business day.'
                : 'Submit your profile and we\'ll match you with opportunities that align with your skills and career goals.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="h-12"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.smith@company.com"
                  className="h-12"
                />
              </div>

              {/* Company (Client) / Phone (Candidate) */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                    {formType === 'client' ? 'Company Name *' : 'Phone Number'}
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required={formType === 'client'}
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={formType === 'client' ? 'Acme Corporation' : '+1 (555) 123-4567'}
                    className="h-12"
                  />
                </div>

                {formType === 'client' && (
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="h-12"
                    />
                  </div>
                )}

                {formType === 'candidate' && (
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      LinkedIn Profile
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="url"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="h-12"
                    />
                  </div>
                )}
              </div>

              {/* Service (Client) / Job ID (Candidate) */}
              {formType === 'client' && (
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">Select a service...</option>
                    <option value="managed-services">Managed Services</option>
                    <option value="staff-augmentation">Staff Augmentation</option>
                    <option value="business-consulting">Business Consulting</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
              )}

              {formType === 'candidate' && formData.jobId && (
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Applying for
                  </label>
                  <div className="bg-blue-50 border border-blue-200 rounded-md p-3 text-blue-900">
                    Job ID: {formData.jobId}
                  </div>
                </div>
              )}

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  {formType === 'client' ? 'Project Details / Requirements *' : 'Cover Letter / Additional Information *'}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={formType === 'client' 
                    ? 'Tell us about your project scope, timeline, team size needed, and key requirements...'
                    : 'Tell us about your experience, skills, and what type of opportunities you\'re seeking...'}
                  rows={6}
                  className="resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 text-lg py-6"
              >
                <Send className="mr-2 w-5 h-5" />
                {formType === 'client' ? 'Submit Inquiry' : 'Submit Application'}
              </Button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our{' '}
                <Link to="/privacy" className="text-blue-600 hover:text-blue-700">Privacy Policy</Link>
                {' '}and{' '}
                <Link to="/terms" className="text-blue-600 hover:text-blue-700">Terms of Service</Link>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prefer to Schedule a Call?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            For immediate assistance or to schedule a consultation, reach out directly via email or phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@infotron-solutions.com">
              <Button size="lg" variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
                <Mail className="mr-2 w-5 h-5" />
                Email Us
              </Button>
            </a>
            <a href="tel:+18005551234">
              <Button size="lg" variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
