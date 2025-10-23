import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const DocumentoFisicaQuimica: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center py-8 px-6">
      {/* Header */}
      <div className="relative bg-[#dabd3e] border-b-4 border-dashed border-black overflow-hidden w-full max-w-5xl h-[7rem] rounded-t-3xl">
        <div className="px-8 pt-8 relative h-full">
          <h1 className="text-4xl font-bold text-black drop-shadow-[3px_3px_2px_rgba(0,0,0,0.4)] absolute top-6">
            FÍSICA I QUÍMICA
          </h1>
          <button
            onClick={() => navigate("/")}
            className="absolute bottom-3 right-6 text-black text-sm bg-white rounded-full px-4 py-1 border-2 border-black shadow-md hover:scale-105 transition-transform"
          >
            ← Tornar
          </button>
        </div>
      </div>

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white border-4 border-gray-400 rounded-3xl shadow-lg mt-10 p-8 w-full max-w-5xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Apunts de FÍSICA I QUÍMICA
        </h2>

        <p className="mb-4">
          En aquest tema treballarem la taula periòdica i els elements més
          comuns. Recorda que els elements d’un mateix grup comparteixen
          propietats similars.
        </p>

        <h3 className="text-xl font-semibold mb-3">Grup dels metalls alcalins</h3>
        <p className="mb-4">
          Són elements molt reactius que pertanyen al grup 1 de la taula
          periòdica. Tots tenen un electró a la seva capa externa.
        </p>

        <p className="mb-4">
          Memòria ràpida per a la columna:&nbsp;
          <strong>{"H, Li, Na, K, Rb, Cs, Fr"}</strong>.
          <br />
          Frase mnemotècnica:&nbsp;
          <strong>“Hay limones naranjas y kiwis robados en casa de Francisco”</strong>.
        </p>

        <h3 className="text-xl font-semibold mb-3">Propietats generals</h3>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Són metalls tous i bons conductors de l’electricitat.</li>
          <li>Reaccionen amb l’aigua per formar hidròxids i hidrogen gas.</li>
          <li>Es troben en compostos, no de forma lliure a la natura.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Reacció exemple</h3>
        <p className="mb-6">
          Quan el <strong>Na</strong> (sodi) reacciona amb aigua:
        </p>
        <p className="font-mono bg-gray-100 border rounded p-3 text-center mb-8">
          2 Na (s) + 2 H₂O (l) → 2 NaOH (aq) + H₂ (g)
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="bg-[#dabd3e] text-black font-bold px-8 py-3 rounded-full border-2 border-black hover:scale-105 active:scale-95 transition-transform shadow-md"
          >
            Tornar a Apunts
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default DocumentoFisicaQuimica;
