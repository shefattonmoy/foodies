import { Link } from "react-scroll";
import { BiChevronDown, BiRestaurant } from "react-icons/bi";
import Button from "../../layouts/Button";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    }

    const closeMenu = () => {
        setMenu(false);
    }

    return (
        <div className="fixed w-full">
            <div>
                <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-black text-white shadow-[0_3px_10px_5px_rgba(0,0,0,0.3)]">
                    <div className="flex flex-row cursor-pointer items-center">
                        <span>
                            <BiRestaurant size={48}></BiRestaurant>
                        </span>
                        <h1 className="text-4xl font-semibold">Foodies</h1>
                    </div>
                    <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            Home
                        </Link>
                        <div className="relative group">
                            <div className="flex items-center gap-1">
                                <Link
                                    to="recipe"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    className="hover:text-brightColor transition-all cursor-pointer"
                                >
                                    Recipe
                                </Link>

                                <BiChevronDown className="cursor-pointer" size={25}></BiChevronDown>
                            </div>
                            <ul className="absolute hidden space-y-2 group-hover:block bg-black border border-gray-300 rounded-lg p-5">
                                <li>
                                    <Link
                                        to="recipe"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className="hover:text-brightColor transition-all cursor-pointer"
                                    >
                                        Indian
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="recipe"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className="hover:text-brightColor transition-all cursor-pointer"
                                    >
                                        Mexican
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="recipe"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className="hover:text-brightColor transition-all cursor-pointer"
                                    >
                                        Spanish
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="recipe"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className="hover:text-brightColor transition-all cursor-pointer"
                                    >
                                        Italian
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            About
                        </Link>
                        <Link
                            to="menu"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            Menu
                        </Link>
                        <Link
                            to="reviews"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            Reviews
                        </Link>

                        <Button title="Login"></Button>
                    </nav>
                    <div className="md:hidden flex items-center">
                        {menu ? (
                            <AiOutlineClose size={25} onClick={handleChange}></AiOutlineClose>
                        ) : (
                            <AiOutlineMenuUnfold
                                size={25}
                                onClick={handleChange}
                            ></AiOutlineMenuUnfold>
                        )}
                    </div>
                </div>
                <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-brightColor transition-all cursor-pointer"
                    >
                        Home
                    </Link>
                    <Link
                        to="recipe"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-brightColor transition-all cursor-pointer"
                    >
                        Recipe
                    </Link>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-brightColor transition-all cursor-pointer"
                    >
                        About
                    </Link>
                    <Link
                        to="menu"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-brightColor transition-all cursor-pointer"
                    >
                        Menu
                    </Link>
                    <Link
                        to="reviews"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-brightColor transition-all cursor-pointer"
                    >
                        Reviews
                    </Link>

                    <Button title="Login"></Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
