import {Card} from "@/src/app/components/dashboard/cards/card";
import { Edit, Trash2, Search, Code, Check} from "@deemlol/next-icons";
import {ProjectWithRelations} from "@/src/db/data";

type ProjectCardProps = {
    project: ProjectWithRelations;
};

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card>
            <div className="flex justify-between bg-surface rounded-t-lg border-surface-foreground p-3">
                <h2>{project.label}</h2>
                <small className="text-muted-foreground">{project.startDate && (<p>{project.startDate}</p>)}</small>
            </div>
            <div className="flex flex-col p-3">
                <div className="pb-5">
                    <h3 className="pb-2 text-center">Description</h3>
                    {project.description && (<p>{project.description}</p>)}
                </div>
                <div className="pb-12">
                    <h3 className="pb-2 text-center">Tech-Stack</h3>
                    <div className="flex gap-2">
                        {project.frameworks.map((framework) => (
                            <div key={framework.id} className="border rounded-2xl px-2">
                            {framework.label}
                            </div>
                        ))}
                        {project.languages.map((language) => (
                            <div key={language.id} className="border rounded-2xl px-2">
                            {language.label}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pb-2 flex justify-between">
                    <div>{project.endDate ?
                        (<p className="flex items-center gap-2 text-success">
                            <Check className="w-5 h-5"/>finished</p>) :
                        (<p className="flex items-center gap-2 text-info">
                            <Code className="w-5 h-5"/>in progress</p>)}
                    </div>
                    <div className="flex gap-2">
                        <Search className="cursor-pointer hover:text-primary-foreground" />
                        <Edit className="cursor-pointer hover:text-primary-foreground" />
                        <Trash2 className="text-danger cursor-pointer hover:text-primary-foreground" />
                    </div>
                </div>
            </div>
        </Card>
    );
}