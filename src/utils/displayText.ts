import { useTypewriter } from "@/hooks/useTypewriter";

export function displayText() {
    return useTypewriter({
        text: [
            "Desenvolvedor Frontend",
            "Desenvolvedor Backend",
        ],
        typingSpeed: 100,
        deletingSpeed: 50,
        pauseTime: 2000,
    });
};


