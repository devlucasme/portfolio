import type { FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import MinhaImagem from "@/assets/minha-imagem.png";
import { displayText } from "@/utils/displayText";

export const Hero: FC = () => {
  const textAnimated = displayText();

  return (
    <main className="relative flex flex-col items-center justify-center h-screen px-4 text-center">
      <div className="max-w-2xl">
        <div className="flex justify-center mb-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-primary via-emerald-400 to-primary rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            <div className="relative w-35 h-35 min-[410px]:w-40 min-[410px]:h-40 md:w-50 md:h-50 lg:w-55 lg:h-55 rounded-full bg-linear-to-br from-primary to-emerald-400 p-1.5">
              <div className="w-full h-full rounded-full bg-card overflow-hidden flex items-center justify-center">
                <img src={MinhaImagem} alt="minha imagem" />
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-2xl text-emerald-400 md:text-3xl lg:text-5xl font-bold font-[Inter] tracking-tight mb-4">
          Lucas Gabriel
        </h1>
        <div className="min-h-8 md:h-16 flex items-center justify-center my-3">
          <p className="text-xl md:text-2xl lg:text-3xl font-[Inter] text-gray-400">
            {textAnimated}
            <span className="text-emerald-400 animate-blink">|</span>
          </p>
        </div>
        <p className="max-w-lg mx-auto text-gray-400 text-center text-balance leading-relaxed text-sm min-[410px]:text-base md:text-xl">
          Formado em Técnico em Informática pelo IFPE – Campus Garanhuns, desenvolvo aplicações web
          modernas utilizando React.js no frontend e Fastify no backend, com foco em soluções
          eficientes, organizadas e centradas na experiência do usuário. Atualmente, também venho
          expandindo meus conhecimentos em arquitetura de software e visão de produto.
        </p>
        ;
        <div className="flex justify-center gap-4 min-[410px]:mt-6">
          <a
            href="https://www.linkedin.com/in/lucas-gabriel-da-silva-8b4088314/"
            target="_blank"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 text-gray-400 transition-all duration-300 hover:bg-emerald-400/10 hover:text-emerald-400 hover:scale-110 hover:border-emerald-400"
            rel="noopener"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="https://github.com/devlucasme/"
            target="_blank"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 text-gray-400 transition-all duration-300 hover:bg-emerald-400/10 hover:text-emerald-400 hover:scale-110 hover:border-emerald-400"
            rel="noopener"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
      <IoIosArrowDown className="mt-16 absolute bottom-10 text-gray-400 text-2xl md:text-3xl animate-bounce mx-auto block" />
    </main>
  );
};
