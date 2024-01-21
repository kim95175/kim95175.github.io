import Link from 'next/link';
import Logo from '@components/atoms/logo/Logo';

const Navbar = () => {
  return (
    <div className="flex justify-between items-baseline">
      <div>
        <Link href="/main">
          <Logo />
        </Link>
      </div>
      <div>by kim95175</div>
    </div>
  );
};

export default Navbar;
