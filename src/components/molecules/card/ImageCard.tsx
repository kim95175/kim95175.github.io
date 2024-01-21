import Link from "next/link";
import Image from "next/image";

interface ImageCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ImageCard = ({ image, title, description, link }: ImageCardProps) => {
  return (
    <Link href={link}>

      <div className="relative flex flex-col justify-center overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-center"></div>
        <div className="group relative m-0 flex h-56 w-72 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
          <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100">
            <Image
              src={image}
              className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
              alt={title}
              fill
            />
          </div>
          <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
            <h1 className="font-serif text-2xl font-bold text-white shadow-xl">{title}</h1>
            <h1 className="text-sm font-light text-gray-200 shadow-xl">{description}</h1>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ImageCard;