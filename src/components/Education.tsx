import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      degree: 'Bachelor of Technology (CSE)',
      institution: 'Swami Vivekananda Institute Of Science & Technology',
      period: '2021-2025',
      status: 'Completed',
      description: 'Specializing in Computer Science and Engineering with focus on Web Development, AI, ML, and Cybersecurity',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      degree: 'Higher Secondary',
      institution: 'Bishnupur High School',
      period: '2019-2021',
      status: 'Completed',
      description: 'Completed Higher Secondary Education with excellent grades',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      degree: 'Secondary',
      institution: 'Muninagar Radhakanta Vidyapith (H.S)',
      period: '2013-2019',
      status: 'Completed',
      description: 'Completed Secondary Education with strong foundation in Science and Mathematics',
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto italic">
            "Education: the passport to a boundless journey of self-discovery and success."
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                    <div className={`inline-flex p-3 bg-gradient-to-r ${edu.color} text-white rounded-xl mb-4`}>
                      <GraduationCap size={24} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>

                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm font-medium">{edu.institution}</span>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        edu.status === 'Pursuing'
                          ? 'bg-cyan-100 text-cyan-700'
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    <p className="text-gray-700 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${edu.color} border-4 border-white shadow-lg z-10 animate-pulse`}></div>
                </div>

                {/* Empty Space for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Continuous Learning Journey
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Beyond formal education, I actively engage in online courses, coding challenges, and tech communities
            to stay current with emerging technologies and industry best practices. My commitment to lifelong
            learning drives my professional growth and technical expertise.
          </p>
        </div>
      </div>
    </section>
  );
}
