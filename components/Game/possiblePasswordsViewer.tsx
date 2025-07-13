"use client"
import { Copy, KeyRound } from "lucide-react";
import toast from "react-hot-toast";

const POSSIBLES_PASSWORDS = [
  "123456",
  "password",
  "12345678",
  "123456789",
  "1234567890",
  "qwerty",
  "1234567",
]

export default function PossiblePasswordsViewer() {

  const handleCopy = (password: string) => {
    navigator.clipboard.writeText(password);
    toast.success("Contraseña copiada al portapapeles");
  };

  return (
    <div className="p-3 rounded-lg flex-1 w-full bg-zinc-900 border border-zinc-800">
      <div className="flex">
        <KeyRound className="w-6 h-6 mr-2 text-amber-500" />
        <h2 className="font-semibold">Posibles Contraseñas:</h2>
      </div>
      <ul className="flex flex-col mt-5 flex-wrap w-full gap-1">
        {POSSIBLES_PASSWORDS.map((password, index) => (
          <li
            onClick={() => handleCopy(password)}
            key={index}
            className="flex justify-between font-mono cursor-pointer items-center text-zinc-500 flex-1 min-w-1/3 text-center bg-zinc-950 p-2 rounded-md"
          >
            {password}
            <Copy
              className="inline-block ml-2 w-4 h-4 cursor-pointer text-zinc-500"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
