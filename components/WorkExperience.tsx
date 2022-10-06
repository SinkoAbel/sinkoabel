import React from 'react';
import {motion} from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import {Experience} from "../typings";

type Props = {
    experiences: Experience[]
}

export default function WorkExperience({experiences}: Props) {
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
            <h3 className="text-center top-24 uppercase tracking-[20px] mb-5 text-gray-500 text-2xl">Experience</h3>

            <div className="w-full flex space-x-5 overflow-x-scroll px-10 pb-2 snap-x snap-mandatory
                            scrollbar scrollbar-track-gray-400 scrollbar-thumb-[#F7AB0A]/80">
                {experiences?.map(experience => (
                    <ExperienceCard key={experience._id} experience={experience}/>
                ))}
            </div>
        </motion.div>
    );
};