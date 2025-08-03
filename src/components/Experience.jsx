import React from "react";
import { motion } from "framer-motion";
import { MdWork, MdSchool } from "react-icons/md";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn } from "../utils/motion";

const experienceData = [
  {
    type: "work",
    icon: <MdWork />,
    date: "Apr 2025 - Jul 2025",
    title: "Associate L1 - Web Developer",
    subtitle: "Infotact Solutions (Remote)",
    description: (
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        <li>
          Focused on building <strong>full-stack web applications</strong> using
          the{" "}
          <strong>MERN stack (MongoDB, Express.js, React.js, Node.js)</strong>.
        </li>
        <li>
          Developed and implemented <strong>RESTful APIs</strong> for backend
          communication and services.
        </li>
        <li>
          Integrated <strong>JWT-based authentication</strong> for secure login
          and access control.
        </li>
        <li>
          Built <strong>responsive user interfaces (UI)</strong> using React and
          styled-components or Bootstrap.
        </li>
        <li>
          Worked on <strong>admin dashboards</strong> with real-time data
          handling and user management.
        </li>
        <li>
          Implemented <strong>payment gateway integration</strong> for secure
          transactions (e.g., Razorpay, Stripe).
        </li>
        <li>
          Contributed to three major projects:
          <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
            <li>
              <strong>Hyperlocal Service Marketplace</strong> – a platform for
              booking nearby services.
            </li>
            <li>
              <strong>Handmade Products E-commerce</strong> – online store for
              handmade products.
            </li>
            <li>
              <strong>ProTrack – Job & Internship Portal</strong> with:
              <ul style={{ listStyleType: "square", paddingLeft: "20px" }}>
                <li>Multi-role login (Admin, Recruiter, Student).</li>
                <li>Job posting, application tracking, and resume upload.</li>
                <li>
                  Integrated{" "}
                  <strong>AI-powered resume builder and checker</strong> using{" "}
                  <strong>GeminiAI</strong>.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Handled complete <strong>project deployment</strong> using{" "}
          <strong>Render</strong> and <strong>Vercel</strong>.
        </li>
        <li>
          Used <strong>Git and GitHub</strong> for version control and team
          collaboration.
        </li>
        <li>
          Participated in <strong>mock interviews</strong> and{" "}
          <strong>job-readiness sessions</strong> to improve professional
          skills.
        </li>
        <li>
          Enhanced abilities in:
          <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
            <li>
              <strong>Backend logic</strong> and data management.
            </li>
            <li>
              <strong>Frontend UI development</strong> and responsiveness.
            </li>
            <li>
              <strong>API integration</strong> and third-party service handling.
            </li>
            <li>
              <strong>Technical documentation</strong> and project reports.
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
];

const educationData = [
  {
    type: "education",
    icon: <MdSchool />,
    date: "2022 - 2025",
    title: "Bachelor of Computer Applications (B.C.A.)",
    subtitle: "Cimage Professional College, Patna, Bihar",
    description: (
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        <li>
          Proficient in C, C++, Java, Core Java, JavaScript, Python, HTML, CSS,
          SQL, and VB.NET.
        </li>
        <li>
          Experienced with web development, Java Swing, and tools like Microsoft
          Office, Git, and Visual Studio Code.
        </li>
        <li>
          Familiar with networking concepts and certifications like A+, N+, and
          CCNA.
        </li>
        <li>Comfortable working with Windows and Linux operating systems.</li>
        <li>
          Participated in Code Combat, a college-level coding competition, where
          I successfully cleared the first round and am advancing further.
        </li>
        <li>
          Actively involved in the Chess Society, where I also progressed beyond
          the initial round in inter-college competitions.
        </li>
      </ul>
    ),
  },
  {
    type: "education",
    icon: <MdSchool />,
    date: "2017 - 2019",
    title: "12th Grade (Science)",
    subtitle: "Sanjay Gandhi College, Ara, Bihar",
    description: (
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        <li>Physics</li>
        <li>Chemistry</li>
        <li>Mathematics</li>
      </ul>
    ),
  },
  {
    type: "education",
    icon: <MdSchool />,
    date: "2016 - 2017",
    title: "10th",
    subtitle: "H.P.D. Jain High School, Ara, Bihar",
    description: (
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        <li>Hindi</li>
        <li>English</li>
        <li>Mathematics</li>
        <li>Social Science</li>
        <li>Science</li>
      </ul>
    ),
  },
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
            <h3 className="text-3xl font-bold text-white mb-8 text-center md:text-left">
              Work Experience
            </h3>
            <div className="relative">
              {experienceData.map((item, index) => (
                <TimelineItem key={index} data={item} />
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeIn("left", "tween", 0.3, 1)}>
            <h3 className="text-3xl font-bold text-white mb-8 text-center md:text-left">
              Education
            </h3>
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
