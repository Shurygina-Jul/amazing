import { useEvent } from "effector-react";
import React from "react";
import CreateForm from "./components/CreateForm";
import Notes from "./components/Notes";

import * as model from "./example/model";

function Main() {
  const handlePageMount = useEvent(model.pageMounted);
  React.useEffect(() => {
    handlePageMount();
  }, []);

  return (
    <div className="flex">
      <Notes />
      <CreateForm />
    </div>
  );
}

export default Main;
