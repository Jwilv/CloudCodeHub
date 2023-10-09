import { useContext } from "react"
import { Item } from "./components/Item"
import { LogsContext } from "../../../context/LogsProvider"


export const SideBar = () => {

    const { handleRunCode, codeValue } = useContext(LogsContext)

    const handleOnClick = async() => {
        await handleRunCode(codeValue)
    }

    return (
        <div className='side-bar-container'>
            <Item onClick={handleOnClick}>
                <i className="fa-solid fa-play white" />
            </Item>

            <Item >
                <i className="fa-solid fa-floppy-disk white" />
            </Item>
            
            <Item >
                <i className="fa-solid fa-file-arrow-down white" />
            </Item>

            <Item >
                <i className="fa-solid fa-plus white" />
            </Item>

            <Item >
                <i className="fa-brands fa-js white"></i>
            </Item>


        </div>
    )
}
