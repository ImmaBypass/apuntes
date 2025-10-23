import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const DocumentoBiologia: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* HEADER */}
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
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex flex-1 justify-start px-16 py-10 gap-8"
      >
        <div className="max-w-3xl text-left flex-1 pr-12">
          <h2 className="text-3xl font-bold mb-4">1. La cél·lula: unitat de vida</h2>

          <h3 className="text-xl font-semibold mb-2">Tipus de cèl·lules</h3>
          <p className="mb-2"><strong>Cèl·lula eucariota:</strong> Té nucli delimitat per membrana i orgànuls especialitzats. Les cèl·lules humanes són eucariotes.</p>
          <p className="mb-2"><strong>Cèl·lula procariota:</strong> No té nucli ni orgànuls membranosos. L'ADN es troba lliure al citoplasma.</p>
          <p className="mb-2"><strong>Cèl·lula animal:</strong> No té paret cel·lular ni cloroplasts. Forma arrodonida o irregular.</p>
          <p className="mb-4"><strong>Cèl·lula vegetal:</strong> Té paret cel·lular rígida i cloroplasts per fer la fotosíntesi.</p>

          <h3 className="text-xl font-semibold mb-2">Parts principals</h3>
          <p className="mb-2"><strong>Membrana plasmàtica:</strong> Estructura semipermeable que regula l’entrada i sortida de substàncies.</p>
          <p className="mb-2"><strong>Citoplasma:</strong> Medi intern on es troben els orgànuls.</p>
          <p className="mb-2"><strong>Nucli:</strong> Conté el material genètic (ADN) i regula les funcions cel·lulars.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">2. Orgànuls i estructures cel·lulars</h3>
          <p className="mb-2"><strong>Mitocondris:</strong> Generen energia mitjançant la respiració cel·lular.</p>
          <p className="mb-2"><strong>Reticle endoplasmàtic rugós:</strong> Sintetitza proteïnes.</p>
          <p className="mb-2"><strong>Reticle endoplasmàtic llis:</strong> Sintetitza lípids.</p>
          <p className="mb-2"><strong>Aparell de Golgi:</strong> Modifica i empaqueta proteïnes.</p>
          <p className="mb-2"><strong>Lisosomes:</strong> Contenen enzims digestius.</p>
          <p className="mb-2"><strong>Vacúols:</strong> Emmagatzemen substàncies.</p>
          <p className="mb-2"><strong>Cilis i flagels:</strong> Prolongacions que permeten moviment.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">3. Biomolècules</h3>
          <p className="mb-2"><strong>Glúcids:</strong> Font d’energia ràpida. Ex: glucosa.</p>
          <p className="mb-2"><strong>Lípids:</strong> Reserva energètica i components de membranes.</p>
          <p className="mb-2"><strong>Proteïnes:</strong> Funcions estructurals, enzimàtiques i de transport.</p>
          <p className="mb-4"><strong>Àcids nucleics:</strong> ADN i ARN, contenen la informació genètica.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">4. Metabolisme cel·lular</h3>
          <p className="mb-2"><strong>Anabolisme:</strong> Reaccions que construeixen molècules complexes (ex: síntesi proteïnes).</p>
          <p className="mb-2"><strong>Catabolisme:</strong> Reaccions que degraden molècules per obtenir energia (ex: respiració cel·lular).</p>
          <p className="mb-4"><strong>Respiració cel·lular:</strong> Glucosa + O₂ → CO₂ + H₂O + energia (ATP). Es realitza als mitocondris.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">5. Transport a través de la membrana</h3>
          <p className="mb-2"><strong>Difusió:</strong> Moviment de molècules petites segons gradient.</p>
          <p className="mb-2"><strong>Osmosi:</strong> Difusió de l'aigua a través de la membrana.</p>
          <p className="mb-2"><strong>Difusió facilitada:</strong> Amb ajuda de proteïnes transportadores.</p>
          <p className="mb-2"><strong>Transport actiu:</strong> Contra gradient, requereix energia.</p>
          <p className="mb-4"><strong>Endocitosi/Exocitosi:</strong> Entrada/expulsió mitjançant vesícules.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">6. Homeòstasi</h3>
          <p className="mb-4">Capacitat de mantenir condicions internes estables. Ex: regulació de la temperatura mitjançant la suor.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">7. Teixits</h3>
          <p className="mb-2"><strong>Epitelial:</strong> Revestiment i glàndules.</p>
          <p className="mb-2"><strong>Connectiu:</strong> Suport (conjuntiu, adipós, cartilaginós, ossi, sanguini).</p>
          <p className="mb-2"><strong>Muscular:</strong> Estriat (voluntari), llis i cardíac (involuntaris).</p>
          <p className="mb-4"><strong>Nerviós:</strong> Neurones i cèl·lules glials.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">8. Organització biològica</h3>
          <p className="mb-4">Cèl·lules → Teixits → Òrgans → Aparells → Sistemes (ex: epiteli → intestí → aparell digestiu).</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">9. Reproducció cel·lular (mitosi)</h3>
          <p className="mb-2"><strong>Interfase:</strong> Creixement i duplicació d'ADN (G1, S, G2).</p>
          <p className="mb-2"><strong>Profase:</strong> Condensació cromatina, formació fus mitòtic.</p>
          <p className="mb-2"><strong>Metafase:</strong> Alineament cromosomes al pla equatorial.</p>
          <p className="mb-2"><strong>Anafase:</strong> Separació cromàtides germanes.</p>
          <p className="mb-2"><strong>Telofase:</strong> Re-formació membranes nuclears.</p>
          <p className="mb-4"><strong>Citocinesi:</strong> Divisió del citoplasma → 2 cèl·lules filles.</p>

          <button
            onClick={() => navigate("/")}
            className="mt-10 bg-[#dabd3e] px-6 py-2 rounded-full font-bold text-black shadow-md hover:scale-105 transition-transform"
          >
            Volver a Apuntes
          </button>
        </div>

        {/* Right column reserves for images or diagrams */}
        <div className="w-1/3 flex flex-col items-center gap-6">
          {/* If you want to add images, put them in src/assets and import at top */}
          <div className="w-full h-48 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">Diagrama 1</div>
          <div className="w-full h-48 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">Diagrama 2</div>
        </div>
      </motion.div>
    </div>
  );
};

export default DocumentoBiologia;
