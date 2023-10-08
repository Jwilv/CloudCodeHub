import { Editor } from '@monaco-editor/react';
import { useRef, useState } from "react";
import Terminal from '../terminal';
import { SideBar } from '../ui/sideBar/SideBar';
import { useCode } from '../../hooks/useCode';


export const EditorCode = () => {

  const { handleRunCode, logs } = useCode();

  const editorRef = useRef<any>(null);

  const [valueEditor, setValueEditor] = useState('console.log(10)');

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor
  }

  const handleChangeEditor = () => {
    setValueEditor(editorRef.current?.getValue())
  }


  return (
    <div className='layout'>

      <button
        onClick={() => handleRunCode(valueEditor)}>
        run
      </button>

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