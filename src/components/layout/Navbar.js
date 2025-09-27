'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone, User } from 'lucide-react'

const ProtyLogo = "/images/logo/proty-logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const navItems = [
    {
      name: 'Home',
      href: '/',
      dropdown: {
        'Property Types': [
          { name: 'Luxury Homes', href: '/properties/luxury-homes' },
          { name: 'Condos', href: '/properties/condos' },
          { name: 'Penthouses', href: '/properties/penthouses' },
          { name: 'Villas', href: '/properties/villas' }
        ]
      }
    },
    {
      name: 'Properties',
      href: '/properties',
      dropdown: {
        'Layout': [
          { name: 'Grid - Sidebar Left', href: '/grid-sidebar-left' },
          { name: 'Grid - Sidebar Right', href: '/grid-sidebar-right' },
          { name: 'Grid - Top Search', href: '/grid-top-search' },
          { name: 'List - Sidebar Left', href: '/list-sidebar-left' },
          { name: 'List - Sidebar Right', href: '/list-sidebar-right' },
          { name: 'List - Top Search', href: '/list-top-search' }
        ],
        'Feature': [
          { name: 'Property Top Map', href: '/property-top-map' },
          { name: 'Property Half Map Left', href: '/property-half-map-left' },
          { name: 'Property Half Map Right', href: '/property-half-map-right' },
          { name: 'Number Pagination', href: '/number-pagination' },
          { name: 'Load More Pagination', href: '/load-more-pagination' }
        ],
        'Property Styles': [
          { name: 'Grid Style 01', href: '/grid-style-01' },
          { name: 'Grid Style 02', href: '/grid-style-02' },
          { name: 'Grid Style 03', href: '/grid-style-03' },
          { name: 'Grid Style 04', href: '/grid-style-04' },
          { name: 'List Style 01', href: '/list-style-01' },
          { name: 'List Style 02', href: '/list-style-02' }
        ],
        'Properties Single': [
          { name: 'Property Details 01', href: '/property-details-01' },
          { name: 'Property Details 02', href: '/property-details-02' },
          { name: 'Property Details 03', href: '/property-details-03' },
          { name: 'Property Details 04', href: '/property-details-04' },
          { name: 'Property Details 05', href: '/property-details-05' }
        ]
      }
    },
    {
      name: 'Pages',
      href: '/pages',
      dropdown: {
        'General': [
          { name: 'About Us', href: '/about' },
          { name: 'Contact', href: '/contact' },
          { name: 'FAQ', href: '/faq' },
          { name: 'Terms', href: '/terms' }
        ]
      }
    },
    {
      name: 'Blog',
      href: '/blog',
      dropdown: {
        'Blog Layouts': [
          { name: 'Blog Grid', href: '/blog/grid' },
          { name: 'Blog List', href: '/blog/list' },
          { name: 'Blog Single', href: '/blog/single' }
        ]
      }
    },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-[4.875rem]">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img className='w-[8.5rem]' src='https://proty.autodealwordpress.com/wp-content/themes/proty/images/logo.png' alt="Proty Logo" />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative flex items-center"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1 font-medium transition-colors h-[4.875rem] ${item.name === 'Home' ? 'text-primary' : 'text-gray-700 hover:text-primary'
                      }`}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      className={`absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border py-4 px-4 grid gap-6`}
                      style={{ gridTemplateColumns: `repeat(${Object.keys(item.dropdown).length}, minmax(150px, 1fr))` }}
                    >
                      {Object.entries(item.dropdown).map(([category, items]) => (
                        <div key={category} className="space-y-3">
                          <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                            {category}
                          </h3>
                          <div className="space-y-2">
                            {items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block text-sm text-gray-600 hover:text-primary transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Phone, User, Add Property */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-bold text-black">1-333-345-6868</span>
            </div>
            <div className="border border-gray-300 rounded-lg p-2 flex items-center justify-center">
              <User className="w-5 h-5 text-primary hover:text-gray-700 cursor-pointer" />
            </div>
            <Link
              href="/add-property"
              className="px-4 py-2 bg-white text-primary rounded-lg hover:bg-primary   hover:text-white  transition-colors font-medium border border-primary"
            >
              Add property
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {navItems.map((item) => (
                <div key={item.name} className="space-y-1">
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-primary font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-6 space-y-1">
                      {Object.entries(item.dropdown).map(([category, items]) => (
                        <div key={category} className="space-y-1">
                          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-1">
                            {category}
                          </div>
                          {items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-1 text-sm text-gray-600 hover:text-primary"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <div className="flex items-center space-x-2 px-3 py-2 text-gray-700">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="font-medium">1-333-345-6868</span>
                </div>
                <Link
                  href="/add-property"
                  className="block mx-3 my-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors font-medium text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Add property
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar