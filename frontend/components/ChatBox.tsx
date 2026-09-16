"use client";

import {useState} from "react";
import Message from "./Message";


export default function ChatBox(){

const [messages,setMessages]=useState([
{
role:"assistant",
content:"Hello! I am your local coding AI."
}
]);


const [input,setInput]=useState("");



function sendMessage(){

if(!input.trim()) return;


setMessages([
...messages,
{
role:"user",
content:input
},
{
role:"assistant",
content:"Backend connection coming soon..."
}

]);


setInput("");

}



return (

<div className="flex flex-col h-[calc(100vh-48px)]">


<div className="flex-1 overflow-y-auto">

{
messages.map((msg,index)=>(
<Message
key={index}
role={msg.role as "user"|"assistant"}
content={msg.content}
/>
))
}

</div>


<div className="flex gap-2 mt-4">

<input

value={input}

onChange={
e=>setInput(e.target.value)
}

className="
flex-1
bg-gray-800
p-3
rounded-lg
outline-none
"

placeholder="Ask something..."



/>


<button

onClick={sendMessage}

className="
bg-blue-600
px-5
rounded-lg
"

>
Send
</button>


</div>


</div>

)

}