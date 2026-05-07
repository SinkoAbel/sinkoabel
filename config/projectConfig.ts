import {ISkill} from "./skillConfig";

interface IProject {
    id: number;
    projectName: string;
    projectImage: string;
    projectTechnology: ISkill[];
    projectDescription: string;
    linkToBuild: string | undefined;
}

const projectConfig: IProject[] = [
    {
        id: 1,
        projectName: 'Wazuh XDR Lab',
        projectImage: "Images/ProjectImages/WazuhProject.png",
        projectTechnology: [],        
        projectDescription: "Built a local security lab to explore Wazuh’s vulnerability scanning, SIEM, and XDR capabilities in a controlled environment. The setup includes a deliberately vulnerable application, making it suitable for detection, monitoring, and incident analysis practice.",
        linkToBuild: undefined
    },
    {
        id: 2,
        projectName: 'Vodafone Deutschland',
        projectImage: "Images/ProjectImages/ZuhauseplusStudy.png",
        projectTechnology: [
            {
                id: 2,
                title: 'React',
                progress: 60,
                image: 'Images/SkillsIcons/reactIcon.png'
            },
            {
                id: 2,
                title: 'Angular',
                progress: 30,
                image: 'Images/SkillsIcons/angularIcon.png'
            },
            {
                id: 3,
                title: 'JavaScript',
                progress: 80,
                image: 'Images/SkillsIcons/javascriptIcon.png'
            },
            {
                id: 4,
                title: 'TypeScript',
                progress: 80,
                image: 'Images/SkillsIcons/typescriptIcon.png'
            },
            {
                id: 5,
                title: 'Jenkins',
                progress: 60,
                image: 'Images/SkillsIcons/jenkinsIcon.png'
            },
            {
                id: 6,
                title: 'Laravel',
                progress: 80,
                image: 'Images/SkillsIcons/LaravelIcon.png'
            },
            {
                id: 7,
                title: 'Robot Framework',
                progress: 20,
                image: 'Images/SkillsIcons/robotIcon.png'
            }
        ],
        projectDescription: "Contributed to the delivery of a large-scale enterprise project for Vodafone Deutschland, working across frontend and legacy backend areas in a complex multinational environment. The project required strong attention to quality, maintainability, and structured cross-team collaboration.",
        linkToBuild: "https://vodafone.de/"
    }
];

export default projectConfig;