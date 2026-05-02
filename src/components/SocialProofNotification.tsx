import { useEffect, useState } from "react";
import { Check } from "lucide-react";

const names = [
  "Maria Silva",
  "João Santos",
  "Ana Costa",
  "Pedro Oliveira",
  "Camila Lima",
  "Lucas Ferreira",
  "Juliana Souza",
  "Rafael Alves",
  "Carla Mendes",
  "Bruno Rocha"
];

const SocialProofNotification = () => {
  const [visible, setVisible] = useState(false);
  const [currentName, setCurrentName] = useState(names[0]);

  useEffect(() => {
    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      setCurrentName(randomName);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 4000);
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showNotification, 3000);

    // Then show every 8 seconds
    const interval = setInterval(showNotification, 8000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="bg-[#25D366] text-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3 min-w-[280px]">
        <div className="bg-white/20 rounded-full p-1.5">
          <Check className="h-5 w-5" />
        </div>
        <div>
          <p className="font-semibold text-sm">{currentName} acabou de comprar</p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofNotification;
