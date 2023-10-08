
interface Props {
    children: JSX.Element
}

export const Item = ({ children }: Props) => {
    return (
        <button
            className='button-t'
        >
            {children}
        </button>
    )
}
