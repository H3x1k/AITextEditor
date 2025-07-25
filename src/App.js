import './output.css';

import EditorComponent from './components/EditorComponent';
import ChatSidebar from './components/ChatSidebar';

function App() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 p-6 overflow-y-scroll">

        {/* Editor */}
        <EditorComponent />
        
      </div>

      {/* Sidebar */}
      <aside className="w-80 border-l p-4 bg-white">
        <ChatSidebar />
      </aside>
    </div>
  );
}

export default App;
