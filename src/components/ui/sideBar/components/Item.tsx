
interface Props {
    children: JSX.Element,
    onClick?: () => void
}

export const Item = ({ children, onClick }: Props) => {
    return (
        <button
            className='button-t'
            onClick={onClick}
        >
            {children}
        </button>
    )
}
