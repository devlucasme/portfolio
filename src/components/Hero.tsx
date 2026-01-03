import type { FC } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export const Hero: FC = () => {

  const displayText = useTypewriter({
    text: [
      "Técnico em Informática",
      "Desenvolvedor Frontend",
      "Desenvolvedor Backend"
    ],
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseTime: 2000
  });

  return (
    <main className="flex items-center justify-center h-screen py-24 pt-32">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <p className="text-gray-400 text-sm font-[Inter] tracking-wide mb-2">Olá, meu nome é</p>

        <h1 className="text-4xl text-emerald-400 md:text-6xl lg:7xl font-bold tracking-tight mb-4">
          Lucas Gabriel
        </h1>

        <div className="min-h-8 md:h-16 flex items-center justify-center my-3">
          <p className="text-xl md:text-2xl lg:text-3xl font-[Inter] text-gray-400">
            {displayText}
            <span className="text-emerald-400 animate-blink">|</span>
          </p>
        </div>

        <p className="max-w-lg mx-auto text-gray-400 leading-relaxed ">
          Apaixonado por tecnologia, formei-me em Técnico em Informática pelo IFPE Campus Garanhuns.
          Gosto de transformar ideias em soluções reais e sigo constantemente aprendendo mais sobre desenvolvimento de software e novas tecnologias.
        </p>



        <div className="flex justify-center gap-4 mt-6">

          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400  text-gray-400 transition-all duration-300 hover:bg-emerald-400/10 hover:text-emerald-400 hover:scale-110 hover:border-emerald-400">
            <FaLinkedin size={20} />
          </a>

          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400  text-gray-400 transition-all duration-300 hover:bg-emerald-400/10 hover:text-emerald-400 hover:scale-110 hover:border-emerald-400">
            <FaGithub size={20} />
          </a>

          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400  text-gray-400 transition-all duration-300 hover:bg-emerald-400/10 hover:text-emerald-400 hover:scale-110 hover:border-emerald-400">
            <CiMail size={24} />
          </a>
        </div>


      </div>
    </main>
  )
}