import React, { useState } from "react";
import { motion } from "framer-motion";

const elementos = [
  { simbolo: "H", nombre: "Hidrógeno" },
  { simbolo: "Li", nombre: "Litio" },
  { simbolo: "Na", nombre: "Sodio" },
  { simbolo: "K", nombre: "Potasio" },
  { simbolo: "Rb", nombre: "Rubidio" },
  { simbolo: "Cs", nombre: "Cesio" },
  { simbolo: "Fr", nombre: "Francio" },
];

const DocumentoFisicaQuimica: React.FC = () => {
  const [respuesta, setRespuesta] = useState("");
  const [resultado, setResultado] = useState("");
  const [actual, setActual] = useState(() => elementos[Math.floor(Math.random() * elementos.length)]);

  const comprobar = () => {
    if (respuesta.trim().toLowerCase() === actual.nombre.toLowerCase()) {
      setResultado("✅ Correcte!");
    } else {
      setResultado(`❌ Incorrecte. Era ${actual.nombre}.`);
    }
    setTimeout(() => {
      setActual(elementos[Math.floor(Math.random() * elementos.length)]);
      setRespuesta("");
      setResultado("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col items-center py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-lg rounded-3xl border border-gray-300 p-8 max-w-xl text-center"
      >
        <h1 className="text-3xl font-bold text-blue-700 mb-3">Mini Apunts: Física i Química</h1>
        <p className="text-gray-600 mb-6 italic">Primera columna de la Taula Periòdica</p>

        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 text-left mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">🧠 Truc per recordar-los</h2>
          <p className="text-gray-700">
            <strong>Frase:</strong> <em>"Hay Limones Naranjas y Kiwis Robados en Casa de Francisco"</em>
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li><strong>H</strong> → Hidrógeno</li>
            <li><strong>Li</strong> → Litio</li>
            <li><strong>Na</strong> → Sodio</li>
            <li><strong>K</strong> → Potasio</li>
            <li><strong>Rb</strong> → Rubidio</li>
            <li><strong>Cs</strong> → Cesio</li>
            <li><strong>Fr</strong> → Francio</li>
          </ul>
        </div>

        <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 text-left mb-6">
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">⚙️ Curiositat</h2>
          <p className="text-gray-700">
            Tots aquests elements formen part del <strong>grup 1</strong>, conegut com els
            <strong> metalls alcalins</strong>. Reaccionen fàcilment amb l’aigua i augmenten la seva
            reactivitat cap avall (el Franci és el més reactiu!).
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-xl border border-green-200 mb-6">
          <h2 className="text-xl font-semibold text-green-800 mb-3">🧩 Joc ràpid: endevina el nom</h2>
          <p className="text-lg mb-2">Quin element és <strong>{actual.simbolo}</strong>?</p>
          <input
            value={respuesta}
            onChange={(e) => setRespuesta(e.target.value)}
            placeholder="Escriu el nom..."
            className="border border-gray-400 rounded-lg px-3 py-2 w-2/3 text-center mb-2"
          />
          <br />
          <button
            onClick={comprobar}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition"
          >
            Comprovar
          </button>
          {resultado && <p className="mt-3 text-lg font-semibold">{resultado}</p>}
        </div>

        <p className="text-gray-600 italic text-sm">
          💡 Recorda: <strong>Només el símbol</strong> porta majúscula inicial i minúscula si té dues lletres.
        </p>
      </motion.div>
    </div>
  );
};

export default DocumentoFisicaQuimica;
