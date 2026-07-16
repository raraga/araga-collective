import { Head } from '@inertiajs/react';
import { useState } from 'react';
import ProjectTags from '@/components/portfolio/project-tags';

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
    pictures: string[];
    url: string | null;
    tags: Tag[];
}

interface ProjectProps {
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

export default function Project({ project }: ProjectProps) {
    const [imgError, setImgError] = useState(false);
    return (
        <>
            <Head title={project.title} />

            <div className="min-h-screen bg-background text-foreground">

                {/* Navigation */}
                <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
                    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                        <a href="/" className="text-lg font-bold tracking-tight">Araga Collective</a>
                        <div className="flex items-center gap-8">
                            <a href="/projects" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                Projects
                            </a>
                            <a href="/#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                Contact
                            </a>
                        </div>
                    </div>
                </nav>

                {/* Project Header */}
                <section className="px-6 pt-32 pb-12">
                    <div className="mx-auto max-w-4xl">
                        <a href="/projects" className="mb-6 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground">
                            &larr; All Projects
                        </a>
                        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">{project.title}</h1>
                        <div className="mb-6 flex flex-wrap items-center gap-4">
                            <ProjectTags tags={project.tags} />
                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted-foreground underline decoration-muted-foreground/30 transition-colors hover:text-foreground hover:decoration-foreground/30"
                                >
                                    Visit Site &rarr;
                                </a>
                            )}
                        </div>
                    </div>
                </section>

                {/* Thumbnail */}
                <section className="px-6 pb-12">
                    <div className="mx-auto w-1/4 max-w-4xl">
                        <div className="overflow-hidden rounded-xl border border-border">
                            {!imgError && project.thumbnail ? (
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="h-auto w-full object-cover"
                                    onError={() => setImgError(true)}
                                />
                            ) : (
                                <ThumbnailPlaceholder />
                            )}
                        </div>
                    </div>
                </section>

                {/* Description */}
                <section className="px-6 pb-16">
                    <div className="mx-auto max-w-4xl">
                        <p className="whitespace-pre-wrap text-lg leading-relaxed text-muted-foreground">{project.description}</p>
                    </div>
                </section>

                {/* Additional Pictures */}
                {project.pictures && project.pictures.length > 0 && (
                    <section className="px-6 pb-24">
                        <div className="mx-auto max-w-4xl">
                            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">Gallery</h2>
                            <div className="grid gap-6 sm:grid-cols-2">
                                {project.pictures.map((picture, index) => (
                                    <div key={index} className="overflow-hidden rounded-xl border border-border">
                                        <img
                                            src={picture}
                                            alt={`${project.title} - Picture ${index + 1}`}
                                            className="h-auto w-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Footer */}
                <footer className="border-t border-border px-6 py-8">
                    <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Araga Collective. All rights reserved.
                    </div>
                </footer>
            </div>
        </>
    );
}
