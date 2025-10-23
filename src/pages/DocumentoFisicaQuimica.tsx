import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/**
 * DocumentoFisicaQuimica - Mini Apunts per memoritzar la primera columna.
 * - Estil groc al header i franja blanca com abans.
 * - Contingut concentrat en símbols i frase mnemotècnica.
 */

const elementos = [
  { sym: "H", name: "Hidrogen" },
  { sym: "Li", name: "Liti" },
  { sym: "Na", name: "Sodi" },
  { sym: "K", name: "Potasio" },
  { sym: "Rb", name: "Rubidi" },
  { sym: "Cs", name: "Cesi" },
  { sym: "Fr", name: "Francio" },
];

const DocumentoFisicaQuimica: React.FC = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);
  const mnemonic = "Hay limones naranjas y kiwis robados en casa de Francisco";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header (igual que abans) */}
      <div className="relative bg-[#dabd3e] border-b-4 border-dashed border-black overflow-hidden h-[7rem]">
        <div className="px-8 pt-8 relative h-full">
          <h1 className="text-5xl font-bold text-black absolute top-6 scale-110 origin-left flex items-center gap-3">
            FÍSICA I QUÍMICA
            <span className="bg-[#f3c84a] text-black text-sm font-semibold px-3 py-1 rounded-full border border-black">
              Mini Apunts
            </span>
          </h1>
          <div className="absolute bottom-1 left-0 right-0 h-[0.8rem] bg-white border-y-[4px] border-black" />
        </div>
      </div>

      {/* Main */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-1 px-10 py-10"
      >
        <div className="max-w-4xl mx-auto bg-white border rounded-3xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Primera columna — Símbols a memoritzar</h2>

          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded mb-6">
            <p className="mb-2"><strong>Frase mnemotècnica:</strong></p>
            <p className="italic text-gray-800">{mnemonic}</p>
            <p className="text-sm text-gray-600 mt-2">Associacions ràpides: Limones → Li, Naranjas → Na, Kiwis → K, etc.</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-7 gap-3 mb-6">
            {elementos.map((el) => (
              <button
                key={el.sym}
                onClick={() => setSelected((s) => (s === el.sym ? null : el.sym))}
                className={`flex flex-col items-center justify-center p-3 rounded-lg border ${selected === el.sym ? "bg-[#dabd3e] border-black" : "bg-white border-gray-200"}`}
              >
                <div className="text-2xl font-bold">{el.sym}</div>
                <div className="text-xs text-gray-700 mt-1">{el.name}</div>
              </button>
            ))}
          </div>

          {selected && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 border rounded bg-gray-50 mb-6">
              <h3 className="font-bold text-lg mb-2">{selected} — {elementos.find(e => e.sym === selected)?.name}</h3>
              <p className="text-sm text-gray-700">
                Petit recordatori: només cal memoritzar el símbol i el nom per a aquest tema.
                No cal aprofundir en propietats complexes; l'important és l'ordre i la correspondència símbol→nom.
              </p>
            </motion.div>
          )}

          <div className="mb-6">
            <h4 className="font-semibold mb-2">Mini activitat: endevina</h4>
            <p className="text-sm text-gray-600 mb-3">Fes clic a un símbol i intenta dir el nom en veu alta; comprova després amb la targeta.</p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => navigate("/")}
              className="bg-[#dabd3e] px-6 py-2 rounded-full font-bold text-black shadow-md hover:scale-105 transition-transform"
            >
              Tornar a Apuntes
            </button>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default DocumentoFisicaQuimica;
