

export default function ChatSidebar() {
        return (
                <div className="h-full w-full flex flex-col">

                        <h1 className="h-12 text-2xl font-bold">Chat</h1>

                        <div className="flex-1 flex flex-col">

                                <div className="flex-1">

                                </div>

                                <div className="flex flex-row">

                                        <input 
                                                className="w-full h-14 bg-gray-100 p-4 border-1 border-gray-200 rounded-lg placeholder:text-gray-400" 
                                                placeholder="Make a request..."
                                        />

                                        {/*<button className="absolute"></button> mic button*/}

                                </div>

                        </div>

                </div>
        )
}