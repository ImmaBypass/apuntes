import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const DocumentoBiologia: React.FC = () => {
  const navigate = useNavigate();

  const [showOrganelle, setShowOrganelle] = useState<string | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* HEADER (no animado) */}
      <div className="relative bg-[#dabd3e] border-b-4 border-dashed border-black overflow-hidden h-[7rem]">
        <div className="px-8 pt-8 relative h-full">
          <h1 className="text-5xl font-bold text-black absolute top-6 scale-110 origin-left">
            BIOLOGIA
          </h1>
          <div className="absolute bottom-1 left-0 right-0 h-[0.8rem] bg-white border-y-[4px] border-black" />
        </div>
      </div>

      {/* ADVERTENCIA */}
      <div className="bg-yellow-200 text-yellow-900 text-center py-2 text-sm font-semibold border-b border-yellow-400">
        ⚠️ Es posible que esta página esté inacabada o falte información.
      </div>

      {/* CONTENIDO */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="flex-1 px-12 py-10"
      >
        <div className="max-w-5xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-6">Biologia — Apunts</h2>

          {/* 1. La cèl·lula */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-3">1. La cèl·lula: unitat de vida</h3>
            <p className="mb-4">
              Tipus de cèl·lules i parts principals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Tipus (resum)</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Eucariota:</strong> nucli delimitat i orgànuls.</li>
                  <li><strong>Procariota:</strong> sense nucli definit.</li>
                  <li><strong>Animal:</strong> sense paret cel·lular ni cloroplasts.</li>
                  <li><strong>Vegetal:</strong> amb paret i cloroplasts (fotosíntesi).</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Parts principals</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Membrana plasmàtica:</strong> regula entrada/sortida.</li>
                  <li><strong>Citoplasma:</strong> medi intern amb orgànuls.</li>
                  <li><strong>Nucli:</strong> material genètic (ADN).</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. Organuls interactiu */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-3">2. Orgànuls (clic per veure)</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { key: "mitocondri", title: "Mitocondris", text: "Generen energia (ATP)." },
                { key: "retipll", title: "Reticle endoplasmàtic llis", text: "Sintetitza lípids." },
                { key: "retiprr", title: "Reticle endoplasmàtic rugós", text: "Sintetitza proteïnes (ribosomes)." },
                { key: "golgi", title: "Aparell de Golgi", text: "Modifica i empaqueta proteïnes." },
                { key: "lisosoma", title: "Lisosomes", text: "Digestió intracel·lular amb enzims." },
                { key: "vacuo", title: "Vacúols", text: "Emmagatzematge de substàncies." },
              ].map((o) => (
                <motion.button
                  key={o.key}
                  onClick={() => setShowOrganelle((s) => (s === o.key ? null : o.key))}
                  className="bg-gray-100 border border-gray-300 rounded-xl p-4 text-left hover:shadow-md transition-shadow"
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <strong>{o.title}</strong>
                    <span className="text-sm text-gray-600">{showOrganelle === o.key ? "▲" : "▼"}</span>
                  </div>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={showOrganelle === o.key ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-3 overflow-hidden text-sm text-gray-700"
                  >
                    {o.text}
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </section>

          {/* 3. Biomolècules: reveal cards */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">3. Biomolècules — Mostra/Amaga</h3>
            <div className="flex gap-4 flex-wrap">
              {[
                { id: "glucids", title: "Glúcids", desc: "Font d'energia ràpida. → Glucosa" },
                { id: "lipids", title: "Lípids", desc: "Reserva energètica i part de les membranes." },
                { id: "prote", title: "Proteïnes", desc: "Funcions estructurals i enzimàtiques." },
                { id: "acn", title: "Àcids nucleics", desc: "ADN i ARN, informació genètica." },
              ].map((c) => (
                <motion.div
                  key={c.id}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white border rounded-xl p-4 w-64"
                >
                  <h4 className="font-bold">{c.title}</h4>
                  <p className="text-sm text-gray-700 mt-2">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 4. Mini-quiz interactiu (sin external links) */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-3">Quiz ràpid</h3>
            <p className="mb-3">Quina organel sintetitza proteïnes?</p>

            <div className="flex flex-col sm:flex-row gap-3">
              {["Mitocondris", "Reticle endoplasmàtic rugós", "Lisosomes"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setQuizAnswer(opt)}
                  className={`px-4 py-2 rounded-full border ${quizAnswer === opt ? "bg-[#dabd3e] border-black" : "bg-white border-gray-300"} transition`}
                >
                  {opt}
                </button>
              ))}
              <button
                onClick={() => setQuizSubmitted(true)}
                className="ml-auto px-4 py-2 rounded-full bg-black text-white font-bold"
              >
                Comprova
              </button>
            </div>

            {quizSubmitted && (
              <div className="mt-4">
                {quizAnswer === "Reticle endoplasmàtic rugós" ? (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-700 font-semibold">
                    Correcte! El RER (reticle endoplasmàtic rugós) és el lloc on hi ha ribosomes i es sintetitzen proteïnes.
                  </motion.p>
                ) : (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-700 font-semibold">
                    No és correcte. Torna-ho a intentar.
                  </motion.p>
                )}
              </div>
            )}
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

export default DocumentoBiologia;
