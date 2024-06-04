import { GameList } from '../gameList';

interface GameMainProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return GameList.map((game) => ({
    slug: game.slug,
  }));
}

function GameMain({ params }: GameMainProps) {
  return <div className="mt-8">{params.slug}</div>;
}

export default GameMain;
