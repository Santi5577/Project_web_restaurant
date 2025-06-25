import Link from "next/link";

export default function Menu() {
  const menuCategories = [
    {
      title: "Appetizers",
      items: [
        { name: "Calamari Rings", description: "Fresh squid rings with marinara sauce", price: "$12.99" },
        { name: "Bruschetta", description: "Toasted bread with tomatoes and basil", price: "$9.99" },
        { name: "Buffalo Wings", description: "Spicy chicken wings with blue cheese dip", price: "$11.99" },
        { name: "Shrimp Cocktail", description: "Fresh shrimp with cocktail sauce", price: "$14.99" }
      ]
    },
    {
      title: "Main Courses",
      items: [
        { name: "Grilled Salmon", description: "Fresh Atlantic salmon with herbs and lemon", price: "$24.99" },
        { name: "Beef Tenderloin", description: "Premium cut beef with seasonal vegetables", price: "$32.99" },
        { name: "Chicken Parmesan", description: "Breaded chicken with marinara and mozzarella", price: "$19.99" },
        { name: "Lobster Thermidor", description: "Fresh lobster with cream sauce", price: "$42.99" }
      ]
    },
    {
      title: "Pasta",
      items: [
        { name: "Pasta Primavera", description: "Fresh pasta with garden vegetables and herbs", price: "$18.99" },
        { name: "Fettuccine Alfredo", description: "Creamy pasta with parmesan cheese", price: "$16.99" },
        { name: "Spaghetti Carbonara", description: "Traditional pasta with pancetta and eggs", price: "$17.99" },
        { name: "Penne Arrabbiata", description: "Spicy tomato sauce with penne pasta", price: "$15.99" }
      ]
    },
    {
      title: "Desserts",
      items: [
        { name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: "$8.99" },
        { name: "Chocolate Lava Cake", description: "Warm chocolate cake with molten center", price: "$9.99" },
        { name: "Crème Brûlée", description: "Vanilla custard with caramelized sugar", price: "$7.99" },
        { name: "Cheesecake", description: "New York style cheesecake with berry sauce", price: "$8.99" }
      ]
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
              <Link href="/menu" className="text-orange-600 font-semibold">Menu</Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors">About</Link>
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
            <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
            <p className="text-xl">Discover our delicious selection of dishes</p>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center border-b-2 border-orange-600 pb-4">
                {category.title}
              </h2>
              <div className="grid gap-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-start border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <span className="text-2xl font-bold text-orange-600">{item.price}</span>
                      <button className="block mt-2 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
                        Order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Order?</h2>
          <p className="text-orange-100 text-lg mb-8">
            Experience our delicious cuisine in the comfort of our restaurant
          </p>
          <div className="space-x-4">
            <Link href="/reservation" className="bg-white text-orange-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Reserve Table
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-orange-600 transition-colors">
              Contact Us
            </Link>
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
