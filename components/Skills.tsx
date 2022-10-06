import {motion} from 'framer-motion';
import React from 'react';
import Skill from "./Skill";
import {Skill as SkillType} from "../typings";

type Props = {
    skills: SkillType[];
}

function Skills({skills}: Props) {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            className="mt-32 pt-32 mx-auto items-center">

            <h3 className="text-center top-24 uppercase tracking-[20px] mb-3 text-gray-500 text-2xl">Skills</h3>

            <h3 className="text-center text-gray-500 uppercase tracking-[3px] text-sm mb-20">
                Hover over a skill for currency proficiency
            </h3>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-48">
                {skills?.slice(0, skills.length / 2).map(skill => (
                    <Skill key={skill._id} skill={skill} directionLeft/>
                ))}

                {skills?.slice(skills.length / 2, skills.length).map(skill => (
                    <Skill key={skill._id} skill={skill}/>
                ))}

            </div>


        </motion.div>
    );
};

export default Skills;
