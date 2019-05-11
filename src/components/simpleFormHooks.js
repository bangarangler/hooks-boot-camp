import React from "react";
import useFormState from "../hooks/useFormState.js";

export default function SimpleFormHooks() {
  const [email, updateEmail, resetEmail] = useFormState("");
  const [password, updatePassword, resetPassword] = useFormState("");
  const reset = () => {
    resetEmail();
    resetPassword();
  };
  return (
    <div>
      <h1>
        The email is: {email} & password is {password}
      </h1>
      <input type="text" value={email} onChange={updateEmail} />
      <input type="password" value={password} onChange={updatePassword} />
      <button onClick={() => reset()}>Submit</button>
    </div>
  );
}
