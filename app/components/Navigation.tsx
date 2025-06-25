import Link from "next/link";

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  const isActive = (page: string) => currentPage === page;

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-orange-600">
                Delicious Bites
              </Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`transition-colors ${
                isActive('home') 
                  ? 'text-orange-600 font-semibold' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/menu" 
              className={`transition-colors ${
                isActive('menu') 
                  ? 'text-orange-600 font-semibold' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Menu
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors ${
                isActive('about') 
                  ? 'text-orange-600 font-semibold' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors ${
                isActive('contact') 
                  ? 'text-orange-600 font-semibold' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Contact
            </Link>
            <Link 
              href="/reservation" 
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('reservation')
                  ? 'bg-orange-700 text-white'
                  : 'bg-orange-600 text-white hover:bg-orange-700'
              }`}
            >
              Reserve Table
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-orange-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
