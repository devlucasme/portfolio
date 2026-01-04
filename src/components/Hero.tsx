import type { FC } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

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
    <main className="relative flex flex-col items-center justify-center h-screen px-4 text-center">
      <div className="max-w-2xl">
        <p className="text-gray-400 text-sm font-[Inter] tracking-wide mb-2">
          Olá, meu nome é
        </p>

        <h1 className="text-4xl text-emerald-400 md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
          Lucas Gabriel
        </h1>

        <div className="min-h-8 md:h-16 flex items-center justify-center my-3">
          <p className="text-xl md:text-2xl lg:text-3xl font-[Inter] text-gray-400">
            {displayText}
            <span className="text-emerald-400 animate-blink">|</span>
          </p>
        </div>

        <p className="max-w-lg mx-auto text-gray-400 text-center text-balance leading-relaxed">
          Formado em Técnico em Informática pelo IFPE Campus Garanhuns, desenvolvo aplicações frontend com React.js e backend com Express.js, sempre buscando aprender e criar soluções eficientes.
        </p>
        ;
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/lucas-gabriel-da-silva-8b4088314/"
            target="_blank"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 text-gray-400 transition-all duration-300 hover:bg-emerald-400/10 hover:text-emerald-400 hover:scale-110 hover:border-emerald-400"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="https://github.com/devlucasme/"
            target="_blank"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 text-gray-400 transition-all duration-300 hover:bg-emerald-400/10 hover:text-emerald-400 hover:scale-110 hover:border-emerald-400"
          >
            <FaGithub size={20} />
          </a>


        </div>
      </div>

      <IoIosArrowDown className="mt-16 absolute bottom-10 text-gray-400 text-3xl animate-bounce mx-auto block" />
    </main>
  )
}