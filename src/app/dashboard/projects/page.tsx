import type { Metadata } from 'next';
import {getProjectsByUserId} from "@/src/db/data";
import {headers} from "next/headers";
import { auth } from "@/src/lib/auth";
import {ProjectCard} from "@/src/app/components/dashboard/cards/project-card";
import {CreateButtonTransparent} from "@/src/app/components/dashboard/buttons/create-button-transparent";

export const metadata : Metadata = {
    title: 'My Projects',
    description: 'A list of planned or ongoing projects.',
}

export default async function projects() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const projects = await getProjectsByUserId(session!.user.id);


    return (
        <>
        <div className="mb-5">
             <CreateButtonTransparent content="New Project"/>
        </div>
        <div className="flex gap-2">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                />)
            )}
        </div>
        </>
    )
}