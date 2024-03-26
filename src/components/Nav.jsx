import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div>
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              Home
            </NavLink>
    
      </ul>
    </div>
    <a className=" text-xl">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
      <div className="flex-none gap-2">
          <ul className="menu menu-horizontal px-1 hidden sm:flex gap-5 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#23BE0A] font-bold border border-solid p-2 px-4 border-[#23BE0A]" : "font-bold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/listedBooks"
              className={({ isActive }) =>
                isActive ? "text-[#23BE0A] font-bold border border-solid p-2 px-4 border-[#23BE0A]" : "font-bold"
              }
            >
             Listed Books
            </NavLink>
            <NavLink
              to="/pagesToRead"
              className={({ isActive }) =>
                isActive ? "text-[#23BE0A] font-bold border border-solid p-2 px-4 border-[#23BE0A]" : "font-bold"
              }
            >
             Pages to Read
            </NavLink>
            <NavLink
              to="/exploreBooks"
              className={({ isActive }) =>
                isActive ? "text-[#23BE0A] font-bold border border-solid p-2 px-4 border-[#23BE0A]" : "font-bold"
              }
            >
             Explore Books
            </NavLink>
            <NavLink
              to="/bookmarks"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
             Pages to Read
            </NavLink>
          </ul>
       
        </div>
  </div>
  <div className="navbar-end">
    <div className="items-center flex-shrink-0 hidden lg:flex gap-4">
			<button className="self-center px-8 py-3 bg-[#23BE0A] text-white rounded ">Sign in</button>
			<button className="self-center px-8 py-3 font-semibold rounded bg-[#59C6D2] text-white">Sign up</button>
		</div>
	</div>
  </div>
</div>
		

    );
};

export default Nav;