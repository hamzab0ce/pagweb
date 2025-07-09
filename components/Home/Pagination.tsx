import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: {
  totalPages: number
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [currentPage, setCurrentPage] = useState(1);

  // Lee el valor de la URL al montar
  useEffect(() => {
    const pageParam = parseInt(searchParams.get("page") ?? "1", 10);
    setCurrentPage(pageParam);
  }, [searchParams]);

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    router.push(`/?page=${nextPage}`);
  };

  const handlePrevPage = () => {
    const prevPage = currentPage - 1;
    router.push(`/?page=${prevPage}`);
  };

  return (
    <div className="flex gap-2 items-end flex-1 justify-center">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="px-3 py-1 cursor-pointer bg-amber-500 disabled:bg-zinc-700 rounded-md disabled:opacity-40"
      >
        ← Anterior
      </button>

      <span className="text-sm py-1 text-zinc-400">
        Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
      </span>

      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="px-3 py-1 cursor-pointer bg-amber-500 disabled:bg-zinc-700 rounded-md disabled:opacity-40"
      >
        Siguiente →
      </button>
    </div>
  );
}
