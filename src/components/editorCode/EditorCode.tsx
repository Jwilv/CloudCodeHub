import { Editor } from '@monaco-editor/react';
import { useContext, useEffect, useRef, useState } from "react";
import Terminal from '../terminal';
import { SideBar } from '../ui/sideBar/SideBar';
import { LogsContext } from '../../context/LogsProvider';


export const EditorCode = () => {

  const editorRef = useRef<any>(null);

  const { handleChangeEditor } = useContext(LogsContext);

  const [valueEditor, setValueEditor] = useState('');

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor
  }

  const handleChange = () => {
    setValueEditor(editorRef.current?.getValue());
    handleChangeEditor(editorRef.current?.getValue());
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
            onChange={handleChange}
          />

          <Terminal />
        </div>
      </div>
    
  )
}