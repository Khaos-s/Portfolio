import React, { useState, useEffect } from 'react'
import { AiOutlineHome, AiOutlineIdcard } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function Navbar({ homeRef, aboutRef, projectsRef, skillsRef, contactRef }) {
    const [activeLink, setActiveLink] = useState("home");

    const handleClick = (link, ref) => {
        setActiveLink(link);
        ref?.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const sections = [
            { id: "home", element: homeRef?.current },
            { id: "about", element: aboutRef?.current },
            { id: "projects", element: projectsRef?.current },
            { id: "skills", element: skillsRef?.current },
            { id: "contact", element: contactRef?.current },
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach((section) => {
            if (section.element) {
                section.element.setAttribute("id", section.id); // ensure IDs exist
                observer.observe(section.element);
            }
        });

        return () => {
            sections.forEach((section) => {
                if (section.element) observer.unobserve(section.element);
            });
        };
    }, [homeRef, aboutRef, projectsRef, skillsRef, contactRef]);

    return (
        <div className="navbar bg-transparent shadow-lg fixed w-full p-7 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a onClick={() => handleClick("home", homeRef)}><AiOutlineHome /> Home</a></li>
                        <li><a onClick={() => handleClick("about", aboutRef)}><AiOutlineIdcard /> About</a></li>
                        <li><a onClick={() => handleClick("skills", skillsRef)}>Skills</a></li>
                        <li><a onClick={() => handleClick("projects", projectsRef)}><FaLaptopCode /> Projects</a></li>
                        <li><a onClick={() => handleClick("contact", contactRef)}><MdOutlineMailOutline /> Contact</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold ml-30">My Portfolio</a>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-10">
                    <li><a className={`text-xl hover:text-pink-500 ${activeLink === "home" ? "text-pink-500 font-bold" : ""}`} onClick={() => handleClick("home", homeRef)}><AiOutlineHome /> Home</a></li>
                    <li><a className={`text-xl hover:text-pink-500 ${activeLink === "about" ? "text-pink-500 font-bold" : ""}`} onClick={() => handleClick("about", aboutRef)}><AiOutlineIdcard /> About</a></li>
                    <li><a className={`text-xl hover:text-pink-500 ${activeLink === "skills" ? "text-pink-500 font-bold" : ""}`} onClick={() => handleClick("skills", skillsRef)}>Skills</a></li>
                    <li><a className={`text-xl hover:text-pink-500 ${activeLink === "projects" ? "text-pink-500 font-bold" : ""}`} onClick={() => handleClick("projects", projectsRef)}><FaLaptopCode /> Projects</a></li>
                    <li><a className={`text-xl hover:text-pink-500 ${activeLink === "contact" ? "text-pink-500 font-bold" : ""}`} onClick={() => handleClick("contact", contactRef)}><MdOutlineMailOutline /> Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
