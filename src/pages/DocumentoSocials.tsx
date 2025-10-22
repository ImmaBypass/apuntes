import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../assets/1sociales.jpg";
import img2 from "../assets/2sociales.jpg";

const DocumentoSocials: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* HEADER (no animado) */}
      <div className="relative bg-[#dabd3e] border-b-4 border-dashed border-black overflow-hidden h-[7rem]">
        <div className="px-8 pt-8 relative h-full">
          <h1 className="text-5xl font-bold text-black absolute top-6 scale-110 origin-left">
            SOCIALS
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
        className="flex flex-1 justify-start px-16 py-10 gap-8"
      >
        {/* COLUMNA DE TEXTO */}
        <div className="max-w-3xl text-left flex-1 pr-12">
          <h2 className="text-3xl font-bold mb-4">SOCIALS ECONOMIA</h2>
          <h3 className="text-2xl font-semibold mb-2">Economia Apunts</h3>

          <p className="mb-2">
            Una <strong>ciència</strong> que estudia com aconseguim béns<sup>1</sup> i serveis<sup>2</sup>.
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>Un bé és un objecte que ens fa la vida més còmoda.</li>
            <li>Un servei és una acció que ens fa la vida més còmoda.</li>
          </ol>

          <p className="mb-2">
            Els béns o serveis s’aconsegueixen amb activitats econòmiques, i aquestes es classifiquen en tres sectors econòmics:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li><strong>Sector Primari:</strong> Activitats relacionades amb la natura (Agricultura, Ramaderia, Pesca, etc.)</li>
            <li><strong>Sector Secundari:</strong> Activitats relacionades amb el món de la fàbrica.</li>
            <li><strong>Sector Terciari:</strong> Activitats que ofereixen serveis.</li>
          </ul>

          <h4 className="text-xl font-semibold mb-2">ESTAT DEL BENESTAR:</h4>
          <p className="mb-6">
            Necessita terciarització (que la major part de la població treballi en el sector terciari).
          </p>

          <h4 className="text-xl font-semibold mb-2">SISTEMA ECONÒMIC</h4>
          <p className="mb-6">
            La nostra ideologia econòmica és el <strong>Capitalisme</strong>, i el nostre sistema econòmic és el <strong>Sistema d’Economia de mercat</strong>.
          </p>

          {/* NUEVA SECCIÓN - IDEOLOGIA */}
          <h4 className="text-xl font-semibold mb-2">IDEOLOGIA<sup>3</sup></h4>
          <p className="mb-6">
            Una <strong>ideologia</strong> és un conjunt d’idees sobre alguna cosa, per exemple com hauria de funcionar la societat, l’economia o la política.
          </p>

          {/* NUEVA SECCIÓN - CAPITALISME */}
          <h4 className="text-xl font-semibold mb-2">EL CAPITALISME</h4>
          <p className="mb-3">
            La paraula <strong>Capitalisme</strong> ve de <strong>Capital</strong>.
          </p>
          <p className="mb-3">
            <strong>Capital</strong> és la quantitat de diners que necessitem per començar una empresa.
          </p>
          <p className="mb-3">
            En el <strong>capitalisme</strong>, qui decideix <strong>qui</strong>, <strong>què</strong>, <strong>com</strong> i <strong>quan</strong> produir, distribuir i consumir són les <strong>empreses</strong>.
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Lliure competència:</strong> Les empreses lluiten entre elles per aconseguir el màxim nombre de clients.  
              Si una empresa aconsegueix el 100% dels clients, això s’anomena <strong>monopoli</strong>.
            </li>
            <li>
              <strong>Especialització del treball:</strong> La gent s’especialitza en una cosa específica i no ho fa tot.
            </li>
            <li>
              <strong>Mercat:</strong> Una empresa o conjunt d’empreses destinades a un tipus de client.
            </li>
            <li><strong>Matèries primeres:</strong> Materials necessaris per la producció.</li>
            <li><strong>Energia i mà d’obra:</strong> Treballadors necessaris per la producció.</li>
          </ul>

          <p className="mb-3">
            La llei principal que fa que el capitalisme funcioni és la <strong>Llei de l’Oferta i la Demanda</strong>.
          </p>
          <p className="mb-3">
            Aquesta llei regula el <strong>preu de les coses</strong>: les empreses creen un producte i posen un preu en funció de la <strong>demanda</strong> i de quanta gent ho vol.
          </p>
          <p className="mb-6">
            <strong>Obsolescència programada:</strong> Els productes es fan obsolets després d’un temps o d’uns usos intencionadament, per així vendre més i guanyar diners.
          </p>

          <p className="text-sm text-gray-600 italic">1-2. Béns i serveis. 3. Conjunt d’idees sobre alguna cosa.</p>

          <button
            onClick={() => navigate("/")}
            className="mt-10 bg-[#dabd3e] px-6 py-2 rounded-full font-bold text-black shadow-md hover:scale-105 transition-transform"
          >
            Volver a Apuntes
          </button>
        </div>

        {/* IMÁGENES */}
        <div className="w-1/3 flex flex-col items-center gap-6">
          <img
            src={img1}
            alt="Economia 1"
            className="rounded-2xl shadow-md border border-gray-300"
          />
          <img
            src={img2}
            alt="Economia 2"
            className="rounded-2xl shadow-md border border-gray-300"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default DocumentoSocials;
