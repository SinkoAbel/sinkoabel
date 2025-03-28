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
                        <p className="text-lg xl:pr-14 pb-2">
                            Hi, I&apos;m Ábel. 3+ year in IT industry I have gained multiple experiences. Under
                            this
                            period of time I got the opportunity to work in both multinational and smaller companies.
                        </p>

                        <p className="text-lg xl:pr-14 pb-2">
                            At High School I learned Mechanical Engineering. I worked in the industry for 3 years. After
                            that I met with Computer Sciences and I found what my heart really desires. A year later I
                            gained
                            entrance to&nbsp;
                            <a href="https://uni-eszterhazy.hu/en"
                               className="font-semibold underline decoration-[#F7AB0A]/60" target="_blank"
                               rel="noreferrer">
                                Eszterházy Károly Catholic University
                            </a>&nbsp;
                            to learn Software Engineering. I earned my degree in the summer of 2024.
                        </p>
                        <p className="text-lg xl:pr-14 pb-2">
                            I&apos;m learning new things at the University daily which I can use
                            during my job. Currently I&apos;m working as a
                            Cybersecurity Engineer at <b>MBH Bank Nyrt.</b>.&nbsp;
                            I&apos;m responsible for the company&apos;s security and managing it&apos;s vulnerabilities.
                            As I&apos;m quite new in security I found everything intersting thus I learn very fast.
                        </p>
                        <p className="text-lg xl:pr-14 pb-2">
                            <span className="underline">As for other interests and soft skills:</span>&nbsp;<br/>
                            I like to spend my free-time with travelling, watching football and ice hockey,
                            taking time with my family and maintaining my car.<br/>
                            I am strongly motivated and
                            I can learn just about any technology in a short period of time. I consider myself a team
                            player. I&apos;m cheerful and really like when I can make others happy and this attitude
                            shows on my work.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
        ;
};

export default About;