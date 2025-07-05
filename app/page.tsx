import Filters from "@/components/Home/Filters";
import GoalWrapper from "@/components/Home/GoalWrapper";
import { Suspense } from "react";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <div className="relative pt-20 min-h-dvh w-full overflow-hidden">

      {/* Contenido */}
      <main className="relative z-10 flex items-start gap-5 m-5 rounded-2xl justify-center">
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

