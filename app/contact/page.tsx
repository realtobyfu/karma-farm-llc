'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // For now, we'll just simulate a submission
    // In production, you'd send this to a service like Formspree or your own API
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-40"></div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-slide-in-bottom">
            <span className="text-primary-green font-medium text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-5xl sm:text-6xl font-display font-extrabold text-gray-900 mt-3 mb-6">
              Let's <span className="gradient-text-animated">Connect</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions, suggestions, or want to partner with us? 
              We're here to help and would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white relative">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="animate-slide-in-bottom">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
                  Start a Conversation
                </h2>
                <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                  Whether you're interested in our apps, have feedback, or want to explore 
                  partnership opportunities, we're here to help make meaningful connections.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-green to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">Email</h3>
                      <a href="mailto:3tobiasfu@gmail.com" className="text-gray-600 hover:text-primary-green transition-colors">
                        3tobiasfu@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-blue to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">Response Time</h3>
                      <p className="text-gray-600">We typically respond within 24-48 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-purple to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">Support</h3>
                      <p className="text-gray-600">For app support, please include your app name and version</p>
                    </div>
                  </div>
                </div>

                {/* Company info */}
                <div className="mt-12 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">Karma Farm LLC</h3>
                  <p className="text-gray-600 text-sm">Building technology that brings communities together</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="glass-card animate-slide-in-bottom animation-delay-1000">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="modern-input"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="modern-input"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="modern-input"
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">App Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="modern-textarea"
                      placeholder="Tell us more about how we can help..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 p-5 rounded-2xl border border-green-200 animate-slide-in-bottom">
                      <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="font-semibold">Thank you for reaching out!</p>
                          <p className="text-sm mt-1">We'll get back to you within 24-48 hours.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-gradient-to-r from-red-50 to-pink-50 text-red-700 p-5 rounded-2xl border border-red-200 animate-slide-in-bottom">
                      <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="font-semibold">Oops! Something went wrong.</p>
                          <p className="text-sm mt-1">Please try again or email us directly.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary-green font-medium text-sm uppercase tracking-wider">FAQ</span>
              <h2 className="text-4xl font-display font-extrabold text-gray-900 mt-3 mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </div>
            
            <div className="grid gap-6">
              {[
                {
                  question: "How can I download your apps?",
                  answer: "Our apps are available on the Apple App Store. Visit our Apps page for direct download links.",
                  icon: "🍎"
                },
                {
                  question: "Do you develop apps for Android?",
                  answer: "We're currently focused on iOS, but Android versions are in our roadmap. Join our mailing list to be notified when they become available.",
                  icon: "🤖"
                },
                {
                  question: "Can I partner with Karma Farm LLC?",
                  answer: "We're always open to meaningful partnerships that align with our mission. Please reach out through the contact form above.",
                  icon: "🤝"
                },
                {
                  question: "How do I report a bug or suggest a feature?",
                  answer: "We love hearing from our users! Use the contact form above and select 'App Support' or 'Feedback' as the subject.",
                  icon: "💡"
                }
              ].map((faq, index) => (
                <div key={index} className="group">
                  <div className="glass-card hover:scale-[1.01] transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{faq.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-primary-green transition-colors">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}