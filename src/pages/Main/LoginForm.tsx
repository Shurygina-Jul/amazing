import { useEvent, useList, useStore } from "effector-react";
import * as React from "react";

import * as model from "./model";

function LoginForm() {
  const handleLogin = useEvent(model.loginClicked);
  return (
    <div className="message-form">
      <div>Please, log in to be able to send messages</div>
      <button onClick={() => handleLogin()}>Login as a random user</button>
    </div>
  );
}
export default LoginForm;
