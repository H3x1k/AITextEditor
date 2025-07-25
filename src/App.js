import './output.css';

import Split from 'react-split'

import EditorComponent from './components/EditorComponent';
import ChatSidebar from './components/ChatSidebar';

function App() {
  return (
    <Split
      className="flex h-screen"
      sizes={[70, 30]} // initial ratio
      minSize={300}
      gutterSize={6}
      direction="horizontal"
    >
      <div className="p-4 overflow-auto">
        <EditorComponent />
      </div>
      <div className="p-4 border-l overflow-auto bg-white">
        <ChatSidebar />
      </div>
    </Split>
  );
}

export default App;
