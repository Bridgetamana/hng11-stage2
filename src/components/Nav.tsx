import { LuMenu, LuShoppingBag, LuHeart, LuSearch, LuUserCircle2 } from "react-icons/lu";
import Logo from '../assets/img/Logo.png';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className=' bg-background'>
      {/* Mobile view */}
      <div className='flex items-center justify-between px-4 md:px-8 lg:hidden'>
        <Link to='/' className="pb-2">
            <img src={Logo} alt="Gadgetry Logo" />
        </Link>
        <span className='flex items-center gap-3'>
          <span className='text-xl'>
            <LuSearch />
          </span>
          <Link to="/cart">
            <span className='flex items-center gap-1 text-xl '>
              <LuShoppingBag />
              <p>1</p>
            </span>
          </Link>
          <span className='flex items-center gap-1 text-xl'>
            <LuHeart />
            <p>3</p>
          </span>
        </span>
      </div>

      {/* Desktop view */}
      <div className=' items-center justify-between px-6 py-4 text-blue-primary-60 hidden lg:flex lg:px-28'>
        <Link to='/'>
          <div className='pb-4'>
            <img src={Logo} alt="Gadgetry Logo" />
          </div>
        </Link>
        <div className='flex items-center gap-8'>
          <form>
            <label htmlFor="search" className=' sr-only'>Search</label>
            <div className='rounded-[8px] bg-[#F5F5F5] flex items-center pl-4 py-2'>
              <span className=' text-[#556177]'>
                <LuSearch />
              </span>
              <input 
              type="search" name="search" 
              id="search"
                placeholder='search' className='text-[#556177] bg-[#F5F5F5] w-full rounded-md border-0 outline-none py-2 pl-2 placeholder:[#556177] pr-20' />
            </div>
          </form>
          <span className='flex items-center gap-6'>
            <Link to="/cart">
              <span className='flex items-center gap-1 text-xl '>
                <LuShoppingBag />
                <p>1</p>
              </span>
            </Link>
            <span className='flex items-center  text-xl'>
              <LuUserCircle2 />
            </span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;