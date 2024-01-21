
import NavBar from "@components/organisms/NavBar";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-36 mt-12">
      <NavBar />
      <div className="mt-8">
        {children}
      </div>
    </div >
  )
}

export default MainLayout;