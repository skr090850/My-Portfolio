import React from 'react';
import { motion } from 'framer-motion';
import { MdWork, MdSchool } from 'react-icons/md';
import SectionWrapper from '../hoc/SectionWrapper';
import { fadeIn } from '../utils/motion';

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

const TimelineItem = ({ data }) => (
  <div className="relative pl-10 pb-10">
    <div className="absolute left-0 h-full w-0.5 bg-slate-700"></div>
    <div className="absolute left-[-18px] top-0 flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 border-2 border-cyan-400 text-cyan-400">
      {data.icon}
    </div>
    <div className="pl-4 p-6 rounded-lg bg-slate-800/20 backdrop-blur-sm border border-slate-700/50">
      <p className="text-sm text-cyan-300 mb-1">{data.date}</p>
      <h3 className="text-xl font-bold text-white">{data.title}</h3>
      <p className="text-md text-slate-400 mb-3">{data.subtitle}</p>
      <p className="text-slate-400">{data.description}</p>
    </div>
  </div>
);

const Experience = () => {
  return (
    <div className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              My <span className="text-cyan-400">Journey</span>
            </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)}>
            <h3 className="text-3xl font-bold text-white mb-8 text-center md:text-left">Work Experience</h3>
            <div className="relative">
              {experienceData.map((item, index) => (
                <TimelineItem key={index} data={item} />
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeIn("left", "tween", 0.3, 1)}>
            <h3 className="text-3xl font-bold text-white mb-8 text-center md:text-left">Education</h3>
            <div className="relative">
              {educationData.map((item, index) => (
                <TimelineItem key={index} data={item} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
