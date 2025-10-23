import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/**
 * DocumentoFrances - Unit 3: gramàtica i vocabulari
 * Flashcards senzilles i fiables: no usarem 3D flip (feia problemes en alguns navegadors),
 * sinó targetes que canvien de costat amb animacions i text clar.
 */

const vocabList = [
  { fr: "le pain", es: "pa" },
  { fr: "le fromage", es: "formatge" },
  { fr: "le poulet", es: "pollastre" },
  { fr: "la soupe", es: "sopa" },
  { fr: "les légumes", es: "verdures" },
  { fr: "le dessert", es: "postre" },
  { fr: "le menu", es: "menú" },
];

const DocumentoFrances: React.FC = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const next = () => {
    setShowTranslation(false);
    setIndex((i) => (i + 1) % vocabList.length);
  };
  const prev = () => {
    setShowTranslation(false);
    setIndex((i) => (i - 1 + vocabList.length) % vocabList.length);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="relative bg-[#dabd3e] border-b-4 border-dashed border-black overflow-hidden h-[7rem]">
        <div className="px-8 pt-8 relative h-full">
          <h1 className="text-5xl font-bold text-black absolute top-6 scale-110 origin-left">
            FRANCÈS
          </h1>
          <div className="absolute bottom-1 left-0 right-0 h-[0.8rem] bg-white border-y-[4px] border-black" />
        </div>
      </div>

      {/* Warning */}
      <div className="bg-yellow-200 text-yellow-900 text-center py-2 text-sm font-semibold border-b border-yellow-400">
        ⚠️ Es possible que aquesta pàgina estigui inacabada o falti informació.
      </div>

      <motion.main
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-1 px-10 py-10"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">Apuntes — Francès (Unit 3)</h2>

          {/* Gramàtica resumida */}
          <section className="bg-gray-50 p-4 rounded border">
            <h3 className="font-semibold text-xl mb-2">Grammaire — verbs i partitifs</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Conjugació: <em>MANGER</em> (présent)</h4>
                <pre className="bg-white p-3 rounded mt-2 text-sm">
{`je mange
tu manges
il/elle mange
nous mangeons
vous mangez
ils/elles mangent`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold">Articles partitifs i quantitat</h4>
                <p className="mt-2"><strong>du / de la / de l' / des</strong> — s'usen per parlar d'una part d'un tot (ex: du pain).</p>
                <p className="mt-2"><strong>Expressions de quantitat:</strong> <em>trop de, assez de, un peu de, pas assez de</em>.</p>
              </div>
            </div>
          </section>

          {/* Vocabulari: flashcard senzilles */}
          <section className="p-4 rounded border bg-white">
            <h3 className="font-semibold text-xl mb-3">Vocabulaire — flashcards</h3>

            <div className="flex items-center gap-4">
              <button onClick={prev} className="px-3 py-2 rounded-full border bg-white">◀</button>

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="w-80 h-36 flex flex-col items-center justify-center border rounded-xl shadow"
              >
                <div className="text-2xl font-bold">{vocabList[index].fr}</div>
                {showTranslation ? (
                  <div className="text-sm text-gray-700 mt-2">{vocabList[index].es}</div>
                ) : (
                  <div className="text-sm text-gray-400 mt-2">(fes clic per veure la traducció)</div>
                )}
              </motion.div>

              <button onClick={next} className="px-3 py-2 rounded-full border bg-white">▶</button>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <button
                onClick={() => setShowTranslation((s) => !s)}
                className="px-4 py-2 rounded-full bg-[#dabd3e] text-black font-semibold"
              >
                {showTranslation ? "Amagar traducció" : "Mostrar traducció"}
              </button>

              <p className="text-sm text-gray-500">Fes servir les fletxes per repassar vocabulari.</p>
            </div>
          </section>

          {/* Resum i consells */}
          <section className="bg-gray-50 p-4 rounded border">
            <h3 className="font-semibold text-xl mb-2">Resum i consells d'estudi</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Repasa les conjugacions en veu activa i practica frases senzilles.</li>
              <li>Aprèn articles partitifs amb exemples reals (du pain, de la soupe, des légumes).</li>
              <li>Memoritza un llistat de 15-20 paraules de vocabulari relacionades amb aliments i plats.</li>
            </ul>
          </section>

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

export default DocumentoFrances;
