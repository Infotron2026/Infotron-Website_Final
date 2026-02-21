import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { blogPosts, caseStudies } from '../data/mockData';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredContent = activeTab === 'blogs' ? blogPosts : activeTab === 'case-studies' ? caseStudies : null;

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Resources & Insights
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Expert perspectives on technology delivery, talent strategy, and enterprise transformation
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex gap-6 justify-center">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 font-semibold text-lg transition-colors ${
                activeTab === 'all'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Resources
            </button>
            <button
              onClick={() => setActiveTab('case-studies')}
              className={`px-6 py-3 font-semibold text-lg transition-colors ${
                activeTab === 'case-studies'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => setActiveTab('blogs')}
              className={`px-6 py-3 font-semibold text-lg transition-colors ${
                activeTab === 'blogs'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Blog
            </button>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* All Resources */}
          {activeTab === 'all' && (
            <div>
              {/* Featured Case Studies */}
              <div className="mb-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Case Studies</h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  {caseStudies.slice(0, 2).map((study) => (
                    <Link
                      key={study.id}
                      to={`/resources/case-studies/${study.id}`}
                      className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                    >
                      <div className="relative overflow-hidden h-64">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-6 text-white">
                          <div className="text-sm font-semibold mb-1">{study.industry}</div>
                          <div className="text-xs opacity-90">{study.client}</div>
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-gray-600 mb-6">{study.challenge}</p>
                        <div className="flex items-center text-blue-600 font-semibold">
                          Read Case Study
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Latest Blog Posts */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Insights</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.slice(0, 3).map((post) => (
                    <Link
                      key={post.id}
                      to={`/resources/blog/${post.slug}`}
                      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
                    >
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                          <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                            <Tag className="w-3 h-3" />
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500 flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                          <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Case Studies Only */}
          {activeTab === 'case-studies' && (
            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <Link
                  key={study.id}
                  to={`/resources/case-studies/${study.id}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-6 text-white">
                      <div className="text-sm font-semibold mb-1">{study.industry}</div>
                      <div className="text-xs opacity-90">{study.client}</div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{study.challenge}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4 text-sm text-gray-500">
                        <span>{study.duration}</span>
                        <span>•</span>
                        <span>{study.teamSize}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Blog Posts Only */}
          {activeTab === 'blogs' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/resources/blog/${post.slug}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how Infotron can help you achieve similar results
          </p>
          <Link to="/contact?type=client">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Resources;
