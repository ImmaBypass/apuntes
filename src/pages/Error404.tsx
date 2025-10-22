import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Error404: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
    >
      <h1 className="text-6xl font-bold text-gray-700 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        Esta página no existe o
aún no está disponible.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-[#dabd3e] px-6 py-2 rounded-full font-bold text-black shadow-md hover:scale-105 transition-transform"
      >
        Volver a Apuntes
      </button>
    </motion.div>
  );
};

export default Error404;
