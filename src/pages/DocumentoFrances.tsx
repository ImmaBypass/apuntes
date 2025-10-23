import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const vocabList = [
  "le pain", "le fromage", "le poulet", "la soupe", "les légumes", "le menu", "le dessert"
];

const DocumentoFrances: React.FC = () => {
  const navigate = useNavigate();
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const next = () => {
    setFlipped(false);
    setCardIndex((i) => (i + 1) % vocabList.length);
  };

  const prev = () => {
    setFlipped(false);
    setCardIndex((i) => (i - 1 + vocabList.length) % vocabList.length);
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

      {/* ADVERTENCIA */}
      <div className="bg-yellow-200 text-yellow-900 text-center py-2 text-sm font-semibold border-b border-yellow-400">
        ⚠️ Es posible que esta página esté inacabada o falte información.
      </div>

      {/* Contenido animado */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45 }}
        className="px-12 py-10 flex-1"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Apuntes — Francès (Unit 3)</h2>

          {/* Gramàtica resumida */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-3">Grammaire — verbs i partitius</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Conjugació (MANGER)</h4>
                <pre className="bg-gray-100 p-4 rounded">{`je mange
tu manges
il/elle mange
nous mangeons
vous mangez
ils/elles mangent`}</pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Partitifs i quantitat</h4>
                <p className="mb-2"><strong>du / de la / de l' / des</strong> — per parlar d'una part d'un tot (ex: du pain, de la farine)</p>
                <p><strong>Quantitat:</strong> "trop de", "assez de", "un peu de", "pas assez de".</p>
              </div>
            </div>
          </section>

          {/* Vocabulari interactiu (tarjetas flip) */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-3">Vocabulaire — flashcards</h3>

            <div className="flex items-center gap-6">
              <button onClick={prev} className="px-3 py-2 rounded-full border bg-white">◀</button>

              <div className="w-96 h-48 perspective">
                <motion.div
                  onClick={() => setFlipped((f) => !f)}
                  animate={{ rotateY: flipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full relative bg-white rounded-xl shadow-lg border border-gray-300 flex items-center justify-center cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* front */}
                  <div style={{ backfaceVisibility: "hidden" }} className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">{vocabList[cardIndex]}</span>
                  </div>

                  {/* back */}
                  <div style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }} className="absolute inset-0 flex items-center justify-center p-4">
                    <div>
                      <div className="text-lg font-semibold">Traducció i exemples</div>
                      <p className="text-sm text-gray-700 mt-2">(Exemple) {vocabList[cardIndex]} — aliment comú.</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <button onClick={next} className="px-3 py-2 rounded-full border bg-white">▶</button>
            </div>

            <p className="text-sm text-gray-500 mt-3">Fes clic a la targeta per donar-li la volta.</p>
          </section>

          {/* Taula resumida per estudiar (orden) */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-3">Resum de continguts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 border rounded">
                <strong>Grammar</strong>
                <ul className="pl-5 list-disc mt-2 text-sm">
                  <li>Conjugacions regulars</li>
                  <li>Articles partitifs</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 border rounded">
                <strong>Vocabulaire</strong>
                <ul className="pl-5 list-disc mt-2 text-sm">
                  <li>Aliments i plats</li>
                  <li>Paraules de menú</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 border rounded">
                <strong>Exam tips</strong>
                <ul className="pl-5 list-disc mt-2 text-sm">
                  <li>Repassa conjugacions regularly</li>
                  <li>Aprèn 15 paraules del vocab</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => navigate("/")}
              className="bg-[#dabd3e] px-6 py-2 rounded-full font-bold text-black shadow-md hover:scale-105 transition-transform"
            >
              Volver a Apuntes
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DocumentoFrances;
