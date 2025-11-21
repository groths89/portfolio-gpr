"use client";

import { cn } from '@/lib/utils';
import { Button } from './button';
import HeaderLink from '../HeaderLink.astro';

const ProjectCard = ({project, isClassified = false}) => {
    const cardBorder = isClassified 
        ? "border-2 border-destructive shadow-lg shadow-destructive/20" 
        : "border-2 border-border/80 border-dashed hover:shadow-lg hover:shadow-primary/30";

    const buttonVariant = isClassified ? "destructive" : "default";
    const buttonText = isClassified ? "ACCESS CLASSIFIED FILE 🔒" : "VIEW CASE STUDY";
    const linkHref = isClassified ? "/case-file" : `/projects/${project.slug}`;
    
    return (
        <div className={cn(
            "p-6 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px]",
            "bg-card text-foreground", // Use your HSL card variables
            cardBorder 
        )}>
            {/* 1. HEADER & TITLE */}
            <h3 className="text-xl font-heading uppercase mb-2">
                {project.title}
                {isClassified && <span className="ml-2 text-destructive font-mono text-sm">/ TOP SECRET</span>}
            </h3>
            
            {/* 2. IMAGE (Placeholder) */}
            <div className="w-full h-32 bg-secondary/50 rounded-md mb-4 flex items-center justify-center">
                {/* Replace with Image component */}
                <span className="text-secondary-foreground font-mono text-xs">Project Screenshot</span>
            </div>

            {/* 3. SUMMARY */}
            <p className="text-sm text-secondary-foreground mb-4 font-body">
                {project.summary}
            </p>

            {/* 4. METADATA / TECH TAGS */}
            <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech: any) => (
                    <span key={tech} className="font-mono text-xs px-2 py-0.5 border border-primary text-primary bg-primary/10 rounded-sm">
                        {tech}
                    </span>
                ))}
            </div>

            {/* 5. ACTION */}
            <Button asChild size="default" variant={buttonVariant} className="w-full font-mono uppercase tracking-wider">
                <HeaderLink href={linkHref}>
                    {buttonText}
                </HeaderLink>
            </Button>
        </div>
    );
};

export default ProjectCard;
