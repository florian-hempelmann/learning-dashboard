import {db} from "@/src/db/drizzle";

export async function getProjectsByUserId(userId:string){
    return db.query.project.findMany({
        where: {
            userId: userId,
        },
        with: {
            languages: true,
            frameworks: true,
        },
    });
}
export type ProjectWithRelations =
    Awaited<ReturnType<typeof getProjectsByUserId>>[number];

export async function getLanguagesByUserId(userId:string){

}

export async function getFrameworksByUserId(userId:string){

}

export async function getLanguagesByProject(projectId:string){

}

export async function getFrameworksByProject(projectId:string){
    return
}