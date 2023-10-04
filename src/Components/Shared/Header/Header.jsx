import { NavLink } from "react-router-dom";
const Header = () => {
  const navBar = (
    <>
      <li>
        <a className="text-[#0a2c3d] text-[1rem] font-mono font-bold">Home+</a>
      </li>
      <li>
        <NavLink className="text-[#0a2c3d] text-[1rem] font-mono font-bold">
          Services+
        </NavLink>
      </li>
      <li>
        <NavLink className="text-[#0a2c3d] text-[1rem] font-mono font-bold">
          Item 3+
        </NavLink>
      </li>
      <li>
        <NavLink className="font-black text-[#0a2c3d]">Item 3+</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#ffffff]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navBar}
            </ul>
          </div>
          <a className="btn btn-ghost font-atony font-bold normal-case text-[#0a2c3d]  text-[1.4rem]">
            HouseR
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navBar}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-[#0a2c3d] bg-slate-50  hover:bg-neutral-100 hover:text-[#0a2c3d]">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
