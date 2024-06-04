import ImageCard from '@components/molecules/card/ImageCard';
import mainMenu from '@core/menu';

const MainPage = () => {
  return (
    <div className="mt-8">
      <div className="flex grid-cols-3 gap-4">
        {mainMenu.map((menu) => (
          <ImageCard
            key={menu.title}
            image={menu.image}
            title={menu.title}
            description={menu.description}
            link={menu.link}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
