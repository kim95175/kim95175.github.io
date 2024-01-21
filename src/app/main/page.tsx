import ImageCard from "@components/molecules/card/ImageCard";

const MainPage = () => {
  return (
    <div className="mt-8">
      <div className="flex grid-cols-3 gap-4">

        <ImageCard image="/music/LoveLetter.webp" title="blog" description="Tech Blog" link="/main/blog" />

      </div>
    </div>
  );
}

export default MainPage;