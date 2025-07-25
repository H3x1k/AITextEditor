import './output.css';
import './index.css'

import Split from 'react-split'

import EditorComponent from './components/EditorComponent';
import ChatSidebar from './components/ChatSidebar';

function App() {
  return (
    <Split
      className="flex h-screen"
      sizes={[70, 30]}
      minSize={300}
      gutterSize={6}
      direction="horizontal"
      gutterAlign="center"
      gutterClassName="gutter"
    >
      <div className="p-4">
        <EditorComponent />
      </div>
      <div className="p-4">
        <ChatSidebar />
      </div>
    </Split>
  );
}

export default App;
