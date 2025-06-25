import Link from "next/link";

export default function About() {
  const teamMembers = [
    {
      name: "Chef Marco Rodriguez",
      position: "Executive Chef",
      description: "With over 15 years of culinary experience, Chef Marco brings authentic flavors from around the world.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Sarah Johnson",
      position: "Head Pastry Chef",
      description: "Sarah creates magical desserts that perfectly complement our dining experience.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "David Chen",
      position: "Restaurant Manager",
      description: "David ensures every guest receives exceptional service and a memorable experience.",
      image: "/api/placeholder/300/300"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-2xl font-bold text-orange-600">Delicious Bites</Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</Link>
              <Link href="/menu" className="text-gray-700 hover:text-orange-600 transition-colors">Menu</Link>
              <Link href="/about" className="text-orange-600 font-semibold">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</Link>
              <Link href="/reservation" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">Reserve Table</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-64 bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/api/placeholder/1200/400")'}}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl">Discover our story and passion for exceptional cuisine</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg mb-6">
              Founded in 2005, Delicious Bites began as a small family dream to share authentic, 
              high-quality cuisine with our community. What started as a modest 20-seat restaurant 
              has grown into a beloved dining destination known for exceptional food and warm hospitality.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Our commitment to using only the freshest, locally-sourced ingredients and traditional 
              cooking techniques has earned us recognition as one of the city's premier dining establishments. 
              Every dish is crafted with passion and attention to detail.
            </p>
            <p className="text-gray-600 text-lg">
              Today, we continue to honor our founding principles while constantly innovating our menu 
              to surprise and delight our guests with new flavors and experiences.
            </p>
          </div>
          <div className="h-96 bg-gray-200 rounded-lg bg-cover bg-center" style={{backgroundImage: 'url("/api/placeholder/600/400")'}}></div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-orange-600 text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Cuisine</h3>
              <p className="text-gray-600">We source the finest ingredients to create exceptional dishes that celebrate flavor and tradition.</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-orange-600 text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Exceptional Service</h3>
              <p className="text-gray-600">Our team is dedicated to providing warm, attentive service that makes every visit memorable.</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-orange-600 text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">We're committed to sustainable practices and supporting local farmers and producers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 text-lg">The passionate professionals who make our restaurant special</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 bg-cover bg-center" style={{backgroundImage: `url("${member.image}")`}}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <h4 className="text-orange-600 font-medium mb-3">{member.position}</h4>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="text-orange-600 text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Local Restaurant 2024</h3>
              <p className="text-gray-600">Awarded by City Dining Magazine</p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="text-orange-600 text-3xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence in Service</h3>
              <p className="text-gray-600">Recognition from Hospitality Association</p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="text-orange-600 text-3xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Top Chef's Choice</h3>
              <p className="text-gray-600">Featured in Culinary Excellence Guide</p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="text-orange-600 text-3xl mb-4">💎</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Dining Experience</h3>
              <p className="text-gray-600">Certified by Fine Dining Association</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Experience Our Passion</h2>
          <p className="text-orange-100 text-lg mb-8">
            Join us for an unforgettable dining experience where tradition meets innovation
          </p>
          <Link href="/reservation" className="bg-white text-orange-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Make a Reservation
          </Link>
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
