import { Link, useLocation } from 'react-router-dom'
import { FiBarChart2, FiLogOut } from 'react-icons/fi'
import Footer from './Footer'
import { useAuth } from '../context/AuthContext'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const { isAuthenticated, user, logout } = useAuth()
  const location = useLocation()

  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-primary sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <FiBarChart2 className="text-2xl text-primary" />
                <span className="text-xl font-bold text-text">ManageMySubs</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="px-3 py-2 text-sm font-medium text-text border-b-2 border-transparent hover:border-accent transition-colors"
              >
                Home
              </Link>
              {location.pathname === '/dashboard' && (
                <Link
                  to="/dashboard"
                  className="px-3 py-2 text-sm font-medium text-text border-b-2 border-transparent hover:border-accent transition-colors"
                >
                  Dashboard
                </Link>
              )}
              <Link
                to="/about"
                className="px-3 py-2 text-sm font-medium text-text border-b-2 border-transparent hover:border-accent transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 text-sm font-medium text-text border-b-2 border-transparent hover:border-accent transition-colors"
              >
                Contact
              </Link>

              {/* Auth Buttons */}
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-text">
                    Welcome, <span className="font-semibold">{user?.name || user?.email}</span>
                  </span>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg hover:opacity-90 transition-colors text-sm font-medium"
                  >
                    <FiLogOut size={16} />
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-text hover:text-accent px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-sm font-medium"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout
