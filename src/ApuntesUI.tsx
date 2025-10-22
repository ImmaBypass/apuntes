import React, { useEffect, useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------------- Contenido editable ---------------------- */
const subjectsContent: Record<
  string,
  { title: string; description: string; route: string }
> = {
  MATEMATIQUES: {
    title: "APUNTS MATEMATIQUES",
    description:
      "Apunts per al pròxim examen de Potències i Arrels, Exercicis pàg. 34-40 i recursos educatius",
    route: "/documento/mates",
  },
  SOCIALS: {
    title: "APUNTS SOCIALS",
    description: "Temari d'Economia de Socials.",
    route: "/documento/socials",
  },
};

/* ---------------------- Tarjeta de materia ---------------------- */
interface SubjectCardProps {
  title: string;
  subtitle: string;
  onOpen: (key: string) => void;
  subjectKey: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  title,
  subtitle,
  onOpen,
  subjectKey,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="border-2 border-dashed border-gray-400 rounded-lg p-4 bg-gray-100 w-60 flex flex-col justify-between"
  >
    <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
    <p className="text-center text-gray-700 mb-3">{subtitle}</p>
    <button
      onClick={() => onOpen(subjectKey)}
      className="mx-auto flex items-center justify-center bg-gray-300 rounded-full py-2 px-6 transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
      type="button"
    >
      <MoreHorizontal className="text-gray-600" size={24} />
    </button>
  </motion.div>
);

/* ---------------------- Componente principal ---------------------- */
const ApuntesUI: React.FC = () => {
  const navigate = useNavigate();
  const subjects = [
    { title: "MATEMATIQUES", subtitle: "Potències i Arrels", key: "MATEMATIQUES" },
    { title: "SOCIALS", subtitle: "Economia", key: "SOCIALS" },
  ];

  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [panelVisible, setPanelVisible] = useState(false);

  /* Efecto de aparición del panel derecho */
  useEffect(() => {
    if (selectedKey) {
      setPanelVisible(false);
      const t = setTimeout(() => setPanelVisible(true), 40);
      return () => clearTimeout(t);
    } else {
      setPanelVisible(false);
    }
  }, [selectedKey]);

  const openSubject = (key: string) => {
    if (selectedKey === key) {
      setSelectedKey(null);
    } else {
      setSelectedKey(key);
    }
  };

  const selectedContent = selectedKey ? subjectsContent[selectedKey] : null;

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
      {/* Header */}
      <div className="relative bg-[#dabd3e] border-b-4 border-dashed border-black overflow-hidden h-[7rem]">
        <div className="px-8 pt-8 relative h-full">
          <h1 className="text-5xl font-bold text-black drop-shadow-[3px_3px_2px_rgba(0,0,0,0.4)] absolute top-6 scale-110 origin-left">
            APUNTES
          </h1>

          {/* alpha y signo de interrogación clicable */}
          <div className="absolute bottom-[1.4rem] right-4 text-black text-sm font-medium flex items-center gap-2">
            alpha0.2 
            <button
              onClick={() => navigate("/informacion")}
              className="text-black hover:scale-110 transition-transform"
              title="Información"
            >
              ?
            </button>
          </div>

          {/* barra blanca decorativa */}
          <div className="absolute bottom-1 left-0 right-0 h-[0.8rem] bg-white border-y-[4px] border-black" />
        </div>
      </div>

      {/* Tabs */}
      <div className="px-8 mt-8 flex flex-wrap gap-4">
        <button className="px-8 py-3 bg-gray-300 rounded-full text-gray-700 font-semibold relative">
          Apuntes
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-[#dabd3e]" />
        </button>

        <button
          onClick={() => navigate("/404")}
          className="px-8 py-3 bg-gray-300 rounded-full text-gray-700 font-semibold hover:bg-gray-400 transition-colors"
        >
          Calendario
        </button>
      </div>

      {/* Main */}
      <div className="px-8 mt-8 mb-12 flex flex-col lg:flex-row gap-6 flex-1 items-start justify-center">
        {/* Izquierda */}
        <div className="flex-1 border-4 border-gray-400 rounded-3xl p-8 bg-gray-200 min-h-[24rem] max-h-[28rem]">
          <div className="flex gap-6 flex-wrap justify-start">
            {subjects.map((subject) => (
              <SubjectCard
                key={subject.key}
                title={subject.title}
                subtitle={subject.subtitle}
                onOpen={openSubject}
                subjectKey={subject.key}
              />
            ))}
          </div>
        </div>

        {/* Derecha */}
        <div className="w-full lg:w-96 border-4 border-gray-400 rounded-3xl p-8 bg-gray-200 min-h-[24rem] max-h-[28rem] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            {selectedContent ? (
              <motion.div
                key={selectedKey}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-gray-100 rounded-xl w-full h-auto p-6 border border-gray-400 shadow-sm flex flex-col items-center"
              >
                <h2 className="text-xl font-bold text-center mb-4">
                  {selectedContent.title}
                </h2>
                <p className="text-center text-gray-700 mb-6">
                  {selectedContent.description}
                </p>
                <button
                  onClick={() => navigate(selectedContent.route)}
                  className="mt-auto bg-[#dabd3e] px-8 py-3 rounded-full font-bold text-black shadow-md transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
                >
                  Entrar
                </button>
              </motion.div>
            ) : (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-gray-400 text-center"
              >
                Elige un documento
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ApuntesUI;
