import Logo from '@components/atoms/logo/Logo';

const NavBar = () => {
  return (
    <div className="flex justify-between items-baseline">
      <div>
        <Logo />
      </div>
      <div>by kim95175</div>
    </div>
  );
};

export default NavBar;
