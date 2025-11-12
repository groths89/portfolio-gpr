"use client";

import { Skills } from '@/lib/wordpress';
import { getAllSkills, getSkillsById } from '@/lib/wordpress';

interface SkillsListProps {
    initialSkills: Skills[];
}

export default function SkillsList({ initialSkills }: SkillsListProps) {
    if (!initialSkills) {
        return <p className="text-center text-gray-500">No skills data available.</p>;
    }

    return (
        <div className="flex flex-wrap gap-3 mb-8">
            {initialSkills.map((skill) =>(
                <div key={skill.id} className="font-mono text-sm uppercase tracking-wide px-3 py-1 border border-primary text-primary bg-primary/10 rounded-sm">
                    {skill.title.rendered}
                </div>
            ))}
        </div>
    );
}