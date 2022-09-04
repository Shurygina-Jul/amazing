import * as React from "react";
import { useEvent } from "effector-react";

import History from "./History";
import SendMessage from "./SendMessage";

import * as model from "./model";

export function Main() {
  const handlePageMount = useEvent(model.pageMounted);
  React.useEffect(() => {
    handlePageMount();
  }, []);

  return (
    <div>
      <History />
      <SendMessage />
    </div>
  );
}
export default Main;
