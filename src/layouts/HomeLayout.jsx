import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {FiMenu} from "react-icons/fi";
import {AiFillCloseCircle} from "react-icons/ai";
import Footer from "../components/Footer.jsx";

function HomeLayout({ children }){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
    const role = useSelector((state) => state?.auth?.role);

    function changeWidth({children}) {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = "auto";
    }
    function hideDrawer() {
        const element =  document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;

        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = "0";
    }

    function onLogout() {
        //todo
        e.preventdefault();
        // to do
        navigate("/");
    }

    return(
        <div className="bg-pageBg min-h-[90vh]">
            <div className="drawer absolute left-0 z-50 w-full">
                <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content">
                    <label htmlFor="my-drawer">
                        <FiMenu onClick={changeWidth} size={"32px"} className="text-white font-bold m-4"/>
                    </label>
                </div>
                <div className="drawer-side w-0">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 h-[31vh] w-48 sm:w-80 bg-base-200 text-base-content relative">
                        <li className="m-fit absolute right-2 z-50">
                            <button onClick={hideDrawer} >
                                <AiFillCloseCircle size={"24px"} />
                            </button>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        { isLoggedIn && role === "ADMIN" && (
                            <li>
                                <Link to="/admin/dashboard">Admin Dashboard</Link>
                            </li>
                        )

                        }
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/courses">Courses</Link>
                        </li>

                        { isLoggedIn ? (
                            <li className="absolute bottom-4 w-[90%]">
                                <div className="w-full flex items-center justify-center">
                                    <button className="bg-blue-600 hover:bg-blue-800 text-white py-2 font-semibold rounded-md w-full">
                                        Logout
                                    </button>
                                    <button className="bg-pink-600 hover:bg-pink-800 text-white py-2 font-semibold rounded-md w-full">
                                        <Link to="/user/profile">Profile</Link>
                                    </button>
                                </div>
                            </li>
                        ) : (
                            <li className="absolute bottom-4 w-[90%]">
                                <div className="w-full flex items-center justify-center">
                                    <button className="bg-blue-600 hover:bg-blue-800 text-white py-2 font-semibold rounded-md w-full">
                                        <Link to="/login">Login</Link>
                                    </button>
                                    <button className="bg-pink-600 hover:bg-pink-800 text-white py-2 font-semibold rounded-md w-full">
                                        <Link to="/signup">Signup</Link>
                                    </button>
                                </div>
                            </li>
                        )}

                    </ul>
                </div>
            </div>
            {children}
            <Footer />
        </div>
    );
}

export default HomeLayout;