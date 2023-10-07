import { Log } from "./Log"

interface Props {
    logs: string[]
}

export const LogsList = ({logs} : Props) => {
  return (
    <div>
    {
        logs.map( ( log, index)=>( <Log key={index} log={log} />  ))
    }
    </div>
  )
}
