"use client";

import { useState } from "react";
import Message from "./Message";


interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}


export default function ChatBox() {


  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hello! I am your local coding AI."
    }
  ]);


  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);



  async function sendMessage() {

    if (!input.trim()) return;


    const userMessage = input;


    setMessages(prev => [
      ...prev,
      {
        role:"user",
        content:userMessage
      }
    ]);


    setInput("");
    setLoading(true);



    try {


      const response = await fetch(
        "http://localhost:8000/api/chat",
        {
          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },

          body:JSON.stringify({
            message:userMessage
          })

        }
      );



      const data = await response.json();



      setMessages(prev=>[
        ...prev,
        {
          role:"assistant",
          content:data.response
        }
      ]);



    } catch(error){


      setMessages(prev=>[
        ...prev,
        {
          role:"assistant",
          content:"❌ Backend connection failed"
        }
      ]);


    }


    setLoading(false);

  }



return (

<div className="flex flex-col h-[calc(100vh-48px)]">


<div className="flex-1 overflow-y-auto">


{
messages.map((msg,index)=>(

<Message

key={index}

role={msg.role}

content={msg.content}

/>

))
}


{
loading && (

<div className="bg-gray-800 p-4 rounded-lg mr-10">
Thinking...
</div>

)
}


</div>



<div className="flex gap-3">


<input

value={input}

onChange={
e=>setInput(e.target.value)
}

onKeyDown={
e=>{
if(e.key==="Enter"){
sendMessage();
}
}
}

placeholder="Ask your coding AI..."

className="
flex-1
bg-gray-800
p-3
rounded-lg
outline-none
"

/>



<button

onClick={sendMessage}

className="
bg-blue-600
px-6
rounded-lg
hover:bg-blue-700
"

>
Send
</button>



</div>


</div>


);

}