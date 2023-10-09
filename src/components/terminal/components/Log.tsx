
interface Props {
    log: string
}

export const Log = ( { log } : Props) => {
  return (
    <p className="log"><i className="fa-solid fa-terminal white"/> Terminal: {log}</p>
  )
}
