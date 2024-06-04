import GameCard from '@components/molecules/card/GameCard';

import { GameList } from './gameList';

const GamePage = () => {
  return (
    <div className="mt-8">
      <div className="text-lg font-bold py-5">플레이한 게임 목록</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 justify-center gap-4 w-fit">
        {GameList.map((game) => (
          <GameCard
            key={game.title.english}
            image={game.image}
            title={game.title}
            date={game.date}
            link={`/main/game/${game.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GamePage;
