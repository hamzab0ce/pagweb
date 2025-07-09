import Filters from "@/components/Home/Filters/Filters";
import GameCollectionWrapper from "@/components/Home/Game/GameCollectionWrapper";
import { Suspense } from "react";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
      <main className="z-10 flex items-stretch md:gap-5 gap-1 m-5 rounded-2xl justify-center">
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <Filters />
        </Suspense>
        <GameCollectionWrapper searchParams={searchParams} />
      </main>
  );
}
