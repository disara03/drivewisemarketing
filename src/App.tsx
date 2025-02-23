import React from 'react';
import { motion } from 'framer-motion';
import {
  Car,
  Bell,
  Clock,
  MapPin,
  History,
  Calculator,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-black text-white py-4 fixed w-full z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Car className="text-orange-500" size={24} />
            <span className="text-xl font-bold">DriveWise</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-orange-500">Features</a>
            <a href="#how-it-works" className="hover:text-orange-500">How It Works</a>
            <a href="#pricing" className="hover:text-orange-500">Pricing</a>
            <a href="#team" className="hover:text-orange-500">Team</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 pt-20">
          <div className="flex flex-col items-center space-y-8 text-white">
            <a href="#features" className="text-xl" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-xl" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#pricing" className="text-xl" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#team" className="text-xl" onClick={() => setIsMenuOpen(false)}>Team</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Personal <span className="text-orange-500">Car Assistant</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Never miss a maintenance schedule. Keep your vehicle in perfect condition with automated reminders and expert insights.
              </p>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition duration-300">
                Get Started Free
              </button>
            </div>
            <div className="relative">
              <img 
                src="logo.png" 
                alt="DriveWise App Interface" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-4">Smart Features for Smarter Maintenance</h2>
            <p className="text-xl text-gray-600">Everything you need to keep your vehicle running smoothly</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="p-6 bg-white rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Bell className="text-orange-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Smart Reminders</h3>
              <p className="text-gray-600">Never miss an oil change or maintenance schedule with our intelligent reminder system.</p>
            </motion.div>

            <motion.div 
              className="p-6 bg-white rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <History className="text-orange-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Service History</h3>
              <p className="text-gray-600">Keep track of all maintenance records in one place.</p>
            </motion.div>

            <motion.div 
              className="p-6 bg-white rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MapPin className="text-orange-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Nearby Mechanics</h3>
              <p className="text-gray-600">Find trusted mechanics in your area with real reviews.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            How DriveWise Works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Download & Setup",
                description: "Download DriveWise and enter your vehicle details"
              },
              {
                step: "2",
                title: "Connect Your Vehicle",
                description: "Sync with your vehicle's computer system"
              },
              {
                step: "3",
                title: "Get Notifications",
                description: "Receive timely maintenance alerts and reminders"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* UI Showcase Section */}
{/* UI Showcase Section */}
<section id="ui-showcase" className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <motion.h2 
      className="text-4xl font-bold text-center mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      Experience DriveWise
    </motion.h2>

    {/* Grid for UI Screenshots */}
<div className="grid md:grid-cols-3 gap-8">
  {[
    { src: "UI.png", alt: "Dashboard View" },
    { src: "U2.jpg", alt: "Maintenance Alerts" },
    { src: "UI3.png", alt: "Navigation Feature" }
  ].map((item, index) => (
    <motion.div 
      key={index}
      className="rounded-lg overflow-hidden shadow-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <img 
        src={item.src} 
        alt={item.alt} 
        className="w-full h-auto rounded-lg"
      />
    </motion.div>
  ))}
</div>


    {/* Optional Video Showcase */}
    <div className="mt-40 text-center">
      <h3 className="text-4xl font-semibold mb-20">See DriveWise in Action</h3>
      <video 
        className="mx-auto w-full md:w-2/3 rounded-lg shadow-lg" 
        controls
      >
        <source src="/videos/drivewise-demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</section>



      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Choose Your Plan
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="p-8 bg-white rounded-xl shadow-lg border-2 border-gray-100"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <p className="text-4xl font-bold mb-6">Free</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <ChevronRight className="text-orange-500 mr-2" size={20} />
                  Basic maintenance reminders
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-orange-500 mr-2" size={20} />
                  Service history tracking
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-orange-500 mr-2" size={20} />
                  Basic diagnostics
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
                Get Started
              </button>
            </motion.div>

            <motion.div 
              className="p-8 bg-black text-white rounded-xl shadow-lg relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <p className="text-4xl font-bold mb-6">$9.99<span className="text-lg">/mo</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <ChevronRight className="text-orange-500 mr-2" size={20} />
                  Advanced maintenance alerts
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-orange-500 mr-2" size={20} />
                  Full service history
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-orange-500 mr-2" size={20} />
                  Advanced diagnostics
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-orange-500 mr-2" size={20} />
                  Cost estimation
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-orange-500 mr-2" size={20} />
                  Premium support
                </li>
              </ul>
              <button className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition duration-300">
                Start Free Trial
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section id="team" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Meet Our Team
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Disara",
                role: "CEO & Founder",
                image: "disara.jpg"
              },
              {
                name: "Chaniru",
                role: "CTO",
                image: "chaniru.jpg"
              },
              {
                name: "Senath",
                role: "Lead Developer",
                image: "senath.png"
              },
              {
                name: "Tharuka",
                role: "Lead Developer",
                image: "tharuka.png"
              },
              {
                name: "Dulani",
                role: "Lead Developer",
                image: "dulani.jpg"
              },
              {
                name: "Ravindi",
                role: "Head of Design",
                image: "ravindi.png"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Car className="text-orange-500" size={24} />
                <span className="text-xl font-bold">DriveWise</span>
              </div>
              <p className="text-gray-400">
                Your trusted companion for vehicle maintenance and care.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-white">Team</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>drivewise.care@gmail.com</li>
                <li>DriveWise</li>
                <li>Colombo,Sri Lanka</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/162b7jrFa2/?mibextid=wwXIfr" className="text-gray-400 hover:text-white">
                  <Facebook size={24} />
                </a>
                <a href="https://www.instagram.com/_drivewise_?igsh=MTVxcm1ycmtyZmxxbg%3D%3D&utm_source=qr" className="text-gray-400 hover:text-white">
                  <Instagram size={24} />
                </a>
                <a href="https://www.linkedin.com/company/drivewise-lk" className="text-gray-400 hover:text-white">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DriveWise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;