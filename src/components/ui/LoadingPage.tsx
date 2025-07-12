import React, { useEffect, useState } from "react";

const greetings = [
    "",
  "Hello!",
  "¡Hola!",
  "Bonjour!",
  "Ciao!",
  "مرحبا!",
  "Salam!",
  "Hallo!",
  "नमस्ते!",
  "こんにちは!",
  "안녕하세요!",
  "Привет!",
  "Olá!",
  "Hej!",
  "Szia!"
];

export const LoadingPage: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background transition-colors">
      <div className="text-5xl md:text-7xl font-bold text-primary animate-fade-in-out select-none">
        {greetings[index]}
      </div>
      <style>{`
        .animate-fade-in-out {
          animation: fadeInOut 0.7s ease-in-out;
        }
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(20px); }
          20% { opacity: 1; transform: translateY(0); }
          80% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;
