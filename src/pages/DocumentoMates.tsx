import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const DocumentoMates: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* HEADER (fijo, sin animar) */}
      <div className="relative bg-[#dabd3e] border-b-4 border-dashed border-black overflow-hidden h-[7rem]">
        <div className="px-8 pt-8 relative h-full">
          <h1 className="text-5xl font-bold text-black absolute top-6 scale-110 origin-left">
            MATEMÀTIQUES
          </h1>
          <div className="absolute bottom-1 left-0 right-0 h-[0.8rem] bg-white border-y-[4px] border-black" />
        </div>
      </div>

      {/* ADVERTENCIA */}
      <div className="bg-yellow-200 text-yellow-900 text-center py-2 text-sm font-semibold border-b border-yellow-400">
        ⚠️ Es posible que esta página esté inacabada o falte información.
      </div>

      {/* CONTENIDO ANIMADO */}
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -25 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-1 justify-start px-16 py-10"
      >
        <div className="max-w-3xl text-left flex-1 pr-12">
          <h2 className="text-3xl font-bold mb-4">MATEMÀTIQUES - POTÈNCIES I ARRELS</h2>

          <p className="mb-4">
            Una <strong>potència</strong> és una multiplicació repetida del mateix número.  
            <em>Exemple:</em> 2⁴ = 2 × 2 × 2 × 2 = 16.
          </p>

          <p className="mb-6">
            Una <strong>arrel</strong> és l’operació inversa d’una potència.  
            <em>Exemple:</em> √16 = 4.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-10 bg-[#dabd3e] px-6 py-2 rounded-full font-bold text-black shadow-md hover:scale-105 transition-transform"
          >
            Volver a Apuntes
          </button>
        </div>

        {/* ESPACIO IMAGEN */}
        <div className="w-1/3 flex justify-center items-start">
          {/* Aquí podrás añadir imágenes */}
        </div>
      </motion.div>
    </div>
  );
};

export default DocumentoMates;
