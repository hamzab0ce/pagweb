import Link from "next/link";

export default function GameNotFound() {
  return (
    <div className="my-40 text-center">
      <h1 className="font-black text-3xl">Juego no encontrado</h1>
      <Link className="text-blue-500 underline" href="/">
        Volver al inicio
      </Link>
    </div>
  );
}