import React from 'react';
import {motion} from "framer-motion";
import projectConfig from "../config/projectConfig";

type Props = {}

function Projects({}: Props) {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            className="mt-32 pt-32 mx-auto items-center relative flex overflow-hidden flex-col max-w-full
            text-left justify-evenly z-0">

            <h3 className="text-center top-24 uppercase tracking-[20px] mb-3 text-gray-500 text-xl sm:text-2xl">
                Security & Engineering<br/>Highlights
            </h3>

            <h3 className="text-center text-gray-500 uppercase tracking-[3px] text-sm">
                Selected projects that show technical depth, ownership, and practical security thinking.
            </h3>


            <div
                className="relative w-full flex overflow-x-scroll overflow-y-hidden scrollbar scrollbar-track-gray-400 scrollbar-thumb-[#F7AB0A]/80 snap-x snap-mandatory z-20">
                {projectConfig.map((project, index) => (
                    <div key={project.id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center p-5 md:p-20">
                        <a href={project.linkToBuild} target="_blank" rel="noreferrer">
                            <motion.img
                                initial={{y: -150, opacity: 0}}
                                transition={{duration: 1}}
                                whileInView={{y: 0, opacity: 1}}
                                viewport={{once: true}}
                                className="max-h-[375px]"
                                src={project.projectImage}
                                alt=""/>
                        </a>

                        {!project.linkToBuild && (
                            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300">
                                Private Lab
                            </span>
                        )}

                        <div className="flex my-4 max-w-[310px] sm:max-w-[400px] flex-wrap gap-2">
                            {project.projectTechnology.map(technology => (
                                <img
                                    key={technology.id}
                                    className="h-10 w-10 rounded-full mx-1 mt-1"
                                    src={technology.image}
                                    alt=""/>
                            ))}
                        </div>

                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Selected Work 0{index + 1}:
                                </span> {project.projectName}
                            </h4>

                            <p className="text-lg text-center md:text-left">
                                {project.projectDescription}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12">
            </div>

        </motion.div>
    );
};

export default Projects;