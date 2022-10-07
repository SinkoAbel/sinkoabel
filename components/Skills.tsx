import {motion} from 'framer-motion';
import React from 'react';
import Skill from "./Skill";
import skillConfig from "../config/skillConfig";

type Props = {}

function Skills({}: Props) {
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
                {skillConfig?.slice(0, skillConfig.length / 2).map(skill => (
                    <Skill key={skill.id} image={skill.image} progress={skill.progress} directionLeft/>
                ))}

                {skillConfig?.slice(skillConfig.length / 2, skillConfig.length).map(skill => (
                    <Skill key={skill.id} image={skill.image} progress={skill.progress}/>
                ))}

            </div>


        </motion.div>
    );
};

export default Skills;
