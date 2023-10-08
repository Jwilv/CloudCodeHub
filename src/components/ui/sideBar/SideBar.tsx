import { Item } from "./components/Item"


export const SideBar = () => {
    return (
        <div className='side-bar-container'>
            <Item >
                <i className="fa-solid fa-play white" />
            </Item>
            
            <Item >
            <i className="fa-solid fa-floppy-disk white" />
            </Item>
        </div>
    )
}
