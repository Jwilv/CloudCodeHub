import { memo, useContext } from "react";
import { LogsList } from "./components/LogsList";
import { LogsContext } from "../../context/LogsProvider";

function Terminal() {

  const { logs } = useContext(LogsContext);
  return (
    <div className="console">
      <LogsList logs={logs} />
    </div>
  )
}
export default memo(Terminal);