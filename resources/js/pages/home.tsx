import { Head } from '@inertiajs/react';
import ContactForm from '@/components/portfolio/contact-form';
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

interface WelcomeProps {
    projects: Project[];
}

export default function Home({ projects }: WelcomeProps) {
    return (
        <>
            <Head title="Home" />

            <div className="min-h-screen bg-background text-foreground">

                {/* Navigation */}
                <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
                    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                        <span className="text-lg font-bold tracking-tight">Araga Collective</span>
                        <div className="flex items-center gap-8">
                            <a href="#projects" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                Projects
                            </a>
                            <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                Contact
                            </a>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="flex min-h-screen items-center justify-center px-6 pt-16">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                            Araga Collective
                        </h1>
                        <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
                            We craft digital experiences through branding, creative direction,
                            and modern web development.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a
                                href="#projects"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background shadow-xs transition-colors hover:opacity-90"
                            >
                                View Our Work
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-background px-6 text-sm font-medium text-foreground shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="px-6 py-24">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-12">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Selected Work</h2>
                            <p className="text-lg text-muted-foreground">
                                A curated selection of our recent projects across branding, design, and development.
                            </p>
                        </div>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="border-t border-border px-6 py-24">
                    <div className="mx-auto max-w-xl">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Start a Conversation</h2>
                            <p className="text-lg text-muted-foreground">
                                Have a project in mind? We'd love to hear about it.
                            </p>
                        </div>
                        <ContactForm />
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
