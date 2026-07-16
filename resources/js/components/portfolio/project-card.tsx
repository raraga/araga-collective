import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
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
    thumbnail: string;
    url: string | null;
    tags: Tag[];
}

interface ProjectCardProps {
    project: Project;
}

function ThumbnailPlaceholder() {
    return (
        <div className="flex h-full w-full items-center justify-center bg-muted">
            <svg className="h-12 w-12 text-muted-foreground/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className="ml-2 text-sm text-muted-foreground/50">No thumbnail available</span>
        </div>
    );
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [imgError, setImgError] = useState(false);

    return (
        <a href={`/projects/${project.slug}`} className="group block overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg">
            <div className="relative aspect-[4/3] overflow-hidden">
                {!imgError && project.thumbnail ? (
                    <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <ThumbnailPlaceholder />
                )}
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
