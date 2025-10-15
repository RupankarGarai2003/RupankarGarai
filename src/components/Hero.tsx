import { Github, Linkedin, Mail, Twitter, Instagram, Facebook, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import profileImg from '../assets/passport.png';

export default function Hero() {
  const [text, setText] = useState('');
  const roles = [
  'QA & Testing Engineer',
  'Bug Bounty Hunter',
  'Penetration Tester',
  'Cybersecurity Enthusiast',
];

  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting && text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && text === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
          setText(
            isDeleting
              ? currentRole.substring(0, text.length - 1)
              : currentRole.substring(0, text.length + 1)
          );
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-lg text-gray-600 font-medium">Hi There,</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                I'm <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Rupankar Garai</span>
              </h1>
            </div>

            <div className="h-16 flex items-center">
              <span className="text-2xl md:text-3xl font-semibold text-gray-700">
                I am a <span className="text-cyan-600 ml-2">{text}</span>
                <span className="animate-blink">|</span>
              </span>
            </div>

           <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              A CSE graduate (B.Tech, 2025) from <strong>SVIST, Kolkata</strong>. 
              Currently an <strong>Associate Engineer-II at BASSETTI ITES Pvt. Ltd</strong>, passionate about 
              <strong> development, testing,</strong> and <strong>cybersecurity</strong>.
        </p>



            <div className="flex space-x-4 pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#projects');
                }}
                className="px-8 py-3 border-2 border-cyan-600 text-cyan-600 rounded-full font-medium hover:bg-cyan-600 hover:text-white transition-all duration-300"
              >
                View Work
              </a>
            </div>

            <div className="flex space-x-4 pt-4">
  <a
    href="https://github.com/RupankarGarai2003"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-white rounded-full shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
  >
    <Github className="text-gray-700" size={24} />
  </a>

  <a
    href="https://www.linkedin.com/in/rupankar-garai-aa1773223/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-white rounded-full shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
  >
    <Linkedin className="text-cyan-600" size={24} />
  </a>

  <a
    href="https://x.com/RupankarGarai01"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-white rounded-full shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
  >
    <Twitter className="text-sky-500" size={24} />
  </a>

  <a
    href="https://www.instagram.com/rupankargarai/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-white rounded-full shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
  >
    <Instagram className="text-pink-500" size={24} />
  </a>

  <a
    href="https://www.facebook.com/rupankar.garai.2025/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-white rounded-full shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
  >
    <Facebook className="text-blue-700" size={24} />
  </a>

  <a
    href="mailto:rupankargarai55@gmail.com"
    className="p-3 bg-white rounded-full shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
  >
    <Mail className="text-blue-600" size={24} />
  </a>
</div>

            
          </div>

          {/* Profile Image */}
         <div className="flex justify-center animate-fade-in-up animation-delay-300">
  <div className="relative">
    <div className="w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full absolute -inset-4 blur-2xl opacity-30 animate-pulse"></div>
    <div className="w-80 h-80 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full overflow-hidden shadow-2xl relative border-8 border-white">
      <img
        src={profileImg}
        alt="Rupankar Garai"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-600" size={32} />
        </div>
      </div>
    </section>
  );
}
