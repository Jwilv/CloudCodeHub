import Terminal from './components/terminal';
import './App.css'
import { EditorCode } from './components/editorCode/EditorCode';

function App() {

  return (
    <>
      <EditorCode />

      <div className='console'>
        <Terminal />
      </div>
    </>
  )
}

export default App
