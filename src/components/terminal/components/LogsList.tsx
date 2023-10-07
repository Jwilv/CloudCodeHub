import { Log } from "./Log"

interface Props {
    logs: string[]
}

export const LogsList = ({logs} : Props) => {
  return (
    <>
    {
        logs.map( ( log, index)=>( <Log key={index} log={log} />  ))
    }
    </>
  )
}
