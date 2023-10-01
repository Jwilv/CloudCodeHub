import Editor from '@monaco-editor/react';
import Terminal from './components/terminal';
import './App.css'

function App() {

  return (
    <>
      <Editor
        height="80vh"
        width="90vw"
        theme="vs-dark"
        defaultLanguage="javascript"
        className='editor'
      />

      <div className='console'>
        <Terminal />
      </div>
    </>
  )
}

export default App
