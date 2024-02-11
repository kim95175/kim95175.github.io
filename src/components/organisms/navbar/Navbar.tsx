import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex justify-between items-baseline">
      <div>
        <Link href="/main">
          <div className="font-montserret font-black tracking-tight text-2xl bg-gradient-to-r from-primary100 to-secondary100 text-transparent bg-clip-text pr-2">
            archive
          </div>
        </Link>
      </div>
      <div className="font-pretendard">by kim95175</div>
    </div>
  );
};

export default Navbar;
