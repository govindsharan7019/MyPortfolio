import React, { useState } from 'react';
import { URL } from '../../Constants/Constants';

export default function CareerBot() {
  const [question, setquestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hi! Ask me anything about Govind’s technical projects!' }
  ]);

  // 🧠 SYSTEM CONTEXT DICTIONARY: This is what trains the AI about your profile!
  const resumeContext = `
    You are a professional AI hiring assistant embedded on Govind's portfolio website. 
    Your job is to answer questions for recruiters based ONLY on his verified resume data.
    
    Govind's Tech Stack: React.js, JavaScript, Node.js, Express.js, Tailwind CSS, MongoDB, Java, GSAP.
    Govind's Education: Bachelor's Degree in Computer Science Engineering (2022-2026) from Chaudhary Devilal University.
    
    Core Project Profiles:
    1. Portfolio Site: Front-end UI built with React, featuring 60 FPS animations using GSAP and conditional media queries. Includes this live AI Chatbot integration.
    2. MERN Ecommerce Platform: Full-stack application with user authentication, shopping carts, and dynamic MongoDB data operations.
    3. Student Management System: Desktop-based app built using Java, Swing layouts, and direct SQL database interaction via JDBC.
    
    Rule: Be concise, polite, and maintain an enthusiastic tone. Do not invent any outside experience.
  `;

  const askQuestion = async () => {
    if (!question.trim() || loading) return;

    // 1. Log user question onto the screen grid timeline instantly
    const userMessage = { role: 'user', text: question };
    setMessages((prev) => [...prev, userMessage]);
    
    const ongoingQuestion = question;
    setquestion('');
    setLoading(true);

    // 🚀 THE FIX: We pass the resumeContext inside the "systemInstruction" node tree object!
    const payload = {
      "contents": [{
        "parts": [{ "text": `Recruiter Question: ${ongoingQuestion}` }]
      }],
      "systemInstruction": {
        "parts": [{ "text": resumeContext }]
      }
    };

    try {
      let response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      
      // Unpack response string tracking coordinates
      if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        const aiText = data.candidates[0].content.parts[0].text;
        setMessages((prev) => [...prev, { role: 'ai', text: aiText }]);
      } else {
        setMessages((prev) => [...prev, { role: 'ai', text: 'Transmission structural data failure.' }]);
      }
    } catch (error) {
      console.error("AI Node error:", error);
      setMessages((prev) => [...prev, { role: 'ai', text: 'Downlink offline.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-76 sm:w-80 max-w-[90vw] rounded-2xl border border-zinc-900 bg-zinc-950/95 p-4 text-white shadow-2xl backdrop-blur-md font-mono select-none">
      
      <div className="mb-3 flex items-center gap-2 border-b border-zinc-900 pb-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <h4 className="font-bold text-[10px] tracking-widest text-zinc-400 uppercase">// SYS_AGENT: ONLINE</h4>
      </div>
      
      <div className="mb-3 h-48 overflow-y-auto space-y-3 text-[11px] pr-1 scrollbar-thin flex flex-col">
        {messages.map((msg, i) => (
          <div 
            key={i} 
            className={`p-2.5 rounded-xl max-w-[85%] leading-relaxed whitespace-normal break-words ${
              msg.role === 'user' 
                ? 'bg-[#5bc3f7] text-black font-bold ml-auto shadow-[0px_0px_10px_rgba(91,195,247,0.15)]' 
                : 'bg-zinc-900 border border-zinc-800 text-zinc-300 mr-auto shadow-inner'
            }`}
          >
            {msg.text}
          </div>
        ))}
        
        {loading && (
          <div className="p-2.5 rounded-xl max-w-[50%] bg-zinc-900 border border-zinc-800 text-[#fcd116] tracking-widest mr-auto animate-pulse uppercase text-[9px] font-bold">
            &gt; DECRYPTING...
          </div>
        )}
      </div>
      
      <div className="flex gap-2">
        <input 
          value={question}
          disabled={loading}
          onChange={(event) => setquestion(event.target.value)}
          onKeyDown={(event) => event.key === 'Enter' && askQuestion()}
          placeholder="Query skills matrix..." 
          className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#5bc3f7]/50 transition-all shadow-inner"
        />
        <button 
          onClick={askQuestion}
          disabled={loading}
          className="rounded-xl bg-white text-black font-bold px-3 py-2 text-xs hover:bg-[#5bc3f7] transition-all cursor-pointer active:scale-95 disabled:opacity-50 uppercase tracking-wider"
        >
          Send
        </button>
      </div>

    </div>
  );
}
