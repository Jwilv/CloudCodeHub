import { memo } from "react";
import { LogsList } from "./components/LogsList";

interface Props {
  logs: string[];
}

function Terminal({ logs }: Props) {

  return (
    <div className="console">
      <LogsList logs={logs} />
    </div>
  )
}
export default memo(Terminal);