import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState(""); // estado para email
  const [enteredPassword, setEnteredPassword] = useState(""); // estado para senha
  const [submitted, setSubmitted] = useState(false); // estado para enviado/nao-enviado

  function handleInputChange(identifier, value) {
    // handler de onChange
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    // handler de login
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@"); // condição de email inválido
  const passwordNotValid = submitted && enteredPassword.trim().length < 6; // condição de senha inválida

  return (
    <div
      id="auth-inputs"
      className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-linear-to-b from-stone-700 to-stone-800"
    >
      <div className="flex flex-col gap-2 mb-6">
        <Input
          label={"Email"}
          invalid={emailNotValid}
          type="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <Input
          label={"Password"}
          invalid={passwordNotValid}
          type="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
