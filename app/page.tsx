import Filters from "@/components/Home/Filters";
import GoalWrapper from "@/components/Home/GoalWrapper";
import { Suspense } from "react";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <div className="relative h-full min-h-screen w-full bg-[#131316] overflow-hidden">
      {/* Fondo cuadriculado */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none z-0" />

      {/* Contenido */}
      <main className="relative z-10 flex items-start py-5 gap-5 m-5 rounded-2xl justify-center">
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <Filters />
        </Suspense>
        <GoalWrapper searchParams={searchParams} />
      </main>
    </div>
  );
}

