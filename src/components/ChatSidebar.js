import { useState } from 'react';

import OpenAI from "openai";


const API_KEY = "";

const client = new OpenAI({apiKey: API_KEY, dangerouslyAllowBrowser: true});


export default function ChatSidebar() {

        const [response, setResponse] = useState("");


        const handleChat = async () => {
                const res = await client.responses.create({
                        model: "o4-mini",
                        input: "Write a one-sentence bedtime story about a unicorn.",
                });

                //const data = await res.json();
                setResponse(res.output_text);
        };

        return (

                <div className="h-full w-full flex flex-col">

                        <h1 className="h-12 text-2xl font-bold">Chat</h1>

                        <div className="flex-1 flex flex-col">

                                <div className="flex-1">
                                        <div>{response}</div>
                                </div>

                                <div className="flex flex-row">

                                        <input 
                                                className="w-full h-14 bg-gray-100 p-4 border-1 border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-0" 
                                                placeholder="Make a request..."
                                        />

                                        {/*<button className="absolute"></button> mic button*/}
                                        <button onClick={handleChat} className='w-full h-full'></button>

                                </div>

                        </div>

                </div>

        )

}