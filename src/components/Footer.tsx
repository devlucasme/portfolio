import type { FC } from "react";

export const Footer: FC = () => {
    return (
        <footer className="bg-[hsl(240,7%,14%)] py-6 text-center border-t border-gray-700">
            <p className="text-gray-400 font-[Inter] text-xs md:text-sm">&copy; {new Date().getFullYear()} Lucas Gabriel. Todos os direitos reservados.</p>
        </footer>
    )
}