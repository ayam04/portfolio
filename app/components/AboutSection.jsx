"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-gray-900 font-light mb-6 text-lg uppercase tracking-wider">
              Programming Languages
            </h4>
            <div className="space-y-4">
              {['Python', 'TypeScrupt', 'JavaScript', 'SQL', 'R', "Java"].map((skill, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-1 h-6 bg-gray-900"></div>
                  <span className="text-gray-900 font-light">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-gray-900 font-light mb-6 text-lg uppercase tracking-wider">
              AI/ML Frameworks
            </h4>
            <div className="space-y-4">
              {['TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'CrewAI', 'Hugging Face'].map((skill, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-1 h-6 bg-gray-900"></div>
                  <span className="text-gray-900 font-light">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-gray-900 font-light mb-6 text-lg uppercase tracking-wider">
              Web Development
            </h4>
            <div className="space-y-4">
              {['React.js', 'Next.js', 'Node.js', 'FastAPI', 'Flask', 'Django'].map((skill, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-1 h-6 bg-gray-900"></div>
                  <span className="text-gray-900 font-light">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-gray-900 font-light mb-6 text-lg uppercase tracking-wider">
              Cloud & DevOps
            </h4>
            <div className="space-y-4">
              {['AWS', 'Google Cloud', 'Azure', 'DigitalOcean', 'Docker', 'Kubernetes'].map((skill, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-1 h-6 bg-gray-900"></div>
                  <span className="text-gray-900 font-light">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-12">
        <div className="space-y-12">
          <div className="border-l border-gray-900 pl-8">
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 p-8">
              <h4 className="text-gray-900 font-light text-xl mb-3 uppercase tracking-wider">B.Tech Computer Science Engineering</h4>
              <p className="text-gray-900 font-light text-lg mb-2">Manipal University Jaipur</p>
              <p className="text-gray-600 text-sm mb-1">2021 - 2025</p>
              <p className="text-gray-600 text-sm mt-4">Specialization in Data Science and AI</p>
            </div>
          </div>
          
          <div className="border-l border-gray-900 pl-8">
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 p-8">
              <h4 className="text-gray-900 font-light text-xl mb-3 uppercase tracking-wider">Data Science Diploma</h4>
              <p className="text-gray-900 font-light text-lg mb-2">Indian Institute of Technology, Madras</p>
              <p className="text-gray-600 text-sm mb-1">Diploma Program (Till Dec 2025)</p>
              <p className="text-gray-600 text-sm mt-4">Advanced Analytics and Machine Learning</p>
            </div>
          </div>
          
          <div className="border-l border-gray-900 pl-8">
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 p-8">
              <h4 className="text-gray-900 font-light text-xl mb-3 uppercase tracking-wider">International Exchange Program</h4>
              <p className="text-gray-900 font-light text-lg mb-2">Sultan Qaboos University, Oman</p>
              <p className="text-gray-600 text-sm mb-1">Academic Exchange Program</p>
              <p className="text-gray-600 text-sm mt-4">Cross-cultural academic experience</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 p-8 hover:border-gray-300/70 transition-all duration-300">
            <h4 className="text-gray-900 font-light text-lg mb-3 uppercase tracking-wider">IBM Data Science Professional</h4>
            <p className="text-gray-600 text-sm mb-4 font-light">Complete Data Science Pipeline & Analytics</p>
            <span className="inline-block px-4 py-1 border border-gray-300 text-gray-900 text-xs uppercase tracking-wider">Professional Certificate</span>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 p-8 hover:border-gray-300/70 transition-all duration-300">
            <h4 className="text-gray-900 font-light text-lg mb-3 uppercase tracking-wider">IBM AI Engineer</h4>
            <p className="text-gray-600 text-sm mb-4 font-light">Machine Learning & AI Development</p>
            <span className="inline-block px-4 py-1 border border-gray-300 text-gray-900 text-xs uppercase tracking-wider">Professional Certificate</span>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 p-8 hover:border-gray-300/70 transition-all duration-300">
            <h4 className="text-gray-900 font-light text-lg mb-3 uppercase tracking-wider">Google Generative AI</h4>
            <p className="text-gray-600 text-sm mb-4 font-light">Large Language Models & GenAI Applications</p>
            <span className="inline-block px-4 py-1 border border-gray-300 text-gray-900 text-xs uppercase tracking-wider">Specialization</span>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 p-8 hover:border-gray-300/70 transition-all duration-300">
            <h4 className="text-gray-900 font-light text-lg mb-3 uppercase tracking-wider">DeepLearning.ai GenAI</h4>
            <p className="text-gray-600 text-sm mb-4 font-light">Advanced Generative AI Techniques</p>
            <span className="inline-block px-4 py-1 border border-gray-300 text-gray-900 text-xs uppercase tracking-wider">Specialization</span>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 p-8 hover:border-gray-300/70 transition-all duration-300">
            <h4 className="text-gray-900 font-light text-lg mb-3 uppercase tracking-wider">Microsoft Azure AI</h4>
            <p className="text-gray-600 text-sm mb-4 font-light">AI Fundamentals & Cloud AI Services</p>
            <span className="inline-block px-4 py-1 border border-gray-300 text-gray-900 text-xs uppercase tracking-wider">Fundamentals</span>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 p-8 hover:border-gray-300/70 transition-all duration-300">
            <h4 className="text-gray-900 font-light text-lg mb-3 uppercase tracking-wider">Additional Certifications</h4>
            <p className="text-gray-600 text-sm mb-4 font-light">Kaggle Python, ML & API Development</p>
            <span className="inline-block px-4 py-1 border border-gray-300 text-gray-900 text-xs uppercase tracking-wider">Multiple Platforms</span>
          </div>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-gray-900 relative py-8 bg-transparent min-h-screen overflow-hidden" id="about">
      {/* Editorial decorative elements */}
      <div className="absolute top-16 left-16 w-14 h-14 opacity-8">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-indigo-400"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-16 w-10 h-10 opacity-6">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-rose-400"/>
        </svg>
      </div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 opacity-7">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-teal-400"/>
        </svg>
      </div>
      <div className="absolute bottom-1/3 left-1/5 w-12 h-12 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-amber-400"/>
        </svg>
      </div>
      <div className="absolute top-20 right-1/3 w-6 h-6 opacity-9">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-violet-300"/>
        </svg>
      </div>

      <div className="relative z-10 w-full h-full px-4 sm:px-6 lg:px-8">
        {/* Header Section - Full Width */}
        <div className="text-center mb-16 pt-8">
          <span className="text-sm uppercase tracking-[0.3em] text-gray-500 font-light mb-8 block">
            04 — About Me
          </span>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-light text-gray-900 mb-4 leading-[0.8] tracking-tight">
            About
          </h2>
          <h3 className="text-6xl md:text-8xl lg:text-9xl font-serif italic text-gray-400 leading-[0.8] tracking-tight mb-8">
            Me
          </h3>
        </div>

        {/* Main Content Grid - Utilizing Full Space */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          
          {/* Profile Image Column */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <div className="relative max-w-sm w-full">
              {/* Gradient background */}
              {/* <div className="absolute -inset-6 bg-gradient-to-br from-blue-100/50 via-purple-100/40 to-pink-100/50 blur-3xl opacity-70"></div> */}
              
              <div className="relative">
                <Image 
                  src="/images/IMG_7779.png" 
                  width={400} 
                  height={500} 
                  alt="Ayamullah Khan"
                  className="relative w-full h-auto border border-gray-200/60 shadow-2xl"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm px-6 py-4 text-xs text-gray-600 uppercase tracking-wider border border-gray-200/60 shadow-lg">
                  <div className="font-medium text-gray-900">AI Engineer</div>
                  <div className="text-gray-500">& Full Stack Developer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Bio Section */}
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <p className="text-xl font-light text-gray-900 leading-relaxed">
                    AI Developer specializing in building practical solutions 
                    that bridge technology and human needs.
                  </p>
                  <p className="text-lg font-light text-gray-700 leading-relaxed">
                    I'm <span className="text-gray-900 font-medium">Ayamullah Khan</span>, 
                    passionate about creating innovative solutions that make a difference.
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-lg font-light text-gray-700 leading-relaxed">
                    Expert in machine learning, generative AI, and modern web development.
                  </p>
                  <p className="text-lg font-light text-gray-700 leading-relaxed">
                    Focused on <span className="text-gray-900 font-medium">Machine Learning</span>, 
                    <span className="text-gray-900 font-medium"> Generative AI</span>, and 
                    <span className="text-gray-900 font-medium"> Full-Stack Development</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                Certifications
              </TabButton>
            </div>
            
            {/* Tab Content - Full Width */}
            <div className="w-full">
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 p-8 lg:p-12 shadow-lg">
                {TAB_DATA.find((t) => t.id === tab).content}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
