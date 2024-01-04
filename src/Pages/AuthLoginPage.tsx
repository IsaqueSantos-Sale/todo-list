import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import authLoginRequest from "../api/requests/auth-login-request";
import { Navigate } from "react-router-dom";

export default function AuthLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const mutation = useMutation({
    mutationFn: ([email, password]: string[]) => {
      return authLoginRequest(email, password);
    },
    onSuccess: (data) => {
      const token = data.token_type + " " + data.token;
      sessionStorage.setItem("auth_token", token);
    },
  });

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleSubmit() {
    mutation.mutate([email, password]);
  }

  if (mutation.isSuccess) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="flex justify-between w-full h-full p-3 border-2 rounded bg-indigo-950">
      <div className="flex rounded">
        <label htmlFor="email" className="bg-indigo-400 rounded-tl rounded-bl">
          E-mail
        </label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          className="p-1 bg-indigo-200"
          onChange={(e) => handleChangeEmail(e)}
        />
      </div>
      <div className="flex rounded">
        <label
          htmlFor="password"
          className="bg-indigo-400 rounded-tl rounded-bl"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="p-1 bg-indigo-200"
          onChange={(e) => handleChangePassword(e)}
        />
      </div>
      <button
        className="self-center w-1/2 p-1 text-3xl bg-indigo-900 rounded text-zinc-200"
        onClick={() => handleSubmit()}
      >
        Login
      </button>
    </div>
  );
}
