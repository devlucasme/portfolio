import type { FC } from "react";

export const Navigation: FC = () => {
    return (
        <header className="fixed top-0 right-0 left-0 z-50 border-b border-b-gray-700 transition-all backdrop-blur-lg">
            <nav className="flex justify-between mx-auto max-w-7xl px-6 py-3">
                <a href="#" className="text-emerald-400 font-semibold font-[Inter] text-lg">&lt;dev /&gt;</a>
                <ul className="flex gap-5">
                    <li><a href="#technologies" className="text-gray-400 text-sm hover:text-gray-200 transition-colors">Tecnologias</a></li>
                    <li><a href="#projects" className="text-gray-400 text-sm hover:text-gray-200 transition-colors">Projetos</a></li>
                    <li><a href="#contact" className="text-gray-400 text-sm hover:text-gray-200 transition-colors">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}