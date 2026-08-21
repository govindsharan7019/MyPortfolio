import React from 'react'
import { useState } from 'react';

function Form() {
  
      const [result, setResult] = useState("");
      const [isSending, setIsSending] = useState(false);

      const onSubmit = async (event) => {
        event.preventDefault();
        setIsSending(true);
        setResult("Sending data packet...");

        // 📐 THE PLATFORM COMPLIANCE FIX:
        // We capture the raw form elements data fields
        const formData = new FormData(event.target);
        
        // Convert the form layout matrix fields into a clean flat JavaScript Object
        const formObject = Object.fromEntries(formData);
        
        // Securely inject your real verified Web3Forms Access token payload parameters
        formObject.access_key = "2d899f28-3858-46b3-b003-c5da5c3f3c24";

        try {
          // Send the payload converted as a strict JSON string asset
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Instructs server we are passing pure data text
              "Accept": "application/json"
            },
            body: JSON.stringify(formObject) // Compiles structural inputs into safe transport nodes
          });

          const data = await response.json();
          
          if (data.success) {
            setResult("Success!");
            event.target.reset(); // Wipes input fields clean on a safe transaction receipt
          } else {
            // Displays explicit reason from Web3Forms server logs if token key is wrong
            setResult(`Error: ${data.message || "Validation failed"}`);
          }
        } catch (error) {
          setResult("Network Error. Link offline.");
        } finally {
          setIsSending(false);
        }
      };

  return (
    <div className='w-full h-full '>
      {/* Container wrapper balances space cleanly on phone and monitors */}
      <div className='h-auto w-[58vw] md:w-[18vw] mt-0 md:mt-[6vw] ml-0 md:ml-[3vw] rounded-2xl'>
        <form onSubmit={onSubmit}>
          <div>
            {result && <p className="text-[#fcd116] text-xs font-mono mb-2">&gt; {result}</p>}

            {/* 👤 1. NAME FIELD */}
            <input 
              type="text" 
              name="name" // Linked to formObject data row
              placeholder='Name' 
              required  
              className="
                w-full 
                mt-8
                px-4 
                py-3 
                text-sm 
                md:text-lg
                text-white 
                bg-zinc-950 
                border 
                border-zinc-900 
                rounded-xl 
                outline-none 
                transition-all 
                duration-300
                shadow-[inset_0px_4px_8px_rgba(0,0,0,0.9),_inset_0px_-2px_4px_rgba(255,255,255,0.02)]
                focus:border-[#5bc3f7]/50 
                focus:shadow-[inset_0px_4px_8px_rgba(0,0,0,0.95),_0px_0px_15px_rgba(91,195,247,0.1)]
              " 
            />

            {/* 📧 2. GMAIL FIELD */}
            <input 
              type="email" 
              name="email" // Linked to formObject data row
              placeholder='Gmail' 
              required 
              className="
                w-full 
                mt-5
                px-4 
                py-3 
                text-sm 
                md:text-lg
                text-white 
                bg-zinc-950 
                border 
                border-zinc-900 
                rounded-xl 
                outline-none 
                transition-all 
                duration-300
                shadow-[inset_0px_4px_8px_rgba(0,0,0,0.9),_inset_0px_-2px_4px_rgba(255,255,255,0.02)]
                focus:border-[#5bc3f7]/50 
                focus:shadow-[inset_0px_4px_8px_rgba(0,0,0,0.95),_0px_0px_15px_rgba(91,195,247,0.1)]
              " 
            />

            {/* 💬 3. MESSAGE FIELD */}
            <textarea 
              name="message" // Linked to formObject data row
              placeholder='your message' 
              required 
              className="
                w-full 
                mt-5
                px-4 
                py-3 
                text-sm 
                md:text-lg
                text-white
                bg-zinc-950 
                border 
                border-zinc-900 
                rounded-xl 
                outline-none 
                transition-all 
                duration-300
                shadow-[inset_0px_4px_8px_rgba(0,0,0,0.9),_inset_0px_-2px_4px_rgba(255,255,255,0.02)]
                focus:border-[#5bc3f7]/50 
                focus:shadow-[inset_0px_4px_8px_rgba(0,0,0,0.95),_0px_0px_15px_rgba(91,195,247,0.1)]
              " 
            ></textarea>

             {/* ⚡ ACTION TRIGGER BUTTON */}
             <button 
               disabled={isSending}
               className={`w-full mt-5 bg-zinc-950 border border-zinc-900
               shadow-[inset_0px_4px_8px_rgba(0,0,0,0.9),_inset_0px_-2px_4px_rgba(255,255,255,0.02)]
               focus:shadow-[inset_0px_4px_8px_rgba(0,0,0,0.95),_0px_0px_15px_rgba(91,195,247,0.1)]
               font-medium outline-none rounded-2xl px-5 py-2 active:scale-95 text-xl transition-all ${
                 isSending ? 'text-zinc-600 cursor-wait' : 'text-zinc-400 hover:text-[#5bc3f7] cursor-pointer'
               }`}
             >
               {isSending ? "TRANSMITTING..." : "Send message"}
             </button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Form;
