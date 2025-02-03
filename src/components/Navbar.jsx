import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { name, user, logOut } = useContext(AuthContext);

    console.log(user)
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">{name}</a>
                </div>
                <div className="navbar-center space-x-5 text-lg font-semibold">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/career'>Career</NavLink>
                </div>
                <div className="navbar-end">
                    {
                        user && user?.email ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a onClick={logOut}>Logout</a></li>
                            </ul>
                        </div>

                            // Conditional Navbar
                            :
                            <Link className="btn btn-neutral" to='/auth/login'>Login</Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;