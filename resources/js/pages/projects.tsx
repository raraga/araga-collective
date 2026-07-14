import { Head } from '@inertiajs/react';
import ProjectCard from '@/components/portfolio/project-card';

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

interface ProjectsProps {
    projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
    return (
        <>
            <Head title="Projects" />

            <div className="min-h-screen bg-background text-foreground">

                {/* Navigation */}
                <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
                    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                        <a href="/" className="text-lg font-bold tracking-tight">Araga Collective</a>
                        <div className="flex items-center gap-8">
                            <a href="/projects" className="text-sm font-medium text-foreground">
                                Projects
                            </a>
                            <a href="/#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                Contact
                            </a>
                        </div>
                    </div>
                </nav>

                {/* Projects Section */}
                <section className="px-6 pt-32 pb-24">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-12">
                            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground">All Projects</h1>
                            <p className="text-lg text-muted-foreground">
                                A complete collection of our work across branding, design, and development.
                            </p>
                        </div>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </section>

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
