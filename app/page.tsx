import Filters from "@/components/Home/Filters";
import GoalWrapper from "@/components/Home/GoalWrapper";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
<<<<<<< HEAD
    <>
      <main className="flex items-start py-5 gap-5 m-5 rounded-2xl justify-center">
        <Filters />
        <GoalWrapper searchParams={searchParams} />
      </main>
    </>
=======
    <div className="relative h-full min-h-screen w-full bg-[#131316] overflow-hidden">
      {/* Fondo cuadriculado */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none z-0" />

      {/* Contenido */}
      <main className="relative z-10 flex items-start py-5 gap-5 m-5 rounded-2xl justify-center">
        <Filters />
        <GoalWrapper searchParams={searchParams} />
      </main>
    </div>
>>>>>>> v2
  );
}
