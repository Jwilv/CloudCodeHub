import Terminal from './components/terminal';
import './App.css'
import { EditorCode } from './components/editorCode/EditorCode';
import { LogsProvider } from './context/LogsProvider';

function App() {

  return (
    <LogsProvider>
      <EditorCode />
    </LogsProvider>
  )
}

export default App
