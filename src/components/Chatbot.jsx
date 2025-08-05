import React, { useState, useEffect, useRef } from 'react';
import { FiSend, FiX, FiMessageSquare } from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef(null);
    const chatHistoryRef = useRef([]);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([{ text: "Hello! I'm Suraj's AI assistant, powered by Google Gemini. Ask me anything about his portfolio!", sender: 'bot' }]);
        }
    }, [isOpen]);

    const getSystemPrompt = () => {
        return `
            You are a helpful and friendly AI assistant for Suraj Kumar's personal portfolio.
            Your goal is to answer questions about Suraj based on the information provided below.
            
            **IMPORTANT RULES:**
            - Be conversational, but give answers TO THE POINT.
            - DO NOT use any special formatting characters like asterisks (*) for bolding or lists. Provide plain text answers.
            - If a question is asked that is not related to Suraj, politely decline to answer.

            **About Suraj Kumar:**
            - **Who is he?** Suraj Kumar is a passionate and driven Full-Stack Developer with expertise in the MERN stack and a strong interest in mobile development with Flutter. He is currently seeking challenging software development roles.
            - **Address:** Begampur, Ara, Bihar, India 802301.
            - **Contact:** Email is skr090850@gmail.com, LinkedIn is https://linkedin.com/in/-suraj-kumar-, GitHub is github.com/skr090850.

            **Education:**
            - **B.C.A. (Bachelor of Computer Applications):** Cimage Professional College, Patna (Aryabhatta Knowledge University). Expected to pass in 2025 with 8.43 CGPA.
            - **12th Grade:** Sanjay Gandhi College, Ara (2019) with 68.6%.
            - **10th Grade:** H.P.D. Jain High School, Ara (2017) with 68%.

            **Technical Skills:**
            - **Languages:** C, C++, JavaScript, Java, Python, Dart (Flutter).
            - **Frontend:** HTML, CSS, ReactJS.
            - **Backend:** Node.js, Express.js, REST API, JWT.
            - **Database:** MongoDB, SQL, Firebase (Firestore & Storage).
            - **Tools:** Git, GitHub, VS Code, Android Studio, Figma.
            - **APIs:** He has experience with Google Gemini API.

            **Work Experience:**
            - **Associate L1 - Web Developer at Infotact Solutions (Remote, Apr-Jul 2025):** Worked on full-stack MERN projects like an e-commerce platform and a job portal. Gained skills in API development, UI/UX, JWT, and AI tool integration.

            **Projects:**
            - **Pro-Track (Job Portal):** A role-based job portal using React, Node.js, Express.js, and MongoDB. Suraj handled backend development, APIs, and authentication.
            - **Vehicle Verified:** A Flutter mobile app to manage and verify vehicle documents using Firebase and QR codes.
            - **Hyperlocal Service Marketplace:** A web platform to connect users with local professionals for home services, built with the MERN stack.
            - **AI Chat Bot:** An intelligent chatbot built with Python and an LLM.

            **About this Portfolio:**
            - **Who made this portfolio?** This portfolio was built by Suraj Kumar. The AI assistant (that's you!) is powered by Google's Gemini API and was integrated by Suraj.
        `;
    };

    const handleSend = async () => {
        if (input.trim() === '' || isLoading) return;
        
        const userMessage = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        chatHistoryRef.current.push({ role: "user", parts: [{ text: input }] });

        const prompt = getSystemPrompt() + "\n\nHere is the conversation history:\n" + chatHistoryRef.current.map(m => `${m.role}: ${m.parts[0].text}`).join('\n') + `\n\nNow, answer the last user question: "${input}"`;

        try {
            const payload = {
                contents: [{ role: "user", parts: [{ text: prompt }] }],
            };
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const result = await response.json();
            const botResponseText = result.candidates[0].content.parts[0].text;
            
            const botMessage = { text: botResponseText, sender: 'bot' };
            setMessages(prev => [...prev, botMessage]);
            chatHistoryRef.current.push({ role: "model", parts: [{ text: botResponseText }] });

        } catch (error) {
            console.error("Error calling Gemini API:", error);
            const errorMessage = { text: "Sorry, I'm having a little trouble connecting. Please try again in a moment.", sender: 'bot' };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="fixed bottom-8 right-8 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-cyan-400 text-slate-900 rounded-full p-4 shadow-lg shadow-cyan-400/30 hover:bg-cyan-300 hover:scale-110 transform transition-all duration-300"
                    aria-label="Toggle Chat"
                >
                    {isOpen ? <FiX size={28} /> : <FiMessageSquare size={28} />}
                </button>
            </div>

            <div className={`fixed bottom-24 right-4 sm:right-8 z-40 w-[calc(100vw-2rem)] sm:w-96 lg:w-[450px] h-[70vh] sm:h-[500px] bg-slate-800/80 backdrop-blur-md border border-cyan-400/30 rounded-lg shadow-2xl shadow-cyan-500/20 flex flex-col transition-all duration-500 ease-in-out ${isOpen ? 'transform-none opacity-100 pointer-events-auto' : 'transform-translate-y-16 opacity-0 pointer-events-none'}`}>
                <div className="p-4 border-b border-cyan-400/30 text-white font-bold text-center flex items-center justify-center gap-2">
                    <FaRobot />
                    Suraj AI Assistant
                </div>
                <div className="flex-1 p-4 overflow-y-auto">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex mb-3 ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                            <div className={`max-w-[80%] p-3 rounded-lg ${msg.sender === 'bot' ? 'bg-slate-700 text-white' : 'bg-cyan-500 text-slate-900'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start mb-3">
                            <div className="max-w-[80%] p-3 rounded-lg bg-slate-700 text-white">
                                <span className="animate-pulse">Typing...</span>
                            </div>
                        </div>
                    )}
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
                            disabled={isLoading}
                        />
                        <button onClick={handleSend} className="bg-cyan-500 text-slate-900 px-4 rounded-r-md hover:bg-cyan-400 transition-colors disabled:bg-slate-500" disabled={isLoading}>
                            <FiSend />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chatbot;
