import React from 'react';
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import heroImage from "../public/Images/ProfileImages/AbelProfilePhoto_600x600.jpg";

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, my name is Ábel Sinkó`,
            "I'm a Cybersecurity Engineer",
            "Welcome to my portfolio site"
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen space-y-2 flex flex-col items-center justify-center text-center overflow-hidden">
            <BackgroundCircles/>
            <div className="h-48 w-48">
                <motion.div initial={{opacity: 0}} transition={{duration: 2}}
                            whileInView={{opacity: 1}}>
                    <Image src={heroImage} alt="Ábel Sinkó" className="relative rounded-full mx-auto object-cover"/>
                </motion.div>
            </div>
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pt-3 pb-3 tracking-[15px]">Software Engineer</h2>
                <h1 className="text-4xl lg:text-6xl font-semibold px-10 h-20">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A"/>
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};