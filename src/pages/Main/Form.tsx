import { useEvent, useList, useStore } from "effector-react";
import * as React from "react";
import LoginForm from "./LoginForm";

import * as model from "./model";
import SendMessage from "./SendMessage";

function Form() {
  //   const isLogged = useStore(model.$loggedIn);
  return <SendMessage />;
}
export default Form;
