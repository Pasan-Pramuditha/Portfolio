import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

import { GoogleGenAI } from '@google/genai';

const systemInstruction = `You are a helpful and friendly chatbot assistant on Pasan Pramuditha's portfolio website. 
Your goal is to answer questions about Pasan, his skills, experience, and projects. 
You can respond in English or Sinhala (Singlish or Unicode Sinhala) depending on how the user asks the question.
If the user asks in Sinhala, respond in Sinhala.

Here is the information about Pasan:
- Name: Pasan Pramuditha
- Profession: Full-Stack Developer & Software Engineering Undergraduate.
- Current Role: Intern Software Engineer at Sri Lanka Telecom PLC (SLTMobitel) in the Talent Development Section.
- Tech Stack/Skills: .NET, Flutter, React, Next.js, Java, Python, MySQL.
- Education: BSc (Hons) in Computer Science (Software Engineering) from University of Wolverhampton (Cinec Campus). Higher Diploma in Software Engineering (BTEC HND level 5) from Pearson College London (Esoft Metro Campus).
- Projects: 
  1. A digital system for SLT Internal Solutions Management.
  2. SmartFin: An AI-powered personal finance and expense tracker.
- Interests: AI, Cloud Deployment, Architecture.
- Contact info: LinkedIn (Pasan-Pramuditha-31b2b2286), GitHub (Pasan-Pramuditha), WhatsApp (+94 77 813 6626), Email (pasanpr58@gmail.com).

Guidelines:
- Keep your answers concise, friendly, and professional.
- Do not make up information that is not in the context above. If you don't know, say you don't know and ask them to contact Pasan directly.
- Use a polite and enthusiastic tone.`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', content: "Hi! I'm Pasan's AI assistant. How can I help you today? (ඔබට සිංහලෙන් වුවත් ප්‍රශ්න ඇසිය හැක!)" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("API key is missing");
      }

      const ai = new GoogleGenAI({ apiKey });
      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-3.6-flash',
        contents: newMessages.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        })),
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      setIsLoading(false); // Hide the typing indicator
      setMessages([...newMessages, { role: 'model', content: '' }]);
      
      let fullText = '';
      for await (const chunk of responseStream) {
        fullText += chunk.text;
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1].content = fullText;
          return updated;
        });
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages([...newMessages, { role: 'model', content: `Oops! Something went wrong: ${error.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-cyan-accent text-zinc-950 flex items-center justify-center shadow-[0_0_20px_rgba(0,208,255,0.4)] z-50 transition-all"
        aria-label="Open Chat"
      >
        <FaRobot size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] flex flex-col rounded-2xl overflow-hidden z-50"
            style={{ 
              backgroundColor: 'var(--card-bg)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid var(--card-border)',
              boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[var(--card-border)] bg-[rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-accent/20 text-cyan-accent flex items-center justify-center border border-cyan-accent/30">
                  <FaRobot size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[var(--text-primary)]">AI Assistant</h3>
                  <p className="text-[10px] text-cyan-accent">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[var(--text-secondary)] hover:text-cyan-accent transition-colors p-2"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-thin">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-1 ${
                      msg.role === 'user' 
                        ? 'bg-zinc-800 text-zinc-400' 
                        : 'bg-cyan-accent/20 text-cyan-accent border border-cyan-accent/30'
                    }`}>
                      {msg.role === 'user' ? <FaUser size={10} /> : <FaRobot size={10} />}
                    </div>
                    
                    <div className={`p-3 rounded-2xl text-sm ${
                      msg.role === 'user'
                        ? 'bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-primary)] rounded-tr-sm'
                        : 'bg-cyan-accent/10 border border-cyan-accent/20 text-[var(--text-primary)] rounded-tl-sm'
                    }`}>
                      {msg.role === 'user' ? (
                        <p>{msg.content}</p>
                      ) : (
                        <div className="prose prose-sm prose-invert max-w-none prose-p:leading-relaxed prose-a:text-cyan-accent">
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex gap-2 items-center">
                    <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center bg-cyan-accent/20 text-cyan-accent border border-cyan-accent/30">
                      <FaRobot size={10} />
                    </div>
                    <div className="p-3 rounded-2xl rounded-tl-sm bg-cyan-accent/10 border border-cyan-accent/20 flex gap-1">
                      <motion.div className="w-1.5 h-1.5 bg-cyan-accent rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                      <motion.div className="w-1.5 h-1.5 bg-cyan-accent rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                      <motion.div className="w-1.5 h-1.5 bg-cyan-accent rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 border-t border-[var(--card-border)] bg-[rgba(0,0,0,0.4)]">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full bg-[var(--input-bg)] border border-[var(--card-border)] rounded-full py-2 pl-4 pr-12 text-sm text-[var(--text-primary)] focus:outline-none focus:border-cyan-accent/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-1 w-8 h-8 rounded-full bg-cyan-accent text-zinc-950 flex items-center justify-center hover:bg-cyan-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <FaPaperPlane size={12} className="-ml-0.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
