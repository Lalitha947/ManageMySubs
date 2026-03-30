import { useState } from 'react'
import { FiCheckCircle, FiMail, FiMessageCircle, FiBook, FiFileText, FiUsers } from 'react-icons/fi'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-text max-w-2xl mx-auto">
            Have questions about ManageMySubs? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-secondary">
              <h2 className="text-2xl font-bold text-text mb-6">Send us a Message</h2>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4 text-accent"><FiCheckCircle size={50} /></div>
                  <h3 className="text-xl font-semibold text-accent mb-2">Message Sent!</h3>
                  <p className="text-text">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-primary hover:text-secondary"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="feature">Feature Request</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-text mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl text-accent"><FiMail size={24} /></div>
                    <div>
                      <h3 className="font-semibold text-text">Email</h3>
                      <p className="text-text">support@subscriptionmanager.com</p>
                      <p className="text-sm text-secondary">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-2xl text-accent"><FiMessageCircle size={24} /></div>
                    <div>
                      <h3 className="font-semibold text-text">Live Chat</h3>
                      <p className="text-text">Available 9 AM - 6 PM EST</p>
                      <p className="text-sm text-secondary">Monday through Friday</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-2xl text-accent"><FiBook size={24} /></div>
                    <div>
                      <h3 className="font-semibold text-text">Help Center</h3>
                      <p className="text-text">Find answers to common questions</p>
                      <a href="#" className="text-primary hover:text-secondary text-sm">
                        Visit Help Center →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background p-6 rounded-xl border border-secondary">
                <h3 className="font-semibold text-text mb-2">Need immediate help?</h3>
                <p className="text-text mb-4">
                  Check out our comprehensive FAQ section or join our community forum.
                </p>
                <div className="space-y-2">
                  <a href="/faq" className="flex items-center gap-2 text-primary hover:text-secondary transition">
                    <FiFileText size={16} /> Frequently Asked Questions
                  </a>
                  <a href="/community" className="flex items-center gap-2 text-primary hover:text-secondary transition">
                    <FiUsers size={16} /> Community Forum
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact