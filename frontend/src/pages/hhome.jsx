import React from "react";
import SplitText from "../components/Text";
import { TypeAnimation } from "react-type-animation";
import { FaArrowDown } from "react-icons/fa";
import Lanyard from "../components/lanyard";

function Home() {
    return (
        <div className="flex flex-col justify-center items-center bg-base-200 min-h-screen px-4">

            {/* Main content in a row */}
            <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl w-full">

                {/* Text Content - Left Side */}
                <div className="max-w-2xl text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Hi! I'm{" "}
                        <span className="text-primary">
                            John Arvy Lopez
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6 max-w-2xl">
                        <TypeAnimation
                            sequence={[
                                "I'm a Full Stack Web Developer",
                                2000,
                                "",
                                100,
                            ]}
                            wrapper="span"
                            speed={50}
                            deletionSpeed={70}
                            repeat={Infinity}
                            style={{ display: "inline" }}
                        />
                    </h2>

                    <SplitText
                        text="Let's build something amazing together!"
                        className="text-xl font-medium mb-6"
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

                    {/* Call-to-action buttons */}
                    <div className="flex gap-3 mt-6 justify-center lg:justify-start">
                        <button id="getStarted" className="btn btn-primary px-6 py-3 rounded-lg shadow-lg bg-transparent text-white flex items-center gap-2 hover:bg-pink-500">
                            Get Started
                            <FaArrowDown className="text-lg" />
                        </button>
                        <button className="btn btn-primary px-6 py-3 rounded-lg shadow-lg bg-transparent text-white flex items-center gap-2 hover:bg-pink-500">
                            View Projects
                            <FaArrowDown className="text-lg transform rotate-[220deg]" />
                        </button>
                    </div>
                </div>

                {/* 3D Lanyard - Right Side */}
                <div className="w-full h-[200px] lg:w-1/2 flex justify-center items-center mt-30 lg:mt-0">
                    <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
                </div>
            </div>
        </div>
    );
}

export default Home;
