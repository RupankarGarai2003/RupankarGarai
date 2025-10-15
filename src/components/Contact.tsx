import { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xwpraqld', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        console.error('Formspree error:', data);
        alert('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Oops! Something went wrong. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'rupankargarai55@gmail.com',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Bishnupur, Bankura, India',
      color: 'from-blue-500 to-indigo-500',
    },
  ];

  const socialLinks = [
    { icon: <Github size={24} />, url: 'https://github.com/RupankarGarai2003', label: 'GitHub', color: 'hover:text-gray-700' },
    { icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/rupankar-garai-aa1773223/', label: 'LinkedIn', color: 'hover:text-cyan-600' },
    { icon: <Twitter size={24} />, url: 'https://x.com/RupankarGarai01', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: <Mail size={24} />, url: 'mailto:rupankargarai55@gmail.com', label: 'Email', color: 'hover:text-red-500' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Let's connect! Feel free to reach out for collaborations, opportunities, or just a friendly chat.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className={`p-3 bg-gradient-to-r ${info.color} text-white rounded-lg`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-white rounded-full shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-gray-600 ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-3">Quick Response</h4>
              <p className="text-white/90">
                I typically respond to emails within 24 hours during weekdays. Looking forward to connecting with you!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan-600 focus:outline-none transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan-600 focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan-600 focus:outline-none transition-colors duration-300"
                    placeholder="+91 XXX-XXX-XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan-600 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span>Submit</span>
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map or Additional Info */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Build Something Amazing Together</h3>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            I'm currently open to freelance opportunities, collaborations, and full-time positions. If you have a project in mind or want to discuss potential opportunities, don't hesitate to reach out. I'm excited to hear from you and explore how we can work together!
          </p>
        </div>
      </div>
    </section>
  );
}
