import React from 'react';
import {motion} from "framer-motion";
import {useForm, SubmitHandler} from "react-hook-form";


type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {}

function ContactMe({}: Props) {

    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:sinkoabel@gmail.com?subject=${formData.subject}&Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    }


    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            className="mt-32 py-32 mx-auto items-center">

            <h3 className="text-center top-24 uppercase tracking-[20px] mb-3 text-gray-500 text-2xl">Contact</h3>

            <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center py-16">
                    I might be the right person for you.<br/>
                    <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
                </h4>

                <div className="w-screen">
                    <form onSubmit={handleSubmit(onSubmit)}
                          className="flex flex-col space-y-2 w-[350px] md:w-[550px] mx-auto">
                        <div className="grid grid-cols-2 space-x-2">
                            <input {...register('name')} placeholder="Name" className="contactInput" type="text"/>
                            <input {...register('email')} placeholder="Email" className="contactInput" type="email"/>
                        </div>

                        <input {...register("subject")} placeholder="Subject" className="contactInput" type="text"/>

                        <textarea {...register("message")} placeholder="Message..." className="contactInput"/>
                        <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactMe;
