import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const InfoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white border border-gray-400 rounded-3xl p-10 shadow-md max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-black">INFORMACIÓN</h1>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Esta página se encuentra en <strong>versión alfa (v0.2)</strong>.
          Está en desarrollo y se actualizará progresivamente con nuevas
          funcionalidades y mejoras visuales.
        </p>
        <p className="text-gray-700">
          Si tienes sugerencias o necesitas soporte técnico, por favor escribe a:{" "}
          <a
            href="mailto:immaculadavedruna@gmail.com"
            className="text-blue-600 underline"
          >
            immaculadavedruna@gmail.com
          </a>
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-8 bg-[#dabd3e] px-6 py-3 rounded-full font-bold text-black hover:scale-105 active:scale-95 transition-transform"
        >
          Volver a Apuntes
        </button>
      </div>
    </motion.div>
  );
};

export default InfoPage;
