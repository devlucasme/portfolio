import type { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";

interface IProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;
    githubUrl?: string;
    liveUrl?: string;
}

export const ProjectCard: FC<IProjectCardProps> = ({
    title,
    description,
    technologies,
    imageUrl,
    githubUrl,
    liveUrl
}) => {
    return (
        <div className="bg-[hsl(240_10%_10%)] border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-emerald-400 hover:translate-y-1 hover:shadow-lg ">
            {imageUrl ? (
                <div className="w-full h-60 overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                </div>
            ) : (
                <div className="w-full h-40 bg-[hsl(240_10%_10%)] flex items-center justify-center">
                    <span className="text-emerald-400 font-[Inter] text-sm">{'<preview />'}</span>
                </div>
            )}

            <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-emerald-400 font-semibold text-lg">{title}</h3>
                    <div className="flex gap-2">
                        {githubUrl && (
                            <a href={githubUrl} target="_blank" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"><FaGithub /></a>
                        )}
                        {liveUrl && (
                            <a href={liveUrl} target="_blank" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"><MdLaunch /></a>
                        )}
                    </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>

                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                    <span 
                        key={index}
                        className="px-2 py-1 text-xs font-[Inter] bg-[hsl(240_10%_10%)] text-emerald-400 border rounded"
                        >
                        {tech}
                    </span>
                    ))}
                </div>

            </div>
        </div>
    )
}