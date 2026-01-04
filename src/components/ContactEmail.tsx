import type { FC } from "react";
import { useState, useRef } from "react";
import { FaEnvelope } from "react-icons/fa";

export const ContactEmail: FC = () => {

    const [copied, setCopied] = useState(false);
    const emailRef = useRef<HTMLSpanElement>(null);


    const handleCopy = async () => {

        const email = emailRef.current?.textContent;
        if (!email) return;

        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <section id="contact" className="py-16 md:py-20 bg-[hsl(240,7%,14%)] flex flex-col items-center mt-8  w-full ">
            <h3 className="mb-3 text-gray-500 font-bold text-xl md:text-2xl">Me mande um e-mail</h3>
            <span ref={emailRef} className="w-9/12 md:w-1/2 mt-3 bg-gray-400/20 border border-gray-400/20 rounded-xs text-center text-xs md:text-lg text-gray-400 p-2 hover:text-emerald-400 hover:border-emerald-400 transition-all duration-300">gabrieldasilvalucas418@gmail.com</span>
            <button
                onClick={handleCopy}
                className="w-9/12 md:w-1/2 bg-gray-400/20 border border-gray-400/20 flex justify-center rounded-xs text-xs md:text-lg p-2 mt-3 items-center gap-2   text-gray-400 hover:text-emerald-400 hover:border-emerald-400 transition-all duration-300 cursor-pointer"
            >
                <FaEnvelope />
                {
                    copied ? "Copiado!" : "Copiar E-mail"
                }
            </button>
        </section>
    )
}