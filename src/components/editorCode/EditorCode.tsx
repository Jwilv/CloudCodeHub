import { Editor } from '@monaco-editor/react';
import { useRef, useState } from "react";
import Terminal from '../terminal';


export const EditorCode = () => {

  const [logs, setLogs] = useState([])

  const editorRef = useRef<any>(null);

  const [valueEditor, setValueEditor] = useState('');

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor
  }

  const handleChangeEditor = () => {
    setValueEditor(editorRef.current?.getValue())
  }

  const handleSave = async () => {
    const response = await fetch('http://localhost:3000/api/codejs/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: valueEditor
      })
    })

    const data = await response.json()
    setLogs(data.result)
  }


  return (
    <>
      <button onClick={handleSave}>
        Run
      </button>
      <Editor
        height="80vh"
        width="99vw"
        theme="vs-dark"
        defaultLanguage="javascript"
        className='editor'
        value={valueEditor}
        onMount={handleEditorDidMount}
        onChange={handleChangeEditor}
      />

        <Terminal logs={logs}/>
    </>
  )
}