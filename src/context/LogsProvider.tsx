import { createContext } from "react";
import { useCode } from "../hooks/useCode";

interface LogsContextProps {
    logs: string[];
    handleRunCode: (code: string) => void;
    codeValue : string;
    handleChangeEditor : React.Dispatch<React.SetStateAction<string>>
}

export const LogsContext = createContext<LogsContextProps>({
    logs: [],
    handleRunCode: () => {},
    codeValue : '',
    handleChangeEditor : () => {}
} as LogsContextProps);

const { Provider } = LogsContext;

interface Props {
    children: JSX.Element;
}

export const LogsProvider = ({ children } : Props) => {

    const { logs, handleRunCode, codeValue, handleChangeEditor} = useCode();
    return (
        <Provider value={{logs, handleRunCode, codeValue, handleChangeEditor}}>
            {children}
        </Provider>
    );
}
