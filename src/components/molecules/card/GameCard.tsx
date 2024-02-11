import Link from 'next/link';

interface Date {
  year: string;
}

interface Title {
  korean: string;
  english: string;
}

interface GameCardProps {
  image: string;
  title: Title;
  date: Date;
  link: string;
}

const GameCard = ({ image, title, date, link }: GameCardProps) => {
  return (
    <Link href={link}>
      <div
        className="w-[250px] h-[350px] group bg-transparent cursor-pointer perspective"
      >
        <div
          className="relative w-full h-full duration-1000 preserve-3d group-hover:my-rotate-y-180"
        >
          <div className="absolute backface-hidden w-full h-full">
            <img src={image} className="w-full h-full object-cover object-center " />
            <div className="text-white text-2xl font-semibold p-5 bg-black bg-opacity-85 absolute bottom-0 w-full">{title.korean}</div>
          </div>
          <div
            className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-black overflow-hidden"
          >
            <div
              className="text-center flex flex-col items-center justify-center h-full text-white"
            >
              <div className="text-3xl font-semibold">{title.korean}</div>
              <div className="text-xl font-semibold">{title.english}</div>
              <div className="text-base">{date.year}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
