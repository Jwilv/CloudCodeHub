
interface Props {
    log: string
}

export const Log = ( { log } : Props) => {
  return (
    <p className="log">webApp: {log}</p>
  )
}
