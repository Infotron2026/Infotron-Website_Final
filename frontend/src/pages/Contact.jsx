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
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-emerald-950 to-cyan-950">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-8">
              Let's Start a Conversation
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              Whether you're a company looking for technology delivery excellence or a professional 
              seeking your next challenge, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-white mb-10 text-center">Our Global Offices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* USA */}
            <div className="bg-slate-900/50 border border-emerald-500/20 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="font-bold text-white text-lg">USA</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                3225 McLeod Dr. Ste 100<br />
                Las Vegas, NV 89121
              </p>
            </div>

            {/* Canada */}
            <div className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-bold text-white text-lg">CANADA</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                357 Bay Street<br />
                Toronto, ON M5H 4A6
              </p>
            </div>

            {/* India */}
            <div className="bg-slate-900/50 border border-emerald-500/20 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="font-bold text-white text-lg">INDIA</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                C-20, G Block, Bandra Kurla Complex<br />
                Mumbai, MH 400051
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="tel:+17753059399" className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="text-lg">+1 (775) 305 9399</span>
            </a>
            <a href="mailto:contact@infotronsolutions.com" className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300 transition-colors">
              <Mail className="w-5 h-5" />
              <span className="text-lg">contact@infotronsolutions.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          {/* Form Type Toggle */}
          <div className="flex gap-4 mb-10 justify-center">
            <Button
              variant={formType === 'client' ? 'default' : 'outline'}
              onClick={() => setFormType('client')}
              size="lg"
              className={formType === 'client' 
                ? "px-8 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white" 
                : "px-8 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10"}
            >
              I'm a Client
            </Button>
            <Button
              variant={formType === 'candidate' ? 'default' : 'outline'}
              onClick={() => setFormType('candidate')}
              size="lg"
              className={formType === 'candidate' 
                ? "px-8 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white" 
                : "px-8 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10"}
            >
              I'm a Candidate
            </Button>
          </div>

          <div className="bg-slate-800/50 border border-emerald-500/20 rounded-lg p-10">
            <h2 className="text-3xl font-bold text-white mb-2">
              {formType === 'client' ? 'Client Inquiry Form' : 'Candidate Application Form'}
            </h2>
            <p className="text-gray-400 mb-8">
              {formType === 'client' 
                ? 'Tell us about your project requirements and our team will respond within 1 business day.'
                : 'Submit your profile and we\'ll match you with opportunities that align with your skills and career goals.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
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
                  className="h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-emerald-500"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
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
                  className="h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-emerald-500"
                />
              </div>

              {/* Company (Client) / Phone (Candidate) */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-2">
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
                    className="h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-emerald-500"
                  />
                </div>

                {formType === 'client' && (
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-emerald-500"
                    />
                  </div>
                )}

                {formType === 'candidate' && (
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                      LinkedIn Profile
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="url"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-emerald-500"
                    />
                  </div>
                )}
              </div>

              {/* Service (Client) / Job ID (Candidate) */}
              {formType === 'client' && (
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-12 px-3 bg-slate-900/50 border border-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Applying for
                  </label>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-md p-3 text-emerald-400">
                    Job ID: {formData.jobId}
                  </div>
                </div>
              )}

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
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
                  className="resize-none bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-emerald-500"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:opacity-90 text-lg py-6"
              >
                <Send className="mr-2 w-5 h-5" />
                {formType === 'client' ? 'Submit Inquiry' : 'Submit Application'}
              </Button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our{' '}
                <Link to="/privacy" className="text-emerald-400 hover:text-emerald-300">Privacy Policy</Link>
                {' '}and{' '}
                <Link to="/terms" className="text-emerald-400 hover:text-emerald-300">Terms of Service</Link>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-cyan-600">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prefer to Schedule a Call?
          </h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            For immediate assistance or to schedule a consultation, reach out directly via email or phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contact@infotronsolutions.com">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Mail className="mr-2 w-5 h-5" />
                contact@infotronsolutions.com
              </Button>
            </a>
            <a href="tel:+17753059399">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Phone className="mr-2 w-5 h-5" />
                +1 (775) 305 9399
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
