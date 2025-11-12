"use client";

import { Button } from '@/components/ui/button';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import { projects } from '@/data/projects';

import ProjectCard from '@/components/ui/project-card';
import SkillsList from '@/components/ui/skills-list';

import { ArrowRight, Badge, Download, FolderOpen, Shield } from 'lucide-react';
import { getAllSkills, getSkillsById } from '@/lib/wordpress';

interface ClientHomePageProps {
    
}


const ClientHomePage = (technologies: any) => {
    const router = useRouter();

    const handleAccess = () => {
        console.log("Accessing secured archives...");
        router.push('/projects'); 
    };

  return (
        <main className="flex min-h-screen w-full flex-col items-center justify-center p-4">
            {/* Hero Section */}
            <section className="relative py-12 md:py-20 px-4">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
                
                <div className="container mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                    <p className="text-sm md:text-base text-muted-foreground mb-4 font-mono">
                        (//)SOFTWARE DEVELOPER AND IT SPECIALIST
                    </p>
                    
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none">
                        <span className="text-accent">GREGORY</span>
                        <br />
                        <span className="text-foreground">PAUL</span>
                        <br />
                        <span className="text-foreground">ROTHSTEIN</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-muted-foreground mb-9 max-w-xl">
                        Building resilient architecture and solving complex digital cases.
                    </p>
                    
                    <div className="flex gap-4 flex-wrap mb-8">
                        <Button
                        size="lg"
                        onClick={() => handleAccess()}
                        className="bg-accent hover:bg-accent/80 text-accent-foreground font-semibold"
                        >
                        <FolderOpen className="mr-2 h-5 w-5" />
                        VIEW CASE FILES
                        </Button>
                        
                        <Button
                        size="lg"
                        variant="outline"
                        onClick={() => handleAccess()}
                        className="border-foreground/30 hover:bg-foreground/10 font-semibold"
                        >
                        <Download className="mr-2 h-5 w-5" />
                        DOWNLOAD RESUME
                        </Button>
                    </div>
                    </div>

                    {/* Right Content - Profile Image Placeholder */}
                    <div className="flex justify-center md:justify-end">
                    <div className="relative">
                        <ImageWrapper 
                            src="/images/grothstein_cyber-removebg-preview.png" 
                            alt="Digitized Cyberpunk-style Portrait"
                            className={cn("not-prose my-0 object-[0%_25%]")}
                        />
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* --- 2. Technical Expertise Section --- */}
            <section className="py-20 w-full max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-10 tracking-wider">
                    OPERATIONAL TOOLSET // PRIMARY TECHNOLOGIES
                </h2>
                
                <SkillsList initialSkills={technologies} />
                
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

const ImageWrapper = ({ src='', alt='', className='' }) => (
    <div className={cn(
        "relative w-72 h-96 md:w-96 md:h-[32rem] flex-shrink-0 overflow-hidden",
        className
    )}>
        <div className={cn(
            "absolute inset-0 w-72 h-auto md:w-96 md:h-auto bottom-0 overflow-hidden",
            "bg-cover bg-[50%_50%] z-10"
        )} 
        style={{ 
            backgroundPosition: '50% 35%',
        }}>
            <div 
                className={cn(
                    "absolute inset-0 w-72 h-72 bottom-0 bg-cover bg-no-repeat border-2 border-primary/50 neon-border",
                    "contrast-[1.25] opacity-70 top-16",
                    "bg-cover bg-[50%_50%] z-10"
                )}
                style={{ 
                    backgroundImage: `url(${src})`,
                    backgroundPosition: '50% 35%',
                }}
            />
        </div>
        <div 
            className={cn(
                "absolute bg-cover bg-no-repeat inset-0 h-16",
                "left-[50%] -translate-x-1/2",
                "contrast-[1.25] opacity-70 z-20",
            )}
            style={{ 
                backgroundImage: `url(${src})`,
                backgroundPosition: '101% 9%',
                backgroundSize: '150%'
            }}
        />
    </div>
);

export default ClientHomePage;