import {ISkill} from "./skillConfig";

interface IExperience {
    id: number;
    jobTitle: string;
    companyImage: string;
    companyName: string;
    dateStarted: string;
    dateEnded: string;
    technologies: ISkill[];
    points: IPoints[];
}

interface IPoints {
    id: number,
    point: string,
}

const experienceConfig: IExperience[] = [
    {
        id: 1,
        jobTitle: 'Back-End Developer',
        companyImage: 'Images/WorkplaceImages/AdaptiveMediaIcon.png',
        companyName: 'Adaptive Media Sales House',
        dateStarted: '2024-01-08',
        dateEnded: '',
        technologies: [
            {
                id: 1,
                title: 'Laravel',
                progress: 80,
                image: 'Images/SkillsIcons/LaravelIcon.png'
            },
            {
                id: 2,
                title: 'PHP',
                progress: 90,
                image: 'Images/SkillsIcons/phpIcon.png'
            },
            {
                id: 3,
                title: 'Jira',
                progress: 80,
                image: 'Images/SkillsIcons/jiraIcon.png'
            },
            {
                id: 4,
                title: 'Confluence',
                progress: 80,
                image: 'Images/SkillsIcons/confluenceIcon.png'
            },
            {
                id: 5,
                title: 'GitHub',
                progress: 80,
                image: 'Images/SkillsIcons/gitHubIcon.png'
            },
            {
                id: 6,
                title: 'VSCode',
                progress: 80,
                image: 'Images/SkillsIcons/vsCodeIcon.png'
            }
        ],
        points: [

        ]
    },
    {
        id: 2,
        jobTitle: 'Front-End Developer',
        companyImage: 'Images/WorkplaceImages/DXCIcon.png',
        companyName: 'DXC Technology',
        dateStarted: '2022-12-01',
        dateEnded: '2024-01-05',
        technologies: [
            {
                id: 1,
                title: 'Laravel',
                progress: 80,
                image: 'Images/SkillsIcons/LaravelIcon.png'
            },
            {
                id: 2,
                title: 'PHP',
                progress: 90,
                image: 'Images/SkillsIcons/phpIcon.png'
            },
            {
                id: 3,
                title: 'Angular',
                progress: 30,
                image: 'Images/SkillsIcons/angularIcon.png'
            },
            {
                id: 4,
                title: 'React',
                progress: 60,
                image: 'Images/SkillsIcons/reactIcon.png'
            },
            {
                id: 5,
                title: 'JavaScript',
                progress: 80,
                image: 'Images/SkillsIcons/javascriptIcon.png'
            },
            {
                id: 6,
                title: 'TypeScript',
                progress: 70,
                image: 'Images/SkillsIcons/typescriptIcon.png'
            },
            {
                id: 7,
                title: 'HTML',
                progress: 90,
                image: 'Images/SkillsIcons/htmlIcon.png'
            },
            {
                id: 8,
                title: 'CSS',
                progress: 90,
                image: 'Images/SkillsIcons/cssIcon.png'
            },
            {
                id: 9,
                title: 'Jenkins',
                progress: 40,
                image: 'Images/SkillsIcons/jenkinsIcon.png'
            },
            {
                id: 10,
                title: 'GitLab',
                progress: 80,
                image: 'Images/SkillsIcons/gitlabIcon.png'
            },
            {
                id: 11,
                title: 'Robot Framework',
                progress: 20,
                image: 'Images/SkillsIcons/robotIcon.png'
            },
            {
                id: 12,
                title: 'JetBrains',
                progress: 98,
                image: 'Images/SkillsIcons/jetbrainsIcon.png'
            },
            {
                id: 13,
                title: 'Jira',
                progress: 80,
                image: 'Images/SkillsIcons/jiraIcon.png'
            },
            {
                id: 14,
                title: 'Confluence',
                progress: 80,
                image: 'Images/SkillsIcons/confluenceIcon.png'
            }
        ],
        points: [
            {
                id: 1,
                point: "Creating new pages as well as maintaining existing ones for Vodafone Kabel Deutschland."
            },
            {
                id: 2,
                point: "Working in an multinational environment, using Jira and Confluence for issue tracking and documenting."
            },
            {
                id: 3,
                point: "Crating pages based on Figma and Adobe XD designs."
            },
            {
                id: 4,
                point: "Using Jenkins, GitHub Actions, GitLab to deploy our integration branches to various test environments and for version control."
            },
            {
              id: 5,
              point: "Creating automated tests with Robot Framework."
            },
            {
                id: 6,
                point: "Cooperating between scrum teams and working according to SAFe methodology."
            },
            {
                id: 7,
                point: "Participating in daily meetings with the business side."
            },
            {
                id: 8,
                point: "Using React, Redux, Redux-Saga and Angular on the front end. For some validations we are using Zend/Laminas PHP framework."
            },
            {
                id: 9,
                point: "TypeScript & JavaScript (ES6), Webpack, Sass, Ubuntu."
            },
            {
                id: 10,
                point: "Understanding and using REST API methods."
            }
        ]
    },
    {
        id: 3,
        jobTitle: 'Full Stack Developer',
        companyImage: 'Images/WorkplaceImages/JacsomediaIcon.png',
        companyName: 'Jacsomedia Digital Agency',
        dateStarted: '2022-02-01',
        dateEnded: '2022-10-31',
        technologies: [
            {
                id: 1,
                title: 'Laravel',
                progress: 80,
                image: 'Images/SkillsIcons/LaravelIcon.png'
            },
            {
                id: 2,
                title: 'PHP',
                progress: 90,
                image: 'Images/SkillsIcons/phpIcon.png'
            },
            {
                id: 3,
                title: 'React',
                progress: 60,
                image: 'Images/SkillsIcons/reactIcon.png'
            },
            {
                id: 4,
                title: 'JavaScript',
                progress: 80,
                image: 'Images/SkillsIcons/javascriptIcon.png'
            },
            {
                id: 5,
                title: 'TypeScript',
                progress: 70,
                image: 'Images/SkillsIcons/typescriptIcon.png'
            },
            {
                id: 6,
                title: 'HTML',
                progress: 90,
                image: 'Images/SkillsIcons/htmlIcon.png'
            },
            {
                id: 7,
                title: 'Sass',
                progress: 80,
                image: 'Images/SkillsIcons/sassIcon.png'
            },
            {
                id: 8,
                title: 'CSS',
                progress: 90,
                image: 'Images/SkillsIcons/cssIcon.png'
            },
            {
                id: 9,
                title: 'Tailwind CSS',
                progress: 85,
                image: 'Images/SkillsIcons/tailwindIcon.png'
            },
            {
                id: 10,
                title: 'WordPress',
                progress: 50,
                image: 'Images/SkillsIcons/wordpressIcon.png'
            },
            {
                id: 11,
                title: 'Drupal',
                progress: 80,
                image: 'Images/SkillsIcons/drupalIcon.png'
            },
            {
                id: 12,
                title: 'cPanel',
                progress: 75,
                image: 'Images/SkillsIcons/cPanelIcon.png'
            },
            {
                id: 13,
                title: 'Firebase',
                progress: 30,
                image: 'Images/SkillsIcons/FirebaseIcon.png'
            },
            {
                id: 14,
                title: 'GitLab',
                progress: 80,
                image: 'Images/SkillsIcons/gitlabIcon.png'
            },
            {
                id: 15,
                title: 'MySQL',
                progress: 90,
                image: 'Images/SkillsIcons/mysqlIcon.png'
            },
            {
                id: 16,
                title: 'JetBrains',
                progress: 98,
                image: 'Images/SkillsIcons/jetbrainsIcon.png'
            }
        ],
        points: [
            {
                id: 1,
                point: "Creating responsive websites, pages, portals and applications mostly for medical organizations like Bayer AG, but also for national organizations like Hungarian National Opera or Semmelweis Medical Services."
            },
            {
                id: 2,
                point: "Working with CMS such as Drupal, WordPress, plus custom styles."
            },
            {
                id: 3,
                point: "Working on both the client side and the server side of a webpage."
            },
            {
                id: 4,
                point: "Using web hosng control panels, like cPanel."
            },
            {
                id: 5,
                point: "Content management, and using systems like Salesforce (ExactTarget) or Veeva."
            },
            {
                id: 6,
                point: "Database management and optimization: MySQL, Oracle SQL, PL/SQL."
            },
            {
                id: 7,
                point: "Understanding agile methods (e.g. kanban, scrum)."
            },
            {
                id: 8,
                point: "Using ClickUp as a project management tool."
            },
            {
                id: 9,
                point: "Active GIT knowledge."
            },
            {
                id: 10,
                point: "Using CI/CD tools: GitLab, Jenkins."
            },
            {
                id: 11,
                point: "PHP (framework: Laravel, Yii2)."
            },
            {
                id: 12,
                point: "HTML5/CSS3/SASS, JavaScript(ES6/jQuery/Ajax)"
            },
            {
                id: 13,
                point: "Bootstrap, Tailwind CSS"
            },
            {
                id: 14,
                point: "JavaScript frameworks: React, Angular"
            },
            {
                id: 15,
                point: "TypeScript"
            },
            {
                id: 16,
                point: "REST API, CRUD"
            },
            {
                id: 17,
                point: "Using Android Studio: building android apps from web apps (Ionic) + building .exe files (Electron)."
            }
        ]
    },
]

export default experienceConfig;