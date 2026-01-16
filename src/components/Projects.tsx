import type { FC } from "react";
import VitalizeImage from "@/assets/tela-inicial.png";
import SpeedGuideImage from "@/assets/speedguide-imagem.png";
import { ProjectCard } from "./ProjectCard";

const projects = [
    {
        title: "Vitalize",
        description: "Sistema web voltado para nutrição e educação física, desenvolvido como projeto de conclusão de curso.",
        technologies: ["Typescript", "React", "Styled Components", "Node.js", "Express", "PostgreSQL", "Prisma", "Docker", "OpenAI", "Engenharia de Prompt"],
        imageUrl: VitalizeImage,
        githubUrl: "https://github.com/devlucasme/vitalize-PPO-2025",
        liveUrl: "#"
    },
    {
        title: "SpeedGuide",
        description: "SpeedGuide é um simulador de planos de internet que calcula recomendações com base no uso do usuário e permite integração via WhatsApp.",
        technologies: ["Typescript", "React", "Tailwindcss", "Shadcn Ui"],
        imageUrl: SpeedGuideImage,
        githubUrl: "https://github.com/devlucasme/speedguide",
        liveUrl: "https://speedguide.vercel.app"
    }
];

export const Projects: FC = () => {
    return (
        <section id="projects" className="py-16 md:py-20 bg-[hsl(240_10%_10%)]">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-gray-500 font-semibold text-2xl md:text-3xl mb-4 text-center">Projetos</h2>
                <p className="text-gray-400 text-center mb-10 font-[Inter] text-sm">{'<'} <span className="text-emerald-400 tracking-wide">Trabalhos recentes</span> {'/>'}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}