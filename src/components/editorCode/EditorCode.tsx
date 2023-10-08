import { Editor } from '@monaco-editor/react';
import { useRef, useState } from "react";
import Terminal from '../terminal';
import { SideBar } from '../ui/sideBar/SideBar';


export const EditorCode = () => {

  const [logs, setLogs] = useState([])

  const editorRef = useRef<any>(null);

  const [valueEditor, setValueEditor] = useState('console.log(10)');

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
    <div className='layout'>


      <SideBar />
      <div className='editor-container'>
        <Editor
          height="82vh"
          width="100%"
          theme="vs-dark"
          defaultLanguage="javascript"
          className='editor'
          value={valueEditor}
          onMount={handleEditorDidMount}
          onChange={handleChangeEditor}
        />

        <Terminal logs={logs} />
      </div>
    </div>
  )
}