import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaUser, FaSync } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';



const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', content: "Hi! I'm Pasan's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');

  const handleRefresh = () => {
    setMessages([
      { role: 'model', content: "Hi! I'm Pasan's AI assistant. How can I help you today?" }
    ]);
  };
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (eOrText) => {
    let textToSend = input;
    if (typeof eOrText === 'string') {
      textToSend = eOrText;
    } else {
      eOrText?.preventDefault();
    }
    if (!textToSend.trim() || isLoading) return;

    const userMessage = { role: 'user', content: textToSend.trim() };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');

      setIsLoading(false);
      setMessages([...newMessages, { role: 'model', content: '' }]);

      let fullText = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        fullText += decoder.decode(value, { stream: true });
        
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
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 bg-cyan-accent rounded-full blur-xl z-0"
        />
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: isOpen ? 0 : 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 text-white flex items-center justify-center shadow-[0_0_30px_rgba(0,208,255,0.6)] z-10 border border-cyan-300/30"
          aria-label="Open Chat"
        >
          <FaRobot className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 sm:w-[400px] h-[500px] sm:h-[550px] max-h-[80vh] sm:max-h-[85vh] flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden z-50"
            style={{ 
              background: 'linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(0,0,0,0.95) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(0, 208, 255, 0.2)',
              boxShadow: '0 20px 50px -10px rgba(0,208,255,0.2), inset 0 0 0 1px rgba(255,255,255,0.05)'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/5 bg-gradient-to-r from-cyan-900/30 to-transparent">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 text-white flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <FaRobot size={20} />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0a0a0a]"></div>
                </div>
                <div>
                  <h3 className="font-bold text-[15px] text-white tracking-wide">AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <p className="text-[11px] text-zinc-400 font-medium tracking-wider uppercase">Online</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={handleRefresh}
                  className="text-[var(--text-secondary)] hover:text-cyan-accent transition-colors p-2"
                  title="Refresh Chat"
                >
                  <FaSync />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--text-secondary)] hover:text-cyan-accent transition-colors p-2"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-thin">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[88%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center mt-1 shadow-md ${
                      msg.role === 'user' 
                        ? 'bg-gradient-to-br from-zinc-700 to-zinc-800 text-zinc-300' 
                        : 'bg-gradient-to-br from-cyan-500 to-cyan-600 text-white'
                    }`}>
                      {msg.role === 'user' ? <FaUser size={12} /> : <FaRobot size={12} />}
                    </div>
                    
                    <div className={`p-4 text-[14.5px] leading-[1.6] shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-2xl rounded-tr-sm'
                        : 'bg-white/5 border border-white/10 backdrop-blur-md text-zinc-100 rounded-2xl rounded-tl-sm'
                    }`}>
                      {msg.role === 'user' ? (
                        <p>{msg.content}</p>
                      ) : (
                        <div className="prose prose-sm prose-invert max-w-none prose-p:leading-[1.6] prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-cyan-100">
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
              {messages.length === 1 && !isLoading && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-2 mt-2"
                >
                  {[
                    "Tell me about your projects",
                    "What are your top skills?",
                    "How can I contact you?",
                    "Tell me in Sinhala (සිංහල)"
                  ].map((suggestion, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(suggestion)}
                      className="px-3 py-1.5 text-xs rounded-full border border-cyan-accent/30 text-cyan-accent/90 hover:bg-cyan-accent/10 hover:text-cyan-accent transition-colors text-left"
                    >
                      {suggestion}
                    </button>
                  ))}
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 border-t border-white/5 bg-black/40 backdrop-blur-md">
              <div className="relative flex items-center group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything about Pasan..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3.5 pl-5 pr-14 text-[14px] text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-900/10 transition-all shadow-inner"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-1.5 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 text-white flex items-center justify-center hover:shadow-[0_0_15px_rgba(0,208,255,0.5)] disabled:opacity-50 disabled:hover:shadow-none disabled:cursor-not-allowed transition-all duration-300"
                >
                  <FaPaperPlane size={14} className="-ml-1" />
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
