import { useState } from "react"
import { postCode } from "../services/code"
import { Result } from "../interface/results"


export const useCode = () => {
    const [logs, setLogs] = useState<Result[]>([])
    const [valueEditor, setValueEditor] = useState('')

    const handleRunCode = async (code: string) => {
        const response = await postCode(code);
        console.log('aca')
        console.log(response)
        setLogs([...logs,...response])
    }

    return {
        logs,
        handleRunCode,
        handleChangeEditor : setValueEditor,
        codeValue : valueEditor
    }
}