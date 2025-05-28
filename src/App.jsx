import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you have a CSS file for styles
// Importing necessary components and hooks from React
import { Menu, X, Mail, Phone, Twitter, Facebook, Instagram, MessageCircle, User, ArrowRight } from 'lucide-react'; // Importing icons from lucide-react
import heroImg from './assets/ray.jpg'; // Importing an image for the hero section


function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [prediction, setPrediction] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isMounted, setIsMounted] = useState(false);



  useEffect(() => {
    // This effect runs once when the component mounts
    setIsMounted(true);
   }, []);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle name prediction
  const predictName = (event) => {
    event.preventDefault();
    
    if (!firstName.trim() || !lastName.trim()) {
      setPrediction('Please enter both names to unlock the magic!');
      return;
    }

    const fullName = `${firstName} ${lastName}`;
    const lcFirstName = firstName.toLowerCase();
    
    let mainPrediction = '';
    switch(lcFirstName) {
      case 'chris':
        mainPrediction = `${fullName}! You radiate leadership and charisma!`;
        break;
      case 'james':
        mainPrediction = `${fullName}! Your name oozes sophistication!`;
        break;
      case 'emma':
        mainPrediction = `${fullName}! Your name blossoms with creativity!`;
        break;
      case 'li':
        mainPrediction = `${fullName}! Your name packs powerful energy!`;
        break;
      case 'sophia':
        mainPrediction = `${fullName}! Your name signifies wisdom!`;
        break;
      default:
        mainPrediction = `${fullName}! Your name is wonderfully unique!`;
    }
    
    setPrediction(mainPrediction);

  };

      <div id="predict" className="flex flex-1 items-center justify-center py-16">
      <form 
        onSubmit={predictName} 
        className="bg-white p-8 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl animate-fade-in-up w-full max-w-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg mb-2"
              placeholder="First"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg mb-2"
              placeholder="Last"
              required
            />
          </div>
        </div>

        <div className={`text-lg font-medium ${prediction ? 'text-green-500' : 'text-gray-700'} mb-4`}>
          {prediction}
        </div>

        <button
          type="submit"
          className="mt-6 group relative inline-flex items-center justify-center px-6 py-3 text-white bg-green-400 border border-transparent rounded-lg shadow-sm hover:bg-green-300 w-full"
        >
          <div className="absolute inset-0 w-3 transition-all duration-75 ease-out group-hover:w-full"></div>
          <span className="relative group-hover:text-gray-900">
            Reveal My Name Magic!
          </span>
        </button>
      </form>
      
    </div>

    

    // Blog data
    const [blogPosts] = useState([
      {
        id: 1,
        title: "The Chris Phenomenon",
        date: "March 15, 2024",
        excerpt: "Discover why 80% of Chris's receive our classic name prediction...",
        author: "Name Explorer"
      },
      {
        id: 2,
        title: "James: More Than Just Royalty",
        date: "March 12, 2024",
        excerpt: "How James became synonymous with elegance in our predictions...",
        author: "Name Historian"
      },
      {
        id: 3,
        title: "Unexpected Isaac Insights",
        date: "March 10, 2024",
        excerpt: "The surprising versatility factor we discovered in Isaac's analysis...",
        author: "Data Namer"
      }
    ]);
  
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  
    const handleContactSubmit = (e) => {
      e.preventDefault();
      // Add your contact form handling logic here
      alert('Thank you for your message! We`ll respond back shortly.');
      setContactForm({ name: '', email: '', message: '' });
    };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    <nav className="relative bg-gradient-to-r from-green-300 via-gray-500 text-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-lg font-bold">Click Me</a>
        {/* Hamburger Menu Button */}
        <button
              onClick={toggleMenu}
              className="md:hidden focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg p-2"
              aria-label="Toggle menu"div
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          {/* Menu List */}
        <ul className="hidden md:flex space-x-4">
          <li><a href="#" className="hover:text-gray-700">Home</a></li>
          <li><a href="#about" className="hover:text-gray-700">About</a></li>
          <li><a href="#contact" className="hover:text-gray-700">Contact</a></li>
          <li><a href="#blog" className="hover:text-gray-700">Blog</a></li>
          <li><a href="#gallery" className="hover:text-gray-700">Gallery</a></li> 
        </ul>
      </div>     
         {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-r from-green-300 via-gray-500 z-10">
            <ul className="flex flex-col">
              <li>
                <a href="#" onClick={() => setIsMenuOpen(false)} className="block p-4 hover:bg-gray-700 text-center w-full">Home</a>
              </li>
              <li>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block p-4 hover:bg-gray-700 text-center w-full">About</a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block p-4 hover:bg-gray-700 text-center w-full">Contact</a>
              </li>
              <li>
                <a href="#blog" onClick={() => setIsMenuOpen(false)} className="block p-4 hover:bg-gray-700 text-center w-full">Blog</a>
              </li>
              <li>
                <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="block p-4 hover:bg-gray-700 text-center w-full">Gallery</a>
              </li>
            </ul>
          </div>
        )}

    </nav>
    {/* Hero Section */}
    <section className="relative overflow-hidden bg-gradient-to-r from-green-300 via-gray-500 min-h-[60vh] flex items-center">
  {/* Background Image Container */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className={`relative h-full w-full ${isMounted ? 'animate-float' : ''}`}>
      <img 
        src={heroImg} 
        alt="Hero Background"
        loading="lazy"
        className="h-full w-full object-cover object-center opacity-20"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%)'
        }}
      />
    </div>
  </div>

  {/* Content Container */}
  <div className="container mx-auto px-4 py-16 relative z-10">
    <div className={`space-y-6 ${isMounted ? 'animate-slide-in-left' : ''}`}>
      <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in">
        Discover Your Name's Magic
      </h1>
      <p className="text-xl text-gray-200 animate-fade-in delay-100">
        Unveil the hidden personality and characteristics behind your name with our fun prediction tool!
      </p>
    </div>
  </div>

  {/* Foreground Image */}
  <div className="hidden md:block absolute right-0 bottom-0 w-1/2 z-10">
    <img 
      src={heroImg} 
      alt="Hero Foreground"
      loading="lazy"
      className="max-h-[70vh] rounded-l-lg shadow-2xl animate-fade-in delay-200 object-cover"
      style={{ 
        clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)',
        height: '100%',
        width: '100%'
      }}
    />
  </div>
</section>
{/* prediction sec */}
      <div id="predict" className="flex flex-1 items-center justify-center py-16">
      <form 
        onSubmit={predictName} 
        className="bg-white p-8 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl animate-fade-in-up w-full max-w-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg mb-2"
              placeholder="First"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg mb-2"
              placeholder="Last"
              required
            />
          </div>
        </div>

        <div className={`text-lg font-medium ${prediction ? 'text-green-500' : 'text-gray-700'} mb-4`}>
          {prediction}
        </div>

        <button
          type="submit"
          className="mt-6 group relative inline-flex items-center justify-center px-6 py-3 text-white bg-green-400 border border-transparent rounded-lg shadow-sm hover:bg-green-300 w-full"
        >
          <div className="absolute inset-0 w-3 transition-all duration-75 ease-out group-hover:w-full"></div>
          <span className="relative group-hover:text-gray-900">
            Reveal My Name Magic!
          </span>
        </button>
      </form>
    </div>



{/* about section */}
  <div id="about" className="bg-gradient-to-r from-green-300 via-gray-500 p-10 mt-8 rounded-lg shadow-lg animate-fade-in">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-extrabold text-black mb-6">About Click Me</h2>
      <p className="text-gray-900 text-lg mb-4">
        This is a simple name prediction button that uses basic logic to generate a friendly message based on the name you enter.
      </p>
      <p className="text-gray-900 text-lg mb-4">
        It's just for fun!
      </p>
    </div>
  </div>
        {/* Blog Section */}
        <section id="blog" className="py-16 px-4 animate-fade-in-up">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            Name Prediction Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id}
                className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4 text-green-500">
                  <MessageCircle className="h-6 w-6 mr-2" />
                  <span className="text-sm font-medium">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <User className="h-5 w-5 mr-2" />
                    <span className="text-sm">{post.author}</span>
                  </div>
                  <button className="text-green-500 hover:text-green-600 flex items-center">
                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
{/* Gallery Section */}
<section id="gallery" className="py-16 px-4 animate-fade-in-up">
  <div className="container mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
      Name Inspiration Gallery
    </h2>
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <div 
          key={item}
          className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <img
            src={`https://picsum.photos/seed/name-${item}/600/600`}
            alt={`Name inspiration ${item}`}
            className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-xl font-bold mb-1">Name {item}</h3>
            <p className="text-sm opacity-90">Origin: {['Greek', 'Latin', 'Celtic', 'Arabic'][item % 4]}</p>
          </div>
          <div className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
            #{['Warrior', 'Poet', 'Scholar', 'Leader'][item % 4]}
          </div>
        </div>
      ))}
    </div>

    {/* CTA Section */}
    <div className="mt-16 text-center">
      <h3 className="text-2xl font-bold mb-6">Discover More Names</h3>
      <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg transition-colors duration-300 transform hover:scale-105">
        Explore Name Library
      </button>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-r from-green-300 via-gray-500 py-16 px-4 animate-fade-in-up">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6 text-gray-200">
              <div className="flex items-center space-x-4">
                <Mail className="h-8 w-8 text-white" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Email Us</h3>
                  <p>info@clickme.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-8 w-8 text-white" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Call Us</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex space-x-6 pt-4">
                <Twitter className="h-8 w-8 cursor-pointer hover:text-white transition-colors" />
                <Facebook className="h-8 w-8 cursor-pointer hover:text-white transition-colors" />
                <Instagram className="h-8 w-8 cursor-pointer hover:text-white transition-colors" />
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleContactSubmit} className="bg-white p-8 rounded-lg shadow-xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg h-32"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center"
                >
                  Send Message <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="mt-auto bg-gray-500 text-gray-900 relative overflow-hidden">
  {/* 3D Vector Shapes */}
  <div className="absolute inset-0 z-0">
    {/* Large Floating Shape */}
    <svg 
      viewBox="0 0 1000 500" 
      className="absolute -top-40 -right-40 opacity-20 w-[800px] h-[800px]"
      style={{ transform: 'rotate(150deg)' }}
    >
      <path
        fill="url(#gradient1)"
        d="M739 209c-19 53-38 106-74 145-36 39-89 65-141 75-52 10-103 3-142-25-39-28-66-72-75-123-9-51 0-109 25-153 25-44 65-74 112-90 47-16 101-18 150-5 49 13 93 45 121 88 28 43 40 97 24 145z"
      />
    </svg>

    {/* Diagonal Stripe */}
    <svg 
      viewBox="0 0 1440 320" 
      className="absolute -bottom-20 -left-20 opacity-15 w-[120%]"
    >
      <path
        fill="url(#gradient2)"
        d="M0 128L48 138.7C96 149 192 171 288 160C384 149 480 107 576 112C672 117 768 171 864 170.7C960 171 1056 117 1152 101.3C1248 85 1344 107 1392 117.3L1440 128V320H1392C1344 320 1248 320 1152 320C1056 320 960 320 864 320C768 320 672 320 576 320C480 320 384 320 288 320C192 320 96 320 48 320H0Z"
      />
    </svg>

    {/* Floating Cubes Pattern */}
    <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
      <svg viewBox="0 0 200 200">
        {Array.from({ length: 16 }).map((_, i) => (
          <rect
            key={i}
            x={(i % 4) * 50}
            y={Math.floor(i / 4) * 50}
            width="40"
            height="40"
            fill={`rgba(255,255,255,${0.1 + (i % 3) * 0.2})`}
            transform={`rotate(${i * 5} 100 100)`}
          />
        ))}
      </svg>
    </div>

    {/* Define Gradients */}
    <svg width="0" height="0">
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4ade80" />
        <stop offset="100%" stopColor="#6b7280" />
      </linearGradient>
      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6b7280" />
        <stop offset="100%" stopColor="#4ade80" />
      </linearGradient>
    </svg>
  </div>

  {/* Existing Footer Content */}
  <div className="container mx-auto px-4 py-8 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* About */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Click Me</h3>
        <p className="text-gray-200">
          Discover the magic of names with our fun prediction tool. Explore more about names and their meanings.
        </p>
      </div>

      {/* Quick Links */}
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-white">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="#about" className="text-gray-200 hover:text-white transition-colors">About</a></li>
          <li><a href="#blog" className="text-gray-200 hover:text-white transition-colors">Blog</a></li>
          <li><a href="#gallery" className="text-gray-200 hover:text-white transition-colors">Gallery</a></li>
          <li><a href="#contact" className="text-gray-200 hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-white">Contact Us</h4>
        <div className="flex items-center space-x-2">
          <Mail className="h-5 w-5 text-gray-200" />
          <a href="mailto:info@clickme.com" className="text-gray-200 hover:text-white">info@clickme.com</a>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="h-5 w-5 text-gray-200" />
          <span className="text-gray-200">+1 (555) 123-4567</span>
        </div>
        <div className="flex space-x-4 pt-2">
          <Twitter className="h-6 w-6 text-gray-200 hover:text-white cursor-pointer" />
          <Facebook className="h-6 w-6 text-gray-200 hover:text-white cursor-pointer" />
          <Instagram className="h-6 w-6 text-gray-200 hover:text-white cursor-pointer" />
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="border-t border-gray-400 mt-8 pt-4 text-center">
      <p className="text-gray-200">
        © {new Date().getFullYear()} Click Me. All rights reserved.
      </p>
    </div>
    </div>
  </footer>
    </div>
  );
}

export default App;