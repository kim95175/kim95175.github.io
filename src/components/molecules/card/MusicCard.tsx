import Link from 'next/link';

import PauseButton from '@components/atoms/music/PauseButtons';

interface MusicCardProps {
  title: string;
  artist: string;
  cover: string;
}

const MusicCard = ({ title, artist, cover }: MusicCardProps) => {
  return (
    <div className="p-4 flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <img
          src={`/music/${cover}`}
          alt={`${title} - ${artist}`}
          className="w-64 h-64 mx-auto rounded-lg mb-4 shadow-lg shadow-teal-50"
        />
        <h2 className="text-xl font-semibold text-center text-black ">{title}</h2>
        <p className="text-gray-600 text-sm text-center">{artist}</p>
        <div className="mt-6 flex justify-center items-center">
          <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              className="w-4 h-4 text-gray-600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="matrix(-1, 0, 0, 1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z"
                  fill="#000000"
                />
                <path
                  d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z"
                  fill="#000000"
                />
              </g>
            </svg>
          </button>
          <Link href="/main" className="mx-4">
            <span className="relative flex">
              <span className="absolute animate-ping inline-flex rounded-full w-full h-full border border-primary200" />
              <span className="relative">
                <PauseButton />
              </span>
            </span>
          </Link>
          <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              className="w-4 h-4 text-gray-600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z"
                  fill="#000000"
                />
                <path
                  d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z"
                  fill="#000000"
                />
              </g>
            </svg>
          </button>
        </div>
        <div className="mt-6 bg-gray-200 h-2 rounded-full">
          <div className="bg-primary200 h-2 rounded-full w-1/2" />
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>1:57</span>
          <span>3:53</span>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
