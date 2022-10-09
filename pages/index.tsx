import type {GetStaticProps} from 'next'
import Head from 'next/head'
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import {Experience, PageInfo, Project, Skill, Social} from "../typings";
import {fetchPageInfo} from "../utils/fetchPageInfo";
import {fetchExperiences} from "../utils/fetchExperiences";
import {fetchSkills} from "../utils/fetchSkills";
import {fetchProjects} from "../utils/fetchProjects";
import {fetchSocials} from "../utils/fetchSocials";

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
}


const Home = ({pageInfo, experiences, skills, projects}: Props) => {
    return (
        <div
            className="bg-[rgb(36,36,36)] text-white h-screen snap-y overflow-x-hidden sm:overflow-y-scroll z-0
            scroll-smooth sm:scrollbar sm:scrollbar-track-gray-400 sm:scrollbar-thumb-[#F7AB0A]/80">
            <Head>
                <title>Ábel Sinkó - Portfolio</title>
            </Head>

            <Header/>

            <section id="hero" className="snap-start">
                <Hero/>
            </section>

            <section id="about" className="snap-none">
                <About/>
            </section>

            <section id="experience" className="snap-none">
                <WorkExperience/>
            </section>

            <section id="skills" className="snap-none">
                <Skills/>
            </section>

            <section id="projects" className="snap-none">
                <Projects/>
            </section>

            <section id="contact" className="snap-none">
                <ContactMe/>
            </section>
        </div>
    )
}

export default Home

// In case of Sanity backend:
//
// export const getStaticProps: GetStaticProps<Props> = async () => {
//     const pageInfo: PageInfo = await fetchPageInfo();
//     const experiences: Experience[] = await fetchExperiences();
//     const skills: Skill[] = await fetchSkills();
//     const projects: Project[] = await fetchProjects();
//     const socials: Social[] = await fetchSocials();
//
//     return {
//         props: {
//             pageInfo,
//             experiences,
//             skills,
//             projects,
//             socials
//         },
//
//         // Next.js will attempt to re-generate the page:
//         // - When the request comes in
//         // - At most once every 10 seconds
//         revalidate: 10,
//     }
// }


