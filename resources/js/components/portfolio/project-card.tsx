import { ExternalLink } from 'lucide-react';
import ProjectTags from './project-tags';

interface Tag {
    id: number;
    name: string;
    slug: string;
}

interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    thumbnail_path: string;
    url: string | null;
    tags: Tag[];
}

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <a href={`/projects/${project.slug}`} className="group block overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg">
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={project.thumbnail_path}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.url && (
                    <span
                        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
                    >
                        <ExternalLink className="h-4 w-4" />
                    </span>
                )}
            </div>
            <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <ProjectTags tags={project.tags} />
            </div>
        </a>
    );
}
