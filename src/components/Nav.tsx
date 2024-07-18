import { LuShoppingBag, LuSearch, LuUserCircle2 } from "react-icons/lu";
import Logo from '../assets/img/Logo.png';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className='bg-background text-blue-primary-60 px-4 py-1.5 md:px-24'>
      <div className='items-center justify-between text-blue-primary-60 flex'>
        <Link to='/' className="pb-4 w-32">
          <img src={Logo} alt="Gadgetry Logo" className="w-full" />
        </Link>
        <div className='flex items-center gap-4'>
          <form className="hidden lg:block">
            <label htmlFor="search" className=' sr-only'>Search</label>
            <div className='rounded-[8px] bg-[#F5F5F5] flex items-center pl-4 py-2'>
              <span className=' text-[#556177]'>
                <LuSearch />
              </span>
              <input
                type="search" name="search"
                id="search"
                placeholder='search' className='text-[#556177] bg-[#F5F5F5] w-full rounded-md border-0 outline-none py-1.5 pl-2 placeholder:[#556177] pr-20' />
            </div>
          </form>
          <span className='flex items-center gap-4'>
            <span className='lg:hidden text-lg'>
              <LuSearch />
            </span>
            <Link to="/cart">
              <span className='flex items-center gap-1 text-lg'>
                <LuShoppingBag />
              </span>
            </Link>
            <span className='items-center  text-xl hidden lg:flex'>
              <LuUserCircle2 />
            </span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;