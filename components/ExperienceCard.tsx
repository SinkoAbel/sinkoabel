import React from 'react';
import {motion} from "framer-motion";
import {ISkill} from "../config/skillConfig";


export default function ExperienceCard(props: any) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-screen md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40
        hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{duration: 1.5}}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{once: true}}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                src={props.experience.companyImage}
                alt=""/>

            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">{props.experience.jobTitle}</h4>
                <p className="font-bold text-2xl mt-1">{props.experience.companyName}</p>
                <div className="flex my-4 max-w-[310px] sm:max-w-[400px] flex-wrap gap-2">
                    {props.experience.technologies.map((technology: ISkill) => (
                        <img
                            key={technology.id}
                            className="h-10 w-10 rounded-full mx-1 mt-1"
                            src={technology.image} alt=""/>
                    ))}
                </div>
                <p className="uppercase py-5 text-gray-300">
                    {props.experience.dateStarted} -&nbsp;
                    {props.experience.dateEnded}
                </p>

                <ul className="list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll pr-5
                scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-[#F7AB0A]/80">
                    {props.experience.points.map((point: any) => (
                        <li key={point.id}>{point.point}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
};