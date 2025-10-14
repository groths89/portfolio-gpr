"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import { projects } from '@/data/projects';

import ProjectCard from '@/components/ui/project-card';

const HomePage = () => {
  return (
        <main className="flex min-h-screen w-full flex-col items-center justify-center p-4">
            <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex flex-col items-start text-left max-w-xl">
                    <p className="font-sans text-lg text-secondary-foreground mb-2 tracking-widest uppercase">
                        // Software Developer and IT Specialist
                    </p>
                    <h1 className="text-6xl md:text-8xl font-heading font-bold text-foreground mb-6 leading-tight">
                        <span className="text-accent">G</span>REGORY<br/>PAUL ROTHSTEIN
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-foreground mb-10 tracking-wide">
                        Building resilient architecture and solving complex digital cases.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild size="lg" className="font-mono uppercase tracking-wider bg-accent hover:bg-accent/80 text-primary-foreground">
                            <Link href="/projects">
                                VIEW CASE FILES 🔎
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="lg" className="font-mono uppercase tracking-wider border border-secondary-foreground text-secondary-foreground hover:bg-secondary/20">
                            <Link href="/resume.pdf" target="_blank">
                                DOWNLOAD RESUME 📄
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0 mt-10 md:mt-0">
                    <Image
                        src="/images/gregory-rothstein-portrait.png"
                        alt="High Contrast Professional Portrait"
                        layout="fill"
                        objectFit="cover"
                        className={cn(
                            "rounded-lg",
                            "grayscale contrast-125 opacity-80 border-4 border-accent shadow-2xl shadow-accent/20" 
                        )}
                    />
                    <div className="absolute inset-0 bg-background/50 rounded-lg"></div> {/* Subtle dark overlay */}
                </div>

            </div>

            {/* --- 2. Technical Expertise Section --- */}
            <section className="py-20 w-full max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-10 tracking-wider">
                    OPERATIONAL TOOLSET // PRIMARY TECHNOLOGIES
                </h2>
                
                <div className="flex flex-wrap gap-3 mb-8">
                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS', 'Kubernetes', 'Python', 'Tailwind CSS'].map(skill => (
                        <div key={skill} className="font-mono text-sm uppercase tracking-wide px-3 py-1 border border-primary text-primary bg-primary/10 rounded-sm">
                            {skill}
                        </div>
                    ))}
                </div>
                
                <Link href="/about#skills" className="font-mono text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    VIEW ALL SKILLS <i className="fas fa-arrow-right"></i>
                </Link>
            </section>

            {/* --- 3. Featured Projects Section --- */}
            <section className="py-20 w-full max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-10 tracking-wider">
                    FEATURED PROJECTS // TOP PRIORITY FILES
                </h2>
                
                {/* Project Grid (Use your ProjectCard component here) */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* Project Card 1 (Normal) */}
                    <ProjectCard project={projects[0]} /> 
                    
                    {/* Project Card 2 (The Classified File - Use the red accent for border/title) */}
                    <ProjectCard project={projects[1]} isClassified={true} /> 
                    
                    {/* Project Card 3 (Normal) */}
                    <ProjectCard project={projects[2]} /> 
                </div>

                <div className="text-center">
                    <Button asChild size="lg" className="font-mono uppercase tracking-wider bg-accent hover:bg-accent/80 text-primary-foreground">
                        <Link href="/projects">
                            BROWSE ALL CASE FILES (7) <i className="fas fa-folder-open"></i>
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Final Call to Action for Resume Download (Optional, if not in the Hero) */}
        </main>
  );
}

export default HomePage;