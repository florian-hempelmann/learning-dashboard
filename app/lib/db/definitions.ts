//This File contains type definitions

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
    description: string | null;
    startDate: string;
    endDate: string | null;
}

export type DevCategory = {
    id: number;
    label: string;
}

export type Framework = {
    id: number;
    label: string;
}

export type Language = {
    id: number;
    label: string;
}

export type Learnsubject = {
    id: number;
    label: string;
}

export type Learngoals = {
    id: string;
    userId: string;
    lsubId: number;
    label: string;
    status: string;
}

export type Learnsession = {
    id: string;
    userId: string;
    lgId: string;
    startTime: string;
    endTime: string | null;
}

/* Junction Objects */

export type FrameworkDevCategory = {
    fwId: number;
    catId: number;
}

export type LanguageDevCategory = {
    lId: number;
    catId: number;
}

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
    fwId: bigint;
}