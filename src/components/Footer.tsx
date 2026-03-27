import { FiGithub, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">ManageMySubs</h3>
            <p className="text-blue-100 text-sm">
              Take control of your subscriptions and manage your recurring expenses with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/features" className="text-blue-100 hover:text-accent transition-colors">Features</a></li>
              <li><a href="/pricing" className="text-blue-100 hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="/security" className="text-blue-100 hover:text-accent transition-colors">Security</a></li>
              <li><a href="/roadmap" className="text-blue-100 hover:text-accent transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-blue-100 hover:text-accent transition-colors">About</a></li>
              <li><a href="/contact" className="text-blue-100 hover:text-accent transition-colors">Contact</a></li>
              <li><a href="/blog" className="text-blue-100 hover:text-accent transition-colors">Blog</a></li>
              <li><a href="/careers" className="text-blue-100 hover:text-accent transition-colors">Careers</a></li>
              <li><a href="/faq" className="text-blue-100 hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="/community" className="text-blue-100 hover:text-accent transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="text-blue-100 hover:text-accent transition-colors">Privacy</a></li>
              <li><a href="/terms" className="text-blue-100 hover:text-accent transition-colors">Terms</a></li>
              <li><a href="/cookie-policy" className="text-blue-100 hover:text-accent transition-colors">Cookie Policy</a></li>
              <li><a href="/sitemap" className="text-blue-100 hover:text-accent transition-colors">Sitemap</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 pt-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-blue-100 hover:text-accent transition-colors">
              <FiGithub size={20} />
            </a>
            <a href="#" className="text-blue-100 hover:text-accent transition-colors">
              <FiTwitter size={20} />
            </a>
            <a href="#" className="text-blue-100 hover:text-accent transition-colors">
              <FiLinkedin size={20} />
            </a>
            <a href="#" className="text-blue-100 hover:text-accent transition-colors">
              <FiFacebook size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-blue-100 text-sm">
            <p>&copy; {currentYear} ManageMySubs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
