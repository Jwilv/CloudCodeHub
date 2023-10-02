import { Editor } from '@monaco-editor/react';
import { useRef, useState } from "react";


export const EditorCode = () => {

  const editorRef = useRef<any>(null);

  const [valueEditor, setValueEditor] = useState('');

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor
  }

  const handleChangeEditor = () => {
    setValueEditor(editorRef.current?.getValue())
  }

  const handleSave = () => {
    fetch('http://localhost:3000/codejs/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        codigo: valueEditor
      })
    })
  }


  return (
<>
<Editor
      height="80vh"
      width="100vw"
      theme="vs-dark"
      defaultLanguage="javascript"
      className='editor'
      value={valueEditor}
      onMount={handleEditorDidMount}
      onChange={handleChangeEditor}
    />
    <button onClick={ handleSave }>
      save
    </button>
</>
  )
}