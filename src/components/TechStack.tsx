import type { FC } from "react";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiPrisma,
    SiPostgresql,
    SiDocker,
    SiStyledcomponents,
    SiTailwindcss,
    SiGithub,
    SiGit,
    SiShadcnui
} from 'react-icons/si';

const technologies = [
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: SiCss3, color: '#1572B6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
    { name: 'Prisma', icon: SiPrisma, color: '#46546d' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Styled Components', icon: SiStyledcomponents, color: '#DB7093' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Shadcn Ui', icon: SiShadcnui, color: '#FFFFFF' }
];

export const TechStack: FC = () => {
    return (
        <section id="technologies" className="py-16 md:py-20 bg-[hsl(240,7%,14%)]">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-gray-500 font-semibold text-2xl md:text-3xl mb-2 text-center">Tecnologias</h2>
                <p className="text-gray-400 text-center mb-10 font-[Inter] text-sm">
                {'<'} <span className="text-emerald-400 tracking-wide">Stack de desenvolvimento</span> {'/>'}
                </p>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                    {technologies.map((tech, index) => {
                        const IconComponent = tech.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col h-24 md:w-36 items-center gap-2 p-4 rounded-lg bg-gray-400/20 border border-gray-400/20 transition-all duration-300 hover:border-emerald-400 hover:translate-y-1"
                            >
                                <IconComponent
                                    className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110"
                                    style={{ color: tech.color }}
                                />
                                <span className="text-gray-400 text-xs font-[Inter] text-center group-hover:text-gray-200 transition-colors">{tech.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}