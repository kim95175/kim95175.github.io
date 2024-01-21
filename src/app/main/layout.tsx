import Navbar from '@components/organisms/navbar/Navbar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-36 mt-12">
      <Navbar />
      <div className="mt-8">{children}</div>
    </div>
  );
};

export default MainLayout;
