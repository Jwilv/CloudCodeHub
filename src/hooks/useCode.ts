import { useState } from "react"
import { postCode } from "../services/code"
import { Code, Result } from "../interface/results"


export const useCode = () => {
    const [logs, setLogs] = useState<string[]>([])

    const handleRunCode = async (code: string) => {
        const response = await postCode(code);
        console.log(response)
        setLogs([...logs,...response])
    }


    return {
        logs,
        handleRunCode
    }
}