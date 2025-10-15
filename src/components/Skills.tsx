import { Code2, Database, Globe, Shield, Cpu, GitBranch } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code2 size={32} />,
      title: 'Frontend Development',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <Database size={32} />,
      title: 'Backend & Database',
      skills: ['NodeJs', 'Python', 'SQL', 'MySQL'],
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: <Globe size={32} />,
      title: 'Programming Languages',
      skills: ['C', 'Java', 'Python', 'JavaScript'],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: <Shield size={32} />,
      title: 'Cybersecurity & Ethical Hacking',
      skills: ['Penetration Testing', 'Bug Bounty', 'Vulnerability Assessment'],
      color: 'from-cyan-600 to-blue-600',
    },

    {
      icon: <Cpu size={32} />,
      title: 'AI & ML',
      skills: ['Python', 'Machine Learning (Beginner)', 'Data Analytics'],
      color: 'from-cyan-500 to-indigo-500',
    }
    ,
    {
      icon: <GitBranch size={32} />,
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Postman', 'Burp Suite', 'Kali Linux', 'Windows', 'VS Code'],
      color: 'from-indigo-500 to-cyan-500',
    },
  ];

  const allSkills = [
    'HTML', 'CSS', 'JavaScript', 'NodeJs', 'Python', 'C', 'Java',
    'Bootstrap', 'SQL', 'HTML5', 'CSS3', 'MySQL', 'Git', 'GitHub',
    'Windows', 'Kali Linux', 'Parrot', 'Artificial Intelligence'
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Abilities</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and competencies
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-4 bg-gradient-to-r ${category.color} text-white rounded-xl mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All Skills Tags */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allSkills.map((skill, index) => (
              <div
                key={index}
                className="group px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium shadow-md hover:shadow-xl transform hover:scale-110 transition-all duration-300 cursor-default animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-cyan-600 mb-2">3+</div>
            <div className="text-gray-600 font-medium">Programming Languages</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600 font-medium">Frameworks & Libraries</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-indigo-600 mb-2">10+</div>
            <div className="text-gray-600 font-medium">Tools & Platforms</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-cyan-600 mb-2">3</div>
            <div className="text-gray-600 font-medium">Operating Systems</div>
          </div>
        </div>
      </div>
    </section>
  );
}
