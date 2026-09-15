// This File contains test data

/*
* abbreviations explained:
*   fwId references id from framework
*   catId references id from devCategory
*   lId references id from language
*   lsubId references id from learnsubject
*   lgId references id from learngoal
*   fwId references id from framework
*   pId references id from project
* */

const users = [
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: 'User',
        email: 'user@test.com',
        password: '123456',
    },
];

const certificates = [
    {
        id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
        userId: '410544b2-4001-4271-9855-fec4b6a6442a',
        label: 'Next.js App Router Fundamentals',
        date: '2026-09-09',
    },
];

const projects = [
    {
        id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
        userId: '410544b2-4001-4271-9855-fec4b6a6442a',
        label: 'Next.js Learning Dashboard',
        description: 'Next.js Learning Dashboard made for my personal github portfolio.',
        startDate: '2026-09-09',
        endDate: null,
    },
];

const devCategories = [
    {
        id: 1,
        label: 'Backend',
    },
    {
        id: 2,
        label: 'Frontend',
    },
    {
        id: 3,
        label: 'Data Layer',
    },
];

const frameworks = [
    {
        id: 1,
        label: 'Spring Boot',
    },
    {
        id: 2,
        label: 'React Native',
    },
    {
        id: 3,
        label: 'Next.js',
    },
];

const languages = [
    {
        id: 1,
        label: 'Java',
    },
    {
        id: 2,
        label: 'SQL',
    },
    {
        id: 3,
        label: 'JavaScript',
    },
    {
        id: 4,
        label: 'PHP',
    },
]

const learnsubjects = [
    {
        id: 1,
        label: 'Fetching Data',
    },
    {
        id: 2,
        label: 'Authentication',
    },
    {
        id: 3,
        label: 'Testing',
    },
    {
        id: 4,
        label: 'UI/UX',
    },
]

const learngoals = [
    {
        id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
        userId: '410544b2-4001-4271-9855-fec4b6a6442a',
        lsubId: 1,
        label: 'Seeding Data',
        status: 'in progress',
    },
    {
        id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
        userId: '410544b2-4001-4271-9855-fec4b6a6442a',
        lsubId: 1,
        label: 'create and update learngoals',
        status: 'planned',
    },
]

const learnsessions = [
    {
        id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
        userId: '410544b2-4001-4271-9855-fec4b6a6442a',
        lgId: '76d65c26-f784-44a2-ac19-586678f7c2f2',
        startTime: '2026-09-15 19:30:00',
        endTime: '2026-09-15 21:10:00',
    },
]

// Junction Tables

const frameworksDevCategories = [
    {
        fwId: 1,
        catId: 1,
    },
    {
        fwId: 2,
        catId: 2,
    },
    {
        fwId: 3,
        catId: 1,
    },
    {
        fwId: 3,
        catId: 2,
    },
]

const languagesDevCategories = [
    {
        lId: 1,
        catId: 1,
    },
    {
        lId: 2,
        catId: 3,
    },
    {
        lId: 3,
        catId: 1,
    },
    {
        lId: 3,
        catId: 2,
    },
    {
        lId: 4,
        catId: 1,
    },
]

const frameworksProjects = [
    {
        fwId: 2,
        pId: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    },
    {
        fwId: 3,
        pId: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    },
]

const languagesProjects = [
    {
        lId: 2,
        pId: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    },
    {
        lId: 3,
        pId: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    },
]

const learngoalsLanguages = [
    {
        lgId: '76d65c26-f784-44a2-ac19-586678f7c2f2',
        lId: 2,
    },
    {
        lgId: '76d65c26-f784-44a2-ac19-586678f7c2f2',
        lId: 3,
    },
]

const learngoalsFrameworks = [
    {
        lgId: '76d65c26-f784-44a2-ac19-586678f7c2f2',
        fwId: 2,
    },
    {
        lgId: '76d65c26-f784-44a2-ac19-586678f7c2f2',
        fwId: 3,
    },
]

export { users , certificates, projects, devCategories , frameworks, languages , learnsubjects, learngoals,
    learnsessions, frameworksDevCategories, languagesDevCategories, frameworksProjects, languagesProjects,
    learngoalsLanguages, learngoalsFrameworks };