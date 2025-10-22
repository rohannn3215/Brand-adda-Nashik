import { Instagram, MessageCircle, Phone, Star, Users, ShoppingBag } from 'lucide-react';

function App() {
  const contactLinks = [
    {
      title: 'WhatsApp Group',
      description: 'Join our community',
      icon: Users,
      href: 'https://chat.whatsapp.com/KeusSvgXUf0JdZior7JvxR?mode=wwc',
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Instagram',
      description: 'Follow for updates',
      icon: Instagram,
      href: 'https://www.instagram.com/brand.adda_nashik/',
      color: 'from-pink-500 to-purple-600',
    },
    {
      title: 'Contact Us',
      description: '+91 9156-200-314',
      icon: Phone,
      href: 'tel:+919156200314',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Chat on WhatsApp',
      description: 'Quick support',
      icon: MessageCircle,
      href: 'https://wa.me/919876543210',
      color: 'from-green-600 to-teal-600',
    },
    {
      title: 'Google Reviews',
      description: 'Share your experience',
      icon: Star,
      href: 'https://g.page/r/your-business-id/review',
      color: 'from-yellow-500 to-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 text-center">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Brand Adda Nashik
          </h1>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24 pb-20">
        <section className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 shadow-2xl shadow-blue-500/30">
              <ShoppingBag className="w-20 h-20 md:w-24 md:h-24 text-white" />
            </div>
          </div>
          <p className="text-gray-300 text-2xl md:text-3xl lg:text-4xl italic max-w-2xl mx-auto leading-relaxed">
            Try it you will like it !
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-100">
            Connect With Us
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 max-w-5xl mx-auto px-2">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 active:scale-95 md:hover:scale-102 hover:shadow-xl shadow-lg"
                >
                  <div className="flex flex-col items-center text-center gap-3 md:gap-4">
                    <div className={`flex items-center justify-center p-3 md:p-4 rounded-xl bg-gradient-to-br ${link.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2.5} />
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm md:text-lg font-semibold text-white leading-tight">
                        {link.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-400 leading-snug">
                        {link.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-xl md:rounded-2xl transition-opacity duration-300 pointer-events-none"
                       style={{background: `linear-gradient(135deg, ${link.color})`}} />
                </a>
              );
            })}
          </div>
        </section>

        <section className="max-w-3xl mx-auto text-center bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-100">
            Visit Our Store
          </h3>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            7,Saibaba Mandir Complex , Near Manyavar Showroom , Krushinagar , College Road , Nashik-422005
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-400">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+91</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />
            <div>
              <span>Nashik, Maharashtra</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h4 className="text-xl font-semibold text-gray-100">Brand Adda Nashik</h4>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your trusted destination for premium branded clothing in Nashik.
              We bring you the finest collection of fashion wear for men, women, and kids.
            </p>
            <div className="pt-4 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                Owned and operated with passion for fashion since 2020
              </p>
              <p className="text-gray-600 text-sm mt-2">
                &copy; {new Date().getFullYear()} Brand Adda Nashik. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
