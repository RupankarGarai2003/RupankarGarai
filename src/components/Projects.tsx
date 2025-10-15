import { ExternalLink, Github, Code } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
        title: 'Web Scraping of Jewellery Sites',
        description:'Python project for scraping data from Indian and international jewellery websites using Selenium and BeautifulSoup. Extracts item counts, images, and saves results to CSV files with visual graphs for analysis.',
        tech: ['Python', 'Selenium', 'BeautifulSoup', 'Matplotlib', 'CSV'],
        color: 'from-yellow-500 to-amber-600',
        viewLink: 'https://github.com/RupankarGarai2003/Web-Scraping',
        codeLink: 'https://github.com/RupankarGarai2003/Web-Scraping',
    },
    {
        title: 'Phishing Link Detection',
        description:'A machine learning project that detects phishing URLs using Python and Jupyter Notebook. The model analyzes URL features to classify links as safe or malicious, with a simple web interface for real-time testing.',
        tech: ['Python', 'Jupyter Notebook', 'HTML', 'CSS', 'Machine Learning'],
        color: 'from-red-500 to-rose-600',
        viewLink: 'https://github.com/RupankarGarai2003/Phishing-link-detection',
        codeLink: 'https://github.com/RupankarGarai2003/Phishing-link-detection',
    },
    {
        title: 'Text Terminator',
        description:'A fun and challenging typing speed test game built with HTML, CSS, and JavaScript. Players type words quickly and accurately to eliminate them and advance through levels, helping improve typing speed and accuracy.',
        tech: ['JavaScript', 'HTML', 'CSS'],
        color: 'from-purple-500 to-indigo-600',
        viewLink: 'https://github.com/RupankarGarai2003/TextTerminator',
        codeLink: 'https://github.com/RupankarGarai2003/TextTerminator',
    },
    {
        title: 'Article Finder',
        description:'A Python-based tool for extracting, analyzing, and summarizing articles from the web using the Newspaper library and a custom web scraper. It collects titles, publication dates, summaries, images, and videos, providing insightful NLP-based summaries for each article.',
        tech: ['Python', 'BeautifulSoup', 'Newspaper3k', 'NLTK', 'Requests'],
        color: 'from-blue-500 to-cyan-600',
        viewLink: 'https://github.com/RupankarGarai2003/Article-Finder',
        codeLink: 'https://github.com/RupankarGarai2003/Article-Finder',
    },
    {
        title: 'Color Detection Application',
        description:'A Python application that detects colors in an image using OpenCV and pandas. By double-clicking on any part of the image, it displays the color name and RGB values in real time, helping users identify colors accurately from images.',
        tech: ['Python', 'OpenCV', 'Pandas', 'CSV'],
        color: 'from-pink-500 to-rose-600',
        viewLink: 'https://github.com/RupankarGarai2003/Color-Detection',
        codeLink: 'https://github.com/RupankarGarai2003/Color-Detection',
    },

    {
      title: 'YouTube Playlist Downloader',
      description:'A Python application that downloads entire YouTube playlists in just one click. Users can paste a playlist URL and choose a destination folder, and the program automatically downloads all videos efficiently.',
      tech: ['Python', 'pytube', 'YouTube API'],
      color: 'from-red-600 to-rose-700',
      viewLink: 'https://github.com/RupankarGarai2003/Youtube-Playlist-Downloader',
      codeLink: 'https://github.com/RupankarGarai2003/Youtube-Playlist-Downloader',
    },

   
  ];

  const projectStats = [
    { label: 'Total Projects', value: '20+', icon: <Code size={24} /> },
    { label: 'Technologies Used', value: '15+', icon: <Code size={24} /> },
    { label: 'Lines of Code', value: '50K+', icon: <Code size={24} /> },
    { label: 'GitHub Repos', value: '22+', icon: <Github size={24} /> },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Made</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my technical projects and creative implementations
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {projectStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-3 text-cyan-600">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.viewLink}
                    className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300`}
                  >
                    <ExternalLink size={16} />
                    <span>View</span>
                  </a>
                  <a
                    href={project.codeLink}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-cyan-600 hover:text-cyan-600 transition-all duration-300"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
       <div className="text-center">
          <button
            onClick={() => window.open("https://github.com/rupankargarai2003", "_blank")}
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-medium text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            View All Projects
          </button>
      </div>


        {/* Additional Info */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Open Source Contributions
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              I actively contribute to open-source projects and maintain my own repositories on GitHub.
              My work spans various domains including web development, automation tools, and educational resources.
              I believe in the power of collaboration and knowledge sharing within the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
