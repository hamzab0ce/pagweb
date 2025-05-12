import { getGameByID } from "@/app/actions/getGameByID";
import GameTemplate from "@/components/GameInfoTemplate";
import Modal from "@/components/Modal";

export default async function Page({ params }: {
  params: Promise<{ id: number }>
}) {
  const { id } = await params
  const game = await getGameByID(Number(id));
  return (
    <Modal>
      {game && <GameTemplate game={game} />}
    </Modal>
  );
}