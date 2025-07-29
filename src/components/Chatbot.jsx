import React, { useState, useEffect, useRef } from 'react';
import { FiSend, FiX, FiMessageSquare } from 'react-icons/fi';

// --- Pre-programmed AI data based on resume ---
const aiData = {
    skills: "Suraj is skilled in: C++, JavaScript, Java, Python, Dart, HTML, CSS, ReactJS, Node.js, Express.js, MongoDB, Firebase, Git, and more. He is proficient in the MERN stack for web development and Flutter for mobile apps.",
    projects: "Suraj has worked on several key projects: 'Pro-Track' (a MERN stack job portal), 'Vehicle Verified' (a Flutter app for document management), and an 'AI Chat Bot' using Python. Which one interests you?",
    experience: "Suraj worked as an Associate L1 - Web Developer at Infotact Solutions. He contributed to full-stack MERN projects, focusing on API development, UI/UX design, JWT authentication, and integrating AI tools.",
    contact: "You can contact Suraj by email at skr090850@gmail.com or connect on LinkedIn at linkedin.com/in/-suraj-kumar-.",
    greeting: "Hello! I'm Suraj's AI assistant. You can ask me about his skills, projects, or professional experience. How can I help you today?",
    default: "That's a great question. I'd recommend reaching out to Suraj directly for more details. You can ask me for his 'contact' information."
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  // Function to automatically scroll to the latest message
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);
  
  // Set the initial greeting message when the chat opens
  useEffect(() => {
    if (isOpen) {
        setMessages([{ text: aiData.greeting, sender: 'bot' }]);
    }
  }, [isOpen]);

  // Simple logic to generate a bot response based on keywords
  const getBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    if (lowerInput.includes("hello") || lowerInput.includes("hi")) return aiData.greeting;
    if (lowerInput.includes("skill")) return aiData.skills;
    if (lowerInput.includes("project") || lowerInput.includes("work")) return aiData.projects;
    if (lowerInput.includes("experience")) return aiData.experience;
    if (lowerInput.includes("contact") || lowerInput.includes("email")) return aiData.contact;
    if (lowerInput.includes("thank")) return "You're welcome! Feel free to ask anything else.";
    return aiData.default;
  };

  // Handles sending a message
  const handleSend = () => {
    if (input.trim() === '') return;
    const userMessage = { text: input, sender: 'user' };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');

    // Simulate bot thinking time before responding
    setTimeout(() => {
      const botResponse = { text: getBotResponse(input), sender: 'bot' };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Button to toggle chat window */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-cyan-400 text-slate-900 rounded-full p-4 shadow-lg shadow-cyan-400/30 hover:bg-cyan-300 hover:scale-110 transform transition-all duration-300"
          aria-label="Toggle Chat"
        >
          {isOpen ? <FiX size={28} /> : <FiMessageSquare size={28} />}
        </button>
      </div>

      {/* Chat Window */}
      <div className={`fixed bottom-24 right-8 z-40 w-80 md:w-96 h-[500px] bg-slate-800/80 backdrop-blur-md border border-cyan-400/30 rounded-lg shadow-2xl shadow-cyan-500/20 flex flex-col transition-all duration-500 ease-in-out ${isOpen ? 'transform-none opacity-100 pointer-events-auto' : 'transform-translate-y-16 opacity-0 pointer-events-none'}`}>
        <div className="p-4 border-b border-cyan-400/30 text-white font-bold text-center">AI Assistant</div>
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`flex mb-3 ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[80%] p-3 rounded-lg ${msg.sender === 'bot' ? 'bg-slate-700 text-white' : 'bg-cyan-500 text-slate-900'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <div className="p-4 border-t border-cyan-400/30">
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 bg-slate-700 border border-slate-600 rounded-l-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button onClick={handleSend} className="bg-cyan-500 text-slate-900 px-4 rounded-r-md hover:bg-cyan-400 transition-colors">
              <FiSend />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
