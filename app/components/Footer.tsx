import Link from "next/link";

export default function Footer() {
  return (
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
  );
}
