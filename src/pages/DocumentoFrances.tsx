import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const DocumentoFrances: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* HEADER */}
      <div className="relative bg-[#dabd3e] border-b-4 border-dashed border-black overflow-hidden h-[7rem]">
        <div className="px-8 pt-8 relative h-full">
          <h1 className="text-5xl font-bold text-black absolute top-6 scale-110 origin-left">
            FRANÇÈS
          </h1>
          <div className="absolute bottom-1 left-0 right-0 h-[0.8rem] bg-white border-y-[4px] border-black" />
        </div>
      </div>

      {/* ADVERTENCIA */}
      <div className="bg-yellow-200 text-yellow-900 text-center py-2 text-sm font-semibold border-b border-yellow-400">
        ⚠️ Es posible que esta página esté inacabada o falte información.
      </div>

      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex flex-1 justify-start px-16 py-10 gap-8"
      >
        <div className="max-w-3xl text-left flex-1 pr-12">
          <h2 className="text-3xl font-bold mb-4">Apuntes francés: Unit 3 — Grammaire et vocabulaire</h2>

          <h3 className="text-xl font-semibold mb-2">Contingut de l'examen</h3>
          <p className="mb-3"><strong>Grammaire:</strong> verbs <em>manger, acheter, boire</em>; els <strong>articles partitifs</strong>; expresar la <strong>quantité</strong>.</p>
          <p className="mb-3"><strong>Vocabulaire:</strong> aliments, plats, el menú (llista resumida a sota).</p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Conjugacions (présent)</h3>
          <div className="mb-4">
            <strong>MANGER</strong>
            <div className="pl-4">
              <p>je mange — tu manges — il/elle mange</p>
              <p>nous mangeons — vous mangez — ils/elles mangent</p>
            </div>
          </div>

          <div className="mb-4">
            <strong>ACHETER</strong>
            <div className="pl-4">
              <p>j'achète — tu achètes — il/elle achète</p>
              <p>nous achetons — vous achetez — ils/elles achètent</p>
            </div>
          </div>

          <div className="mb-4">
            <strong>BOIRE</strong>
            <div className="pl-4">
              <p>je bois — tu bois — il/elle boit</p>
              <p>nous buvons — vous buvez — ils/elles boivent</p>
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-4 mb-2">Articles partitifs</h3>
          <table className="w-full text-left mb-4 border-collapse">
            <thead>
              <tr>
                <th className="border-b pb-2">Singular</th>
                <th className="border-b pb-2">Exemple</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2"><strong>du</strong> (masculí)</td>
                <td className="py-2">du sucre, du beurre</td>
              </tr>
              <tr>
                <td className="py-2"><strong>de la</strong> (femení)</td>
                <td className="py-2">de la farine, de la viande</td>
              </tr>
              <tr>
                <td className="py-2"><strong>de l'</strong> (voyelle/h)</td>
                <td className="py-2">de l’eau</td>
              </tr>
              <tr>
                <td className="py-2"><strong>des</strong> (plural)</td>
                <td className="py-2">des légumes, des moules</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-lg font-semibold mt-4 mb-2">Quantité — expressions comunes</h3>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>trop de</strong> — Il y a trop de beurre.</li>
            <li><strong>assez de</strong> — Nous avons assez de légumes.</li>
            <li><strong>un peu de</strong> — Je bois un peu d’eau.</li>
            <li><strong>pas assez de</strong> — Il ne mange pas assez de fruits.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Vocabulaire — aliments i plats (resum)</h3>
          <p className="mb-2">Exemples breus (útil per l'examen):</p>
          <ul className="list-disc pl-6 mb-6">
            <li>le pain, le fromage, le poulet, le poisson</li>
            <li>la soupe, la salade, les légumes</li>
            <li>le menu, l'entrée, le plat principal, le dessert</li>
          </ul>

          <button
            onClick={() => navigate("/")}
            className="mt-6 bg-[#dabd3e] px-6 py-2 rounded-full font-bold text-black shadow-md hover:scale-105 transition-transform"
          >
            Volver a Apuntes
          </button>
        </div>

        {/* right column for quick cheat-sheet */}
        <div className="w-1/3 flex flex-col gap-6">
          <div className="rounded-lg p-4 bg-gray-100 border border-gray-300">
            <h4 className="font-semibold mb-2">Cheat: articles partitifs</h4>
            <p className="text-sm">du (m), de la (f), de l' (vowel), des (pl)</p>
          </div>
          <div className="rounded-lg p-4 bg-gray-100 border border-gray-300">
            <h4 className="font-semibold mb-2">Verbs utiles</h4>
            <p className="text-sm">manger, acheter, boire — practicar les conjugacions al present</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DocumentoFrances;
