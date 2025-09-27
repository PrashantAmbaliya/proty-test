import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#161618] text-white">
      <div className="container mx-auto px-4">
        {/* Top Section with Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-b border-gray-700">
          {/* Proty Logo */}
          <div className="flex items-center space-x-3">
            <img className='w-[8.5rem]' src='https://proty.autodealwordpress.com/wp-content/uploads/2024/12/logo-white-1.png' alt="Proty Logo" />
          </div>

          {/* Address */}
          <div className="flex items-start space-x-3">
            <MapPin className="w-[2.75rem] h-[2.75rem] text-primary mt-1 flex-shrink-0" />
            <div className="w-px h-12 bg-gray-600"></div>
            <div>
              <span className="text-gray-300 text-sm font-medium block mb-1">Address</span>
              <p className="text-gray-300 text-sm">proty-support@gmail.com</p>
            </div>
          </div>

          {/* Call us */}
          <div className="flex items-start space-x-3">
            <Phone className="w-[2.75rem] h-[2.75rem] text-primary mt-1 flex-shrink-0" />
            <div className="w-px h-12 bg-gray-600"></div>
            <div>
              <span className="text-gray-300 text-sm font-medium block mb-1">Call us</span>
              <p className="text-gray-300 text-sm">(605) 555-0123</p>
            </div>
          </div>

          {/* Need help */}
          <div className="flex items-start space-x-3">
            <Mail className="w-[2.75rem] h-[2.75rem] text-primary mt-1 flex-shrink-0" />
            <div className="w-px h-12 bg-gray-600"></div>
            <div>
              <span className="text-gray-300 text-sm font-medium block mb-1">Need five help</span>
              <p className="text-gray-300 text-sm">proty-support@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About us */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">About us</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors text-sm flex items-center group">
                    <span className="text-primary mr-2">›</span>
                    <span className="relative">
                      Contact
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/home-loan-process" className="text-gray-300 hover:text-primary transition-colors text-sm flex items-center group">
                    <span className="text-primary mr-2">›</span>
                    <span className="relative">
                      Home Loan Process
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/customer-reviews" className="text-gray-300 hover:text-primary transition-colors text-sm flex items-center group">
                    <span className="text-primary mr-2">›</span>
                    <span className="relative">
                      Customer reviews
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/our-team" className="text-gray-300 hover:text-primary transition-colors text-sm flex items-center group">
                    <span className="text-primary mr-2">›</span>
                    <span className="relative">
                      Our Team
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-300 hover:text-primary transition-colors text-sm flex items-center group">
                    <span className="text-primary mr-2">›</span>
                    <span className="relative">
                      Careers with Proty
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/work-with-us" className="text-gray-300 hover:text-primary transition-colors text-sm flex items-center group">
                    <span className="text-primary mr-2">›</span>
                    <span className="relative">
                      Work with us
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Popular house */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Popular house</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/villa" className="text-gray-300 hover:text-primary transition-colors text-sm">
                    #Villa
                  </Link>
                </li>
                <li>
                  <Link href="/commercial" className="text-gray-300 hover:text-primary transition-colors text-sm">
                    #Commercial
                  </Link>
                </li>
                <li>
                  <Link href="/farm-house" className="text-gray-300 hover:text-primary transition-colors text-sm">
                    #Farm House
                  </Link>
                </li>
                <li>
                  <Link href="/homestay" className="text-gray-300 hover:text-primary transition-colors text-sm">
                    #Homestay
                  </Link>
                </li>
                <li>
                  <Link href="/apartments" className="text-gray-300 hover:text-primary transition-colors text-sm">
                    #Apartments
                  </Link>
                </li>
                <li>
                  <Link href="/land-plot" className="text-gray-300 hover:text-primary transition-colors text-sm">
                    #Land/Plot
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Quick links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-primary transition-colors text-sm flex items-center group">
                    <span className="text-primary mr-2">›</span>
                    <span className="relative">
                      Terms of use
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-300 hover:text-primary transition-colors text-sm flex items-center group">
                    <span className="text-primary mr-2">›</span>
                    <span className="relative">
                      Privacy policy
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-primary transition-colors text-sm flex items-center group">
                    <span className="text-primary mr-2">›</span>
                    <span className="relative">
                      Our services
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-300 hover:text-primary transition-colors text-sm flex items-center group">
                    <span className="text-primary mr-2">›</span>
                    <span className="relative">
                      Contact support
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-300 hover:text-primary transition-colors text-sm flex items-center group">
                    <span className="text-primary mr-2">›</span>
                    <span className="relative">
                      Pricing plans
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-primary transition-colors text-sm flex items-center group">
                    <span className="text-primary mr-2">›</span>
                    <span className="relative">
                      FAQs
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Newsletter</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Sign up to receive the latest articles
              </p>
              
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-[#161618] border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 text-sm"
                />
                <button className="w-full bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-sm">
                  Subscribe
                </button>
                
                <div className="flex items-start space-x-2 mt-4">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-primary bg-gray-800 border-gray-600 rounded focus:ring-primary focus:ring-2 mt-1"
                  />
                  <label htmlFor="terms" className="text-gray-400 text-xs leading-relaxed">
                    I have read and agree to the terms & conditions
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm">
              Copyright © {currentYear} Proty - real estate. Designed & Developed by Themesflat
            </div>
            
            <div className="flex items-center space-x-1">
              <span className="text-gray-400 text-sm mr-3">Follow us</span>
              <Link
                href="#"
                className="w-10 h-10 border border-gray-600 hover:border-blue-600 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-blue-600/10"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 border border-gray-600 hover:border-gray-400 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gray-400/10"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 border border-gray-600 hover:border-blue-400 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-blue-400/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 border border-gray-600 hover:border-pink-400 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-pink-400/10"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer