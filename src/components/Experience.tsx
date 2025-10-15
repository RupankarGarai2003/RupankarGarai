import { Briefcase, Calendar, Award } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Associate Engineer-II',
      company: 'BASSETTI ITES PVT. LTD',
      type: 'Full-time',
      period: 'Feb 2025 - Present',
      description:
        'Currently working as an Associate Engineer-II at BASSETTI ITES PVT. LTD, contributing to engineering process digitalization and data-driven solutions. Responsible for implementing scalable systems and collaborating with cross-functional teams to enhance product performance.',
      achievements: [
        'Developed and optimized internal tools to streamline workflows',
        'Contributed to product enhancement and system automation initiatives',
        'Collaborated with engineering teams to deliver on-time and efficient solutions',
      ],
      color: 'from-blue-600 to-indigo-600',
      icon: <Briefcase size={24} />,
    },
    {
      role: 'Academic Writer and Coder',
      company: 'Project Banao',
      type: 'Freelance',
      period: 'Nov 2022 - Dec 2024',
      description:
        'Worked as a freelance academic writer and coder at Project Banao, creating and assisting in academic and professional projects focused on software development and coding assignments in Python, Java, and other technologies.',
      achievements: [
        'Delivered 50+ academic and coding-based projects across multiple domains',
        'Worked on technologies like Python, Java, and web development frameworks',
        'Ensured high-quality documentation and code clarity for all delivered work',
      ],
      color: 'from-indigo-500 to-blue-500',
      icon: <Briefcase size={24} />,
    },
    {
      role: 'Advanced Data Analytics',
      company: 'Edunet Foundation',
      type: 'Internship',
      period: 'Feb 2024 - Apr 2024',
      description:
        'Completed an internship focused on Advanced Data Analytics with Edunet Foundation. Gained practical exposure to data processing, visualization, and machine learning techniques, working collaboratively in a remote setup.',
      achievements: [
        'Executed data analysis projects using Python and ML libraries',
        'Built visual dashboards to represent key insights',
        'Gained experience in real-world data-driven decision-making',
      ],
      color: 'from-cyan-500 to-blue-500',
      icon: <Award size={24} />,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My professional journey and learning experiences
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>

              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    <div className={`p-3 bg-gradient-to-r ${exp.color} text-white rounded-xl`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-gray-700 font-semibold">
                        {exp.company}
                      </p>
                      <span className="inline-block mt-2 px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 bg-white px-4 py-2 rounded-lg shadow">
                    <Calendar size={18} className="mr-2" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2`}></div>
                      <p className="text-gray-700 flex-1">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-cyan-600 mb-2">4+</div>
            <div className="text-gray-700 font-medium">Years of Coding</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
            <div className="text-gray-700 font-medium">Professional Experiences</div>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-indigo-600 mb-2">20+</div>
            <div className="text-gray-700 font-medium">Projects Completed</div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/in/rupankargarai/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-medium text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-block"
          >
            View All Experience
          </a>
        </div>
      </div>
    </section>
  );
}
