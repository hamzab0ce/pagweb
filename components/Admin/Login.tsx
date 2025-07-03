"use client"
import Login from "@/app/actions/login";
import { useActionState } from "react";

export default function LoginPage() {
  const [state, action, pending] = useActionState(Login, undefined);

  return (
    <form
      action={action}
      className="flex text-zinc-300 gap-5 w-1/4 p-5 flex-col bg-zinc-900 border border-zinc-800 shadow-lg rounded-lg"
    >
      <h2 className="text-zinc-100 text-center text-xl font-semibold my-5">
        Iniciar Sesión - Admin
      </h2>
      <label htmlFor="" className="flex flex-col gap-2">
        <span>Nombre de usuario: </span>
        <input
          name="username"
          className="border text-zinc-400 rounded p-1 border-zinc-800"
          type="text"
        />
      </label>
      <label htmlFor="" className="flex flex-col gap-2">
        <span>Contraseña: </span>
        <input
          name="password"
          className="border text-zinc-400 rounded p-1 border-zinc-800"
          type="password"
        />
      </label>
      <button
        className="border rounded-md py-1 font-medium cursor-pointer border-zinc-800 bg-blue-700"
        type="submit"
      >
        {pending ? "Cargando..." : "Iniciar Sesión"}
      </button>
      {state?.error && (
        <p className="text-red-500 text-center ">{state?.error}</p>
      )}
    </form>
  );
}