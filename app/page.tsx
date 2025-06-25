import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-orange-600">Delicious Bites</h1>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</Link>
              <Link href="/menu" className="text-gray-700 hover:text-orange-600 transition-colors">Menu</Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</Link>
              <Link href="/reservation" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">Reserve Table</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/api/placeholder/1200/600")'}}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Delicious Bites</h1>
            <p className="text-xl mb-8">Experience the finest culinary delights in town</p>
            <div className="space-x-4">
              <Link href="/menu" className="bg-orange-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-orange-700 transition-colors">
                View Menu
              </Link>
              <Link href="/reservation" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-gray-900 transition-colors">
                Book Table
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Dishes</h2>
          <p className="text-gray-600 text-lg">Discover our most popular and delicious offerings</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gray-200 bg-cover bg-center" style={{backgroundImage: 'url("/api/placeholder/400/300")'}}></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Grilled Salmon</h3>
              <p className="text-gray-600 mb-4">Fresh Atlantic salmon with herbs and lemon</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-orange-600">$24.99</span>
                <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gray-200 bg-cover bg-center" style={{backgroundImage: 'url("/api/placeholder/400/300")'}}></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Beef Tenderloin</h3>
              <p className="text-gray-600 mb-4">Premium cut beef with seasonal vegetables</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-orange-600">$32.99</span>
                <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gray-200 bg-cover bg-center" style={{backgroundImage: 'url("/api/placeholder/400/300")'}}></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pasta Primavera</h3>
              <p className="text-gray-600 mb-4">Fresh pasta with garden vegetables and herbs</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-orange-600">$18.99</span>
                <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Restaurant</h2>
              <p className="text-gray-600 text-lg mb-6">
                For over 20 years, Delicious Bites has been serving the finest cuisine with a commitment to quality, 
                freshness, and exceptional service. Our chefs use only the finest ingredients to create memorable dining experiences.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Whether you're celebrating a special occasion or enjoying a casual meal with friends, 
                we provide an atmosphere that's both elegant and welcoming.
              </p>
              <Link href="/about" className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Learn More
              </Link>
            </div>
            <div className="h-96 bg-gray-200 rounded-lg bg-cover bg-center" style={{backgroundImage: 'url("/api/placeholder/600/400")'}}></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">Delicious Bites</h3>
              <p className="text-gray-300">The finest dining experience in town with exceptional cuisine and service.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors">Home</Link></li>
                <li><Link href="/menu" className="text-gray-300 hover:text-orange-400 transition-colors">Menu</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hours</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Monday - Thursday: 11am - 10pm</li>
                <li>Friday - Saturday: 11am - 11pm</li>
                <li>Sunday: 12pm - 9pm</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>123 Food Street</li>
                <li>City, State 12345</li>
                <li>(555) 123-4567</li>
                <li>info@deliciousbites.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Delicious Bites. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
