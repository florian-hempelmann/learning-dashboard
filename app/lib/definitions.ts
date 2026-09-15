//This File contains type definitions

/*
* abbreviations explained:
*   catId references id from devCategory
*   lsubId references id from learnsubject
*   lgId references id from learngoal
*   fwId references id from framework
*   pId references id from project
*   lId references id from language
* */

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export type Certificate = {
    id: string;
    userId: string;
    label: string;
    date: string;
}

export type Project = {
    id: string;
    userId: string;
    label: string;
    description: string;
    startDate: string;
    endDate: string;
}

export type DevCategory = {
    id: bigint;
    label: string;
}

export type Framework = {
    id: bigint;
    catId: bigint;
    label: string;
}

export type Language = {
    id: bigint;
    catId: bigint;
    label: string;
}

export type Learnsubject = {
    id: bigint;
    label: string;
}

export type Learngoals = {
    id: string;
    userId: string;
    lsubId: bigint;
    label: string;
    status: string;
}

export type Learnsession = {
    id: string;
    userId: string;
    lgId: string;
    startTime: string;
    endTime: string;
}

/* Junction Objects */

export type FrameworkProject = {
    fwId: bigint;
    pId: string;
}

export type LanguageProject = {
    lId: bigint;
    pId: string;
}

export type LearngoalLanguage = {
    lgId: string;
    lId: bigint;
}

export type LearngoalFramework = {
    lgId: string;
    fId: bigint;
}