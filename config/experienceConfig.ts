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
    {
        id: 2,
        jobTitle: 'Production Planner',
        companyImage: 'Images/WorkplaceImages/NittoIcon.jpg',
        companyName: 'Nissho Hungary Ltd.',
        dateStarted: '2021-10-25',
        dateEnded: '2021-12-05',
        technologies: [
            {
                id: 1,
                title: 'Excel',
                progress: 98,
                image: 'Images/SkillsIcons/excelIcon.png'
            },
            {
                id: 2,
                title: 'SAP',
                progress: 76,
                image: 'Images/SkillsIcons/sapIcon.png'
            }
        ],
        points: [
            {
                id: 1,
                point: "Creating long and short term production and capacity plans in order to make the company's production smooth and continuous."
            },
            {
                id: 2,
                point: "As an automotive company I have experience in technologies like Just-In-Time manufacturing, Lean."
            },
            {
                id: 3,
                point: "Active communication with production, procurement, sales and the CEO to be up to date with our production and needs."
            },
            {
                id: 4,
                point: "Active use of the ERP system to create ATP check, maintain production data. Also creating production orders."
            }
        ]
    },
    {
        id: 3,
        jobTitle: 'Project Engineer',
        companyImage: 'Images/WorkplaceImages/EnbiIcon.jpg',
        companyName: 'Hungary Enbi Ltd.',
        dateStarted: '2018-11-05',
        dateEnded: '2021-10-20',
        technologies: [
            {
                id: 1,
                title: 'Excel',
                progress: 98,
                image: 'Images/SkillsIcons/excelIcon.png'
            },
            {
                id: 2,
                title: 'SAP',
                progress: 76,
                image: 'Images/SkillsIcons/sapIcon.png'
            },
            {
                id: 3,
                title: 'Glovia G2',
                progress: 96,
                image: 'Images/SkillsIcons/gloviaIcon.png'
            }
        ],
        points: [
            {
                id: 1,
                point: "Programming CNC machines"
            },
            {
                id: 2,
                point: "Taking part in new product introduction (NPI) and coordinating the product's life from the workbench through production right until the customer."
            },
            {
                id: 3,
                point: "Taking part in international transfer project where the company's german partner provided us multiple machines and products"
            },
            {
                id: 4,
                point: "Maintaining product data in ERP system, such as BOM, Routing details or creating a new product."
            },
            {
                id: 5,
                point: "Creating cost calculations (RFQ) for new products or recalculating the older ones, closely co-operating with Key Account Managers sometimes with CEOs."
            }
        ]
    }
]

export default experienceConfig;