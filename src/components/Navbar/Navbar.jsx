import logo from '../../Resources/Logo.png'
import './Navbar.css'
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    return (
        <div className="navbar bg-transparent">
  <div className="navbar-start">
    <div className="dropdown z-50">
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] font-bold px-16 shadow bg-[#b5b5b5] text-black py-5 space-y-3 rounded-lg">
          <NavLink to='/'><a>Home</a></NavLink>
          <NavLink to='/donation'><a>Donation</a></NavLink>
          <NavLink to='/statistics'><a>Statistics</a></NavLink>
        </ul>
        <label tabIndex={0} className="btn btn-ghost  lg:hidden">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
          <GiHamburgerMenu className='text-3xl mt-10 text-black'></GiHamburgerMenu>
        </label>
    </div>
    <a className="btn btn-ghost normal-case text-xl">
        <img className='z-40' src={logo} alt="" />
    </a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <NavLink className='lg:mr-10 font-bold' to='/'><a>Home</a></NavLink>
        <NavLink className='lg:mr-10 font-bold' to='/donation'><a>Donation</a></NavLink>
        <NavLink className='lg:mr-10 font-bold' to='/statistics'><a>Statistics</a></NavLink>
    </ul>
  </div>
</div>
    );
};

export default Navbar;