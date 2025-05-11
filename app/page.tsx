import Filters from "@/components/Home/Filters";
import GoalWrapper from "@/components/Home/GoalWrapper";
import GameModal from "@/components/Modal";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <>
      <main className="flex items-start py-5 gap-5 m-5 rounded-2xl justify-center">
        <Filters />
        <GoalWrapper searchParams={searchParams} />
      </main>
      <GameModal />
    </>
  );
}
