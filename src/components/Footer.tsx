import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Work', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  const contactInfo = [
    '+91 XXX-XXX-XXXX',
    'rupankargarai55@gmail.com',
    'Bishnupur, Bankura, India',
  ];

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/RupankarGarai2003', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/rupankar-garai-aa1773223/', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, url: 'https://x.com/RupankarGarai01', label: 'Twitter' },
    { icon: <Mail size={20} />, url: 'mailto:rupankargarai55@gmail.com', label: 'Email' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Rupankar's Portfolio
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Thank you for exploring my professional portfolio. Feel free to connect with me
              through social media channels for the latest updates on my work.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I also welcome you to engage in a meaningful conversation through the live chat feature.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="text-gray-400 flex items-start">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{info}</span>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-semibold mb-4">Follow Me</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Designed with</span>
            <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
            <span>by Rupankar Garai</span>
          </div>

          <div className="text-gray-400 text-sm">
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => scrollToSection('#home')}
            className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
