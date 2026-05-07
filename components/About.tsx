import React from 'react';
import {motion} from "framer-motion";
import aboutImage from "../public/Images/ProfileImages/AbelAboutImage.png"
import Image from "next/image";

type Props = {}

const About = (props: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className="mt-32 pt-32">
            <h3 className="text-center top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

            <div className="md:grid md:grid-cols-2 md:gap-5 mt-14">
                <div className="mx-auto pr-14 pl-14">
                    <motion.div initial={{
                        x: -200,
                        opacity: 0
                    }} transition={{duration: 1}} whileInView={{x: 0, opacity: 1}} whileHover={{y: -15, scale: 0.99}}
                                viewport={{once: true}}>
                        <Image src={aboutImage}
                                alt="Ábel Sinkó"
                                className="rounded-full md:rounded-lg max-w-[250px] md:max-w-[350px] lg:max-w-[500px]
                                xl:max-w-[500px] 2xl:max-w-[600px] mx-auto object-contain"/>
                    </motion.div>
                </div>
                <div className="mx-auto px-8 pt-14 md:pt-0">
                    <h4 className="text-4xl pb-5 font-semibold underline decoration-[#F7AB0A]/60">
                        Some information about me
                    </h4>
                    <div
                        className="sm:h-[270px] lg:h-[480px] 2xl:h-[550px] overflow-y-scroll scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-[#F7AB0A]/80">
                        <p className="text-lg xl:pr-14 pb-4">
                        Hi, I&apos;m Ábel, an <i><b>Information Security Engineer II at Mastercard</b></i> with a background in software development and cybersecurity.
                        I work in an AWS cloud environment, focusing mainly on vulnerability management and SOC-related activities.
                        </p>

                        <p className="text-lg xl:pr-14 pb-4">
                        Beyond the technical side, I also take ownership of selected efforts, coordinate work across international teams, and help drive projects forward in a structured way.
                        My software development background gives me a strong technical foundation and helps me connect engineering, security, and business needs.
                        </p>

                        <p className="text-lg xl:pr-14 pb-2">
                        Over time, I have become especially interested in roles that combine technical depth with leadership, collaboration, and responsibility.
                        I enjoy solving problems, working with different teams, and contributing to practical security improvements.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-4 xl:pr-14">
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200">
                                AWS Cloud Security
                            </span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200">
                                Vulnerability Management
                            </span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200">
                                SOC Operations
                            </span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200">
                                Ownership & Coordination
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
        ;
};

export default About;