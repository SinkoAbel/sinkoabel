import React from 'react';
import {motion} from "framer-motion";
import {PageInfo} from "../typings";
import {urlFor} from "../sanity";

type Props = {
    pageInfo: PageInfo
}

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
                    <motion.img
                        initial={{
                            x: -200,
                            opacity: 0
                        }}
                        transition={{
                            duration: 1.5
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1
                        }}
                        whileHover={{y: -15, scale: 0.99}}
                        viewport={{once: true}}
                        src={urlFor(props.pageInfo?.profilePic).url()}
                        className="md:rounded-lg max-w-[250px] md:max-w-[350px] lg:max-w-[500px]
                                   xl:max-w-[500px] 2xl:max-w-[600px] mx-auto object-contain rounded-full"/>
                </div>
                <div className="mx-auto px-10 pt-14 md:pt-0">
                    <h4 className="text-4xl pb-5 font-semibold underline decoration-[#F7AB0A]/60">
                        Some information about me
                    </h4>

                    <p className="text-lg">
                        {props.pageInfo?.backgroundInformation}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default About;