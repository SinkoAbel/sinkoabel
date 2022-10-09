import {ISkill} from "./skillConfig";

interface IProject {
    id: number;
    projectName: string;
    projectImage: string;
    projectTechnology: ISkill[];
    projectDescription: string;
    linkToBuild: string;
}

const projectConfig: IProject[] = [
    {
        id: 1,
        projectName: 'Kinect Game',
        projectImage: "Images/ProjectImages/StandActivityGame.png",
        projectTechnology: [
            {
                id: 1,
                title: 'React',
                progress: 60,
                image: 'Images/SkillsIcons/reactIcon.png'
            },
            {
                id: 2,
                title: 'JavaScript',
                progress: 80,
                image: 'Images/SkillsIcons/javascriptIcon.png'
            },
            {
                id: 3,
                title: 'Sass',
                progress: 80,
                image: 'Images/SkillsIcons/sassIcon.png'
            }
        ],
        projectDescription: "React based frontend game connected to Kinect. I've got the opportunity to create this project's scratch card game. Making this game compatible with Microsoft's Kinect was challenging but in the end we succeeded and Kinect Studio was a big help in it.",
        linkToBuild: "https://www.youtube.com/watch?v=uUJAUQ3be1w"
    },
    {
        id: 2,
        projectName: "Jacsomedia",
        projectImage: "Images/ProjectImages/jacsomedia.png",
        projectTechnology: [
            {
                id: 1,
                title: 'WordPress',
                progress: 50,
                image: 'Images/SkillsIcons/wordpressIcon.png'
            },
            {
                id: 2,
                title: 'cPanel',
                progress: 75,
                image: 'Images/SkillsIcons/cPanelIcon.png'
            },
            {
                id: 3,
                title: 'PHP',
                progress: 90,
                image: 'Images/SkillsIcons/phpIcon.png'
            }
        ],
        projectDescription: "I've taken part in Jacsomedia Digital Agency's homepage. This is a heavily customized WordPress site using Elementor and a lot of plugins.",
        linkToBuild: "https://jacsomedia.hu/en/"
    },
    {
        id: 3,
        projectName: "More Projects",
        projectImage: "Images/ProjectImages/jacsoCaseStudies.png",
        projectTechnology: [
            {
                id: 1,
                title: 'React',
                progress: 60,
                image: 'Images/SkillsIcons/reactIcon.png'
            },
            {
                id: 2,
                title: 'Laravel',
                progress: 80,
                image: 'Images/SkillsIcons/LaravelIcon.png'
            },
            {
                id: 3,
                title: 'WordPress',
                progress: 50,
                image: 'Images/SkillsIcons/wordpressIcon.png'
            },
            {
                id: 4,
                title: 'Sass',
                progress: 80,
                image: 'Images/SkillsIcons/sassIcon.png'
            },
            {
                id: 5,
                title: 'PHP',
                progress: 90,
                image: 'Images/SkillsIcons/phpIcon.png'
            },
            {
                id: 6,
                title: 'Tailwind CSS',
                progress: 85,
                image: 'Images/SkillsIcons/tailwindIcon.png'
            }
        ],
        projectDescription: "To see more project and case studies please see Jacsomedia Digital Agency's Dribble account. There are variety of projects I contributed and used a dozens of modern web technologies.",
        linkToBuild: "https://dribbble.com/jacsomedia"
    },
    {
        id: 4,
        projectName: "Green King Gardening",
        projectImage: "Images/ProjectImages/zoldkiraly.png",
        projectTechnology: [
            {
                id: 1,
                title: 'Laravel',
                progress: 80,
                image: 'Images/SkillsIcons/LaravelIcon.png'
            },
            {
                id: 2,
                title: 'HTML',
                progress: 90,
                image: 'Images/SkillsIcons/htmlIcon.png'
            },
            {
                id: 3,
                title: 'CSS',
                progress: 90,
                image: 'Images/SkillsIcons/cssIcon.png'
            },
            {
                id: 4,
                title: 'Bootstrap',
                progress: 90,
                image: 'Images/SkillsIcons/bootstrapIcon.png'
            },
            {
                id: 5,
                title: 'cPanel',
                progress: 75,
                image: 'Images/SkillsIcons/cPanelIcon.png'
            }
        ],
        projectDescription: "Green King is a small but a very clever site created for a gardening company. The development happened in an MVC architectural pattern. For this case we use Laravel.",
        linkToBuild: "https://www.zoldkiraly.hu/"
    },
    {
        id: 5,
        projectName: "NFC Game",
        projectImage: "Images/ProjectImages/nfcGame.png",
        projectTechnology: [
            {
                id: 1,
                title: 'React',
                progress: 60,
                image: 'Images/SkillsIcons/reactIcon.png'
            },
            {
                id: 2,
                title: 'JavaScript',
                progress: 80,
                image: 'Images/SkillsIcons/javascriptIcon.png'
            },
            {
                id: 3,
                title: 'Tailwind CSS',
                progress: 85,
                image: 'Images/SkillsIcons/tailwindIcon.png'
            }
        ],
        projectDescription: "An interesting little frontend NFC game made with React and powered by Arduino's NFC module. This is the ideal exhibition game. As for me I was responsible for quiz game part of this project.",
        linkToBuild: "https://www.youtube.com/watch?v=Kihi89aZTuM"
    },
    {
        id: 6,
        projectName: "Amtest",
        projectImage: "Images/ProjectImages/Amtest1.png",
        projectTechnology: [
            {
                id: 1,
                title: 'Sass',
                progress: 80,
                image: 'Images/SkillsIcons/sassIcon.png'
            },
            {
                id: 2,
                title: 'MySQL',
                progress: 90,
                image: 'Images/SkillsIcons/mysqlIcon.png'
            },
            {
                id: 3,
                title: 'PHP',
                progress: 90,
                image: 'Images/SkillsIcons/phpIcon.png'
            },
            {
                id: 4,
                title: 'cPanel',
                progress: 75,
                image: 'Images/SkillsIcons/cPanelIcon.png'
            },
            {
                id: 5,
                title: 'Drupal',
                progress: 80,
                image: 'Images/SkillsIcons/drupalIcon.png'
            }
        ],
        projectDescription: "It was an interesting Drupal 8 project, where I had to dive deep into the templating language of Drupal. In addition I've got the opportunity to learn the basics of Google Tag Manager and Google Analytics. The site was made for a company specified for test chambers and measuring devices.",
        linkToBuild: "https://amtest.hu/"
    }
];

export default projectConfig;