import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import ApuntesUI from "./ApuntesUI";
import DocumentoSocials from "./pages/DocumentoSocials";
import DocumentoMates from "./pages/DocumentoMates";
import Informacion from "./pages/InfoPage";
import NotFound from "./pages/Error404";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ApuntesUI />} />
        <Route path="/documento/socials" element={<DocumentoSocials />} />
        <Route path="/documento/mates" element={<DocumentoMates />} />
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
