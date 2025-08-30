import React, { useState, useEffect, useRef } from "react";
import SplitText from "../components/Text";
import { TypeAnimation } from "react-type-animation";
import { FaArrowDown, FaLinkedin, FaGithub, FaFacebook, FaInfoCircle, FaLightbulb, FaUser, FaIdBadge, FaBirthdayCake, FaMapMarkerAlt, FaEnvelope, FaPhone, FaGraduationCap } from "react-icons/fa";
import Lanyard from "../components/lanyard";
import logo from '../assets/images/11111.png';
import ProfileCard from '../components/ProfileCard';
import arvy from '../assets/images/arvy.jpg';

import Navbar from '../components/Navbar';
import { topToBottom, leftToRight, top } from "../assets/js/animation"; // ✅ keep functions

function Home() {
    const [lanyardScale, setLanyardScale] = useState(1);
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);


    // 👇 refs for animations
    const nameRef = useRef(null);
    const subtitleRef = useRef(null);
    const follow = useRef(null);

    useEffect(() => {
        topToBottom(nameRef);     // animate name from top
        leftToRight(subtitleRef); // animate subtitle from left
        top(follow);
    }, []);


    const items = [
        { label: "About", bgColor: "#0D0716", textColor: "#fff", links: [{ label: "Company", ariaLabel: "About Company" }, { label: "Careers", ariaLabel: "About Careers" }] },
        { label: "Projects", bgColor: "#170D27", textColor: "#fff", links: [{ label: "Featured", ariaLabel: "Featured Projects" }, { label: "Case Studies", ariaLabel: "Project Case Studies" }] },
        { label: "Contact", bgColor: "#271E37", textColor: "#fff", links: [{ label: "Email", ariaLabel: "Email us" }, { label: "Twitter", ariaLabel: "Twitter" }, { label: "LinkedIn", ariaLabel: "LinkedIn" }] }
    ];

    return (
        <div className="bg-base-200">
            <Navbar
                homeRef={homeRef}
                aboutRef={aboutRef}
                projectsRef={projectsRef}
                skillsRef={skillsRef}
                contactRef={contactRef}

            />

            {/* Hero Section */}
            <div ref={homeRef} id="home"
                className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto py-30 px-1 lg:py-26 gap-10 min-h-screen" >
                <div className="flex-1 text-center lg:text-left mb-20 sm:mb-20 md:mb-24 lg:mb-0">
                    <h1 ref={nameRef} className="text-3xl md:text-5xl font-bold mb-4">
                        Hi! I'm <span className="text-pink-500">John Arvy Lopez</span>
                    </h1>

                    <h2
                        ref={subtitleRef}
                        className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                        <TypeAnimation
                            sequence={[
                                "Tzuyu number 1", 2000,
                                "Frontend Developer in night", 2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            deletionSpeed={70}
                            repeat={Infinity}
                        />
                    </h2>

                    <SplitText
                        text="Let's build something amazing together!"
                        className="text-xl font-medium mb-2"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="left"
                    />

                    {/* Follow me */}
                    <div ref={follow} className="mt-6 text-lg font-semibold text-gray-700">
                        <p className="mb-2">Follow me on:</p>
                        <div className="flex gap-6 justify-center lg:justify-start text-2xl">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-800 transition hover:-translate-y-1">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-black transition hover:-translate-y-1">
                                <FaGithub />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-700 transition hover:-translate-y-1">
                                <FaFacebook />
                            </a>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div ref={follow} className="flex gap-3 mt-6 justify-center lg:justify-start">
                        <button
                            onClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}
                            className="btn btn-primary px-6 py-3 rounded-lg shadow-lg bg-transparent text-white flex items-center gap-2 hover:bg-pink-500"
                        >

                            Get Started <FaArrowDown className="text-lg" />
                        </button>
                        <button className="btn btn-primary px-6 py-3 rounded-lg shadow-lg bg-transparent text-white flex items-center gap-2 hover:bg-pink-500">
                            View Projects <FaArrowDown className="text-lg transform rotate-[220deg]" />
                        </button>
                    </div>
                </div>

                {/* Lanyard 
                <div className="flex-1 flex justify-center items-center">
                    {/* <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} scale={lanyardScale} /> 
                </div>
                */}
            </div>

            {/* About Section */}
            <section ref={aboutRef} className="bg-base-200 py-20 px-6" id="about">
                <div className="max-w-5xl mx-auto text-center mb-12 flex flex-col justify-center items-center">
                    <h2 className="text-4xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center">
                        About Me
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
                        Discover my journey, passions, and the story behind my work.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
                    {/* Left: Profile Image */}
                    <div className="flex-1 flex justify-center">
                        <figure className="w-full max-w-sm lg:max-w-md">
                            <img
                                className="rounded-xl shadow-lg w-full h-auto object-cover"
                                src={arvy}
                                alt="Me"
                            />
                        </figure>
                    </div>

                    {/* Right: About Info */}
                    <div className="flex-1 text-gray-900 dark:text-gray-100 space-y-12">

                        {/* Who Am I & My Approach */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 className="text-2xl font-bold flex items-center gap-2">
                                    <FaInfoCircle className="text-blue-500" /> Who Am I
                                </h3>
                                <p className="mt-3 text-gray-700 dark:text-gray-300">
                                    I'm a frontend developer who crafts responsive, interactive, and clean UIs.
                                    With a background in Informatics Engineering, I blend design sense with technical logic.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold flex items-center gap-2">
                                    <FaLightbulb className="text-yellow-400" /> My Approach
                                </h3>
                                <p className="mt-3 text-gray-700 dark:text-gray-300">
                                    I focus on user-centered design, performance, and accessibility,
                                    always evolving with modern tech to deliver seamless digital experiences.
                                </p>
                            </div>
                        </div>

                        {/* Personal Info */}
                        <div>
                            <h3 className="text-2xl font-bold flex items-center gap-2 mb-6">
                                <FaUser className="text-green-400" /> Personal Info
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                                <div className="flex items-center gap-3  text-white p-4 rounded-lg">
                                    <FaIdBadge className="text-x text-gray-300" />
                                    <p><span className="font-semibold">Name:</span> John Doe</p>
                                </div>

                                <div className="flex items-center gap-3  text-white p-4 rounded-lg">
                                    <FaBirthdayCake className="text-xl text-gray-300" />
                                    <p><span className="font-semibold">Date of Birth:</span> Dec 02, 2004</p>
                                </div>

                                <div className="flex items-center gap-3  text-white p-4 rounded-lg">
                                    <FaMapMarkerAlt className="text-xl text-gray-300" />
                                    <p><span className="font-semibold">Place of Birth:</span> Manila, Philippines</p>
                                </div>

                                <div className="flex items-center gap-3  text-white p-4 rounded-lg">
                                    <FaEnvelope className="text-xl text-gray-300" />
                                    <p><span className="font-semibold">Email:</span> johndoe@email.com</p>
                                </div>

                                <div className="flex items-center gap-3  text-white p-4 rounded-lg">
                                    <FaPhone className="text-xl text-green-400" />
                                    <p><span className="font-semibold">Phone:</span> +63 912 345 6789</p>
                                </div>

                                <div className="flex items-center gap-3  text-white p-4 rounded-lg">
                                    <FaGraduationCap className="text-xl text-purple-400" />
                                    <p><span className="font-semibold">Education:</span> BS Computer Science</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SKILLS */}
            <section ref={skillsRef} className="bg-base-200 py-20 px-6" id="skills">
                <div className="max-w-5xl mx-auto text-center mb-12">
                    <h2 className="text-4xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                        Skills
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        Tools and technologies I’ve mastered or currently exploring.
                    </p>
                </div>

                {/* Example cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
                        <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Personal site showcasing my projects, skills, and journey.
                        </p>
                    </div>

                    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
                        <h3 className="text-xl font-bold mb-2">School Event Hub</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            A platform to view and register for school events (built with Flask + MySQL).
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section ref={projectsRef} className="bg-base-200 py-20 px-6" id="projects">
                <div className="max-w-5xl mx-auto text-center mb-12">
                    <h2 className="text-4xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                        Projects
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        Some of the things I’ve been working on recently.
                    </p>
                </div>

                {/* Example cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
                        <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Personal site showcasing my projects, skills, and journey.
                        </p>
                    </div>

                    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
                        <h3 className="text-xl font-bold mb-2">School Event Hub</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            A platform to view and register for school events (built with Flask + MySQL).
                        </p>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-neutral text-neutral-content px-10 py-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Brand / About */}
                    <div>
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <span className="text-pink-500">&lt;/&gt;</span> Lopez, John Arvy
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed">
                            Frontend Developer specializing in UI/UX, modern web technologies,
                            and building smooth digital experiences with clean code & creative flow.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h6 className="text-lg font-semibold flex items-center gap-2">
                            <span>📌</span> Navigation
                        </h6>
                        <ul className="mt-3 space-y-2">
                            <li><a href="#home" className="link link-hover hover:text-pink-500">Home</a></li>
                            <li><a href="#about" className="link link-hover hover:text-pink-500">About</a></li>
                            <li><a href="#projects" className="link link-hover hover:text-pink-500">Projects</a></li>
                            <li><a href="#contact" className="link link-hover hover:text-pink-500">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h6 className="text-lg font-semibold flex items-center gap-2">
                            <span>🔗</span> Find Me Online
                        </h6>
                        <div className="flex gap-4 mt-3">
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-base-200 text-neutral hover:bg-pink-500 hover:text-white transition">
                                🌐
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-base-200 hover:bg-pink-500 hover:text-white transition">
                                in
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-base-200 text-neutral hover:bg-pink-500 hover:text-white transition">
                                📸
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-base-200 text-neutral hover:bg-pink-500 hover:text-white transition">
                                🐦
                            </a>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h6 className="text-lg font-semibold flex items-center gap-2">
                            <span>✉️</span> Subscribe to Newsletter
                        </h6>
                        <p className="mt-2 text-sm">Stay updated with my latest projects and articles.</p>
                        <form className="mt-3">
                            <div className="flex flex-col gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full bg-neutral-content text-neutral px-3 py-2 rounded-lg"
                                />
                                <button type="submit" className="btn btn-primary w-full flex items-center justify-center gap-2">
                                    Subscribe <span>➡️</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t bg-neutral-100 border-base-300 my-6"></div>

                {/* Bottom Bar */}
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-2">
                    <div className="flex gap-4">
                        <a href="#" className="link link-hover">Privacy Policy</a>
                        <a href="#" className="link link-hover">Terms of Use</a>
                        <a href="#" className="link link-hover">Sitemap</a>
                    </div>
                    <p>© {new Date().getFullYear()} Lopez, John Arvy. All rights reserved.</p>
                </div>
            </footer>

        </div >
    );
}

export default Home;
