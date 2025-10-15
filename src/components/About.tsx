import { Mail, MapPin, FileText } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <h3 className="text-3xl font-bold text-gray-900">
              I'm Rupankar
            </h3>
            <p className="text-xl text-cyan-600 font-semibold">
              Enthusiast To Learn New Technology
            </p>

            <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            I’m <span className="font-semibold">Rupankar Garai</span>, a Computer Science and Engineering
            graduate (B.Tech, 2025) from{" "}
            <span className="font-semibold">Swami Vivekananda Institute of Science & Technology</span>,
            Kolkata (CGPA: 8.66). I currently work as an{" "}
            <span className="font-semibold">Associate Engineer-II</span> at{" "}
            <span className="font-semibold">BASSETTI ITES Pvt. Ltd</span>, focusing on software quality,
            testing, and performance optimization.
          </p>

          <p>
            I’ve also worked with <span className="font-semibold">Project Banao</span> and{" "}
            <span className="font-semibold">Edunet Foundation</span>, gaining hands-on experience in
            software development, data analytics, and project implementation.
          </p>

          <p>
            My interests include <span className="font-semibold">full-stack development</span>,{" "}
            <span className="font-semibold">software testing</span>, and{" "}
            <span className="font-semibold">cybersecurity</span>. I love exploring vulnerabilities and
            building secure, high-performance systems.
          </p>

          <p>
            I’m always open to collaborations, security research, and projects that challenge the limits of
            technology.
          </p>
        </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-cyan-600" size={20} />
                <span className="text-gray-700">rupankargarai55@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-cyan-600" size={20} />
                <span className="text-gray-700">Bishnupur, Bankura, India</span>
              </div>
            </div>

            <div className="pt-4">
                <a
                  href="https://drive.google.com/your-resume-link-here"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    <FileText size={20} />
                    <span>Check Resume</span>
                  </button>
                </a>
            </div>

          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 transition-transform">
              <div className="text-4xl font-bold text-cyan-600 mb-2">2+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 transition-transform">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-700 font-medium">Projects Completed</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 transition-transform">
              <div className="text-4xl font-bold text-indigo-600 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Technologies</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 transition-transform">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
