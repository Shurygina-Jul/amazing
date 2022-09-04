import { useEvent, useList, useStore } from "effector-react";
import * as React from "react";
import Form from "./Form";
import History from "./History";

import * as model from "./model";

export function Main() {
  const handlePageMount = useEvent(model.pageMounted);
  React.useEffect(() => {
    handlePageMount();
  }, []);

  return (
    <div className="parent">
      <History />
      <Form />
    </div>
  );
}
export default Main;
