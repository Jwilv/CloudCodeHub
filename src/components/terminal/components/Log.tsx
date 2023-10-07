
interface Props {
    log: string
}

export const Log = ( { log } : Props) => {
  return (
    <p>webApp/ {log}</p>
  )
}
