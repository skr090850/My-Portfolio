import React from 'react';
import { MdWork, MdSchool } from 'react-icons/md';

// --- Component Data based on your resume ---
const experienceData = [
  {
    type: 'work',
    icon: <MdWork />,
    date: 'Apr 2025 - Jul 2025',
    title: 'Associate L1 - Web Developer',
    subtitle: 'Infotact Solutions (Remote)',
    description: 'Contributed to full-stack MERN projects, including an e-commerce platform and a job portal. Gained hands-on experience in API development, UI/UX, JWT authentication, payment integration, and deployment.'
  }
];

const educationData = [
  {
    type: 'education',
    icon: <MdSchool />,
    date: '2022 - 2025',
    title: 'Bachelor of Computer Applications (B.C.A.)',
    subtitle: 'Cimage Professional College, Patna',
    description: 'Current CGPA: 8.43. Studied core computer science subjects, data structures, algorithms, and web development.'
  },
  {
    type: 'education',
    icon: <MdSchool />,
    date: '2017 - 2019',
    title: '12th Grade (Science)',
    subtitle: 'Sanjay Gandhi College, Ara',
    description: 'Completed with a score of 68.6%.'
  }
];

// A reusable timeline item component
const TimelineItem = ({ data }) => (
  <div className="relative pl-10 pb-10">
    {/* The vertical line of the timeline */}
    <div className="absolute left-0 h-full w-0.5 bg-slate-700"></div>
    {/* The icon on the timeline */}
    <div className="absolute left-[-18px] top-0 flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 border-2 border-cyan-400 text-cyan-400">
      {data.icon}
    </div>
    <div className="pl-4">
      <p className="text-sm text-cyan-300 mb-1">{data.date}</p>
      <h3 className="text-xl font-bold text-white">{data.title}</h3>
      <p className="text-md text-slate-400 mb-3">{data.subtitle}</p>
      <p className="text-slate-400">{data.description}</p>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          My <span className="text-cyan-400">Journey</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Work Experience Column */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 text-center md:text-left">Work Experience</h3>
            <div className="relative">
              {experienceData.map((item, index) => (
                <TimelineItem key={index} data={item} />
              ))}
            </div>
          </div>
          
          {/* Education Column */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 text-center md:text-left">Education</h3>
            <div className="relative">
              {educationData.map((item, index) => (
                <TimelineItem key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
