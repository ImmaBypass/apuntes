import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/**
 * DocumentoBiologia - Apunts amplis i explicatius
 * - Contingut en català, corregit i expandit
 * - Estructurat en seccions amb definicions àmplies
 */

const DocumentoBiologia: React.FC = () => {
  const navigate = useNavigate();
  const [showOrganelle, setShowOrganelle] = useState<string | null>(null);
  const [showSection, setShowSection] = useState<Record<string, boolean>>({});

  const toggleSection = (key: string) =>
    setShowSection((s) => ({ ...s, [key]: !s[key] }));

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="relative bg-[#dabd3e] border-b-4 border-dashed border-black overflow-hidden h-[7rem]">
        <div className="px-8 pt-8 relative h-full">
          <h1 className="text-5xl font-bold text-black absolute top-6 scale-110 origin-left">
            BIOLOGIA
          </h1>
          <div className="absolute bottom-1 left-0 right-0 h-[0.8rem] bg-white border-y-[4px] border-black" />
        </div>
      </div>

      {/* Warning */}
      <div className="bg-yellow-200 text-yellow-900 text-center py-2 text-sm font-semibold border-b border-yellow-400">
        ⚠️ Es possible que aquesta pàgina estigui incompleta o en procés d'edició.
      </div>

      {/* Main content */}
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="flex-1 px-10 py-10"
      >
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Apunts: Cèl·lula i organuls</h2>

          {/* 1. La cèl·lula */}
          <section>
            <h3 className="text-2xl font-semibold mb-3">1. La cèl·lula: unitat de vida</h3>

            <p className="mb-3">
              La cèl·lula és la unitat bàsica de tots els éssers vius. Totes les funcions
              vitals (nutrició, respiració, reproducció i resposta a estímuls) es realitzen
              a nivell cel·lular. Les cèl·lules poden existir de manera aïllada (unicel·lulars)
              o formar part d'organismes pluricel·lulars on es diferencien i especialitzen.
            </p>

            <h4 className="font-semibold mt-4">Tipus de cèl·lules</h4>

            <div className="grid gap-4 md:grid-cols-2 mt-3">
              <div className="bg-gray-50 p-4 rounded-lg border">
                <h5 className="font-bold">Cèl·lula eucariota</h5>
                <p className="mt-2">
                  Les cèl·lules eucariotes tenen un nucli delimitat per una membrana nuclear i
                  nombrosos orgànuls membranosos (com els mitocondris i el reticle endoplasmàtic).
                  Són típiques d'animals, plantes, fongs i protists. El seu ADN es troba dins del
                  nucli i és complexament empaquetat en cromosomes.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border">
                <h5 className="font-bold">Cèl·lula procariota</h5>
                <p className="mt-2">
                  Les cèl·lules procariotes (bacteris i arquees) no tenen nucli ni orgànuls amb
                  membrana. El seu material genètic és una molècula circular d'ADN que es troba
                  lliure al citoplasma. Són més petites i estructuralment més simples, però
                  poden dur a terme totes les funcions vitals.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border">
                <h5 className="font-bold">Cèl·lula animal</h5>
                <p className="mt-2">
                  Les cèl·lules animals no tenen paret cel·lular ni cloroplasts. Sovint tenen
                  formes irregulars i estructures com centríols que participen en la divisió
                  cel·lular. Les cèl·lules animals depenen d'altres cèl·lules per a certs
                  processos estructurals i de suport.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border">
                <h5 className="font-bold">Cèl·lula vegetal</h5>
                <p className="mt-2">
                  Les cèl·lules vegetals presenten una paret cel·lular rígida composta majoritàriament
                  de cel·lulosa, i contenen cloroplasts per fer la fotosíntesi. També tenen vacúols
                  grans que mantenen la turgència cel·lular i emmagatzemen substàncies.
                </p>
              </div>
            </div>

            <h4 className="font-semibold mt-6">Parts principals i funcions</h4>
            <div className="mt-3 space-y-3">
              <p>
                <strong>Membrana plasmàtica:</strong> és una bicapa lipídica semipermeable que
                envolta la cèl·lula i regula el pas de substàncies. A més, conté proteïnes de
                transport i receptors que detecten senyals externs.
              </p>
              <p>
                <strong>Citoplasma:</strong> és el medi intern on es troben els orgànuls. Conté
                el citoesquelet (una xarxa de fibres proteiques) que manté la forma celular i
                facilita el moviment intracel·lular.
              </p>
              <p>
                <strong>Nucli:</strong> conté l'ADN i és el centre de control genètic. En ell es
                realitza la transcripció del ADN a ARN i es regula l'expressió gènica que determina
                les funcions i característiques de la cèl·lula.
              </p>
            </div>
          </section>

          {/* 2. Orgànuls i estructures cel·lulars */}
          <section className="mt-8">
            <h3 className="text-2xl font-semibold mb-3">2. Orgànuls i estructures cel·lulars</h3>

            <p className="mb-3">
              Els orgànuls són compartiments especialitzats que executen funcions concretes dins
              la cèl·lula. Es poden classificar en orgànuls membranosos i estructures no membranoses.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-bold mb-2">Orgànuls membranosos (resum ampli)</h4>

                <p>
                  <strong>Mitocondris:</strong> Orgànuls encarregats de generar energia.
                  Durant la respiració cel·lular, transformen l'energia química dels nutrients en
                  ATP, la moneda energètica de la cèl·lula. Tenen la seva pròpia ADN i una doble
                  membrana que facilita la cadena de reacció energètica.
                </p>

                <p className="mt-2">
                  <strong>Reticle endoplasmàtic rugós (RER):</strong> cobert de ribosomes; sintetitza
                  proteïnes destinades a membranes, secreció o lisiosomal. El RER treballa de forma
                  coordinada amb l'aparell de Golgi per processar i enviar proteïnes.
                </p>

                <p className="mt-2">
                  <strong>Reticle endoplasmàtic llis (REL):</strong> sense ribosomes; implicat en la
                  síntesi de lípids, detoxificació i el metabolisme de carbohidrats en alguns teixits.
                </p>

                <p className="mt-2">
                  <strong>Aparell de Golgi:</strong> modula, classifica i empaqueta proteïnes i lípids
                  procedents del RER per enviar-los a diferents destins: membranes, secreció o lisosomes.
                </p>

                <p className="mt-2">
                  <strong>Lisosomes:</strong> contenen enzims hidrolítics per degradar macromolècules,
                  orgànuls atesos i patògens intracel·lulars; essencials en processos d'autofàgia.
                </p>

                <p className="mt-2">
                  <strong>Vacúols:</strong> emmagatzemen substàncies, regulen la pressió osmòtica i,
                  en cèl·lules vegetals, ocupen un volum important mantenint la turgència.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-bold mb-2">Estructures macromoleculars i no membranoses</h4>

                <p>
                  <strong>Centríols:</strong> organitzen el fus mitòtic durant la divisió cel·lular
                  en cèl·lules animals; participen en la formació de cilis i flagels.
                </p>

                <p className="mt-2">
                  <strong>Citoesquelet:</strong> constiut per microtúbuls, microfilaments i filaments
                  intermedis; dona forma, estabilitat i transport intracel·lular. Permet moviments com
                  la contractilitat i el desplaçament cel·lular.
                </p>

                <p className="mt-2">
                  <strong>Ribosomes:</strong> complexes de RNA i proteïnes que sintetitzen polipèptids
                  seguint les instruccions de l'ARN missatger; poden ser lliures o associats al RER.
                </p>

                <p className="mt-2">
                  <strong>Proteasomes:</strong> complexos que degraden proteïnes mal plegades o marcades
                  per la ubiquitina, mantenint l'homeòstasi proteica.
                </p>

                <p className="mt-2">
                  <strong>Cilis i flagels:</strong> prolongacions per al moviment; presents en alguns
                  tipus cel·lulars i en organismes unicel·lulars.
                </p>
              </div>
            </div>
          </section>

          {/* Orgànuls interactius - toggle */}
          <section className="mt-8">
            <h3 className="text-2xl font-semibold mb-3">Mostra orgànul (clic)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { key: "mito", name: "Mitocondris", text: "Producció d'ATP per fosforilació oxidativa; estructura de doble membrana i crestes internes." },
                { key: "rer", name: "Reticle rugós", text: "Síntesi de proteïnes per a secreció o membranes; ribosomes adherits." },
                { key: "golgi", name: "Aparell de Golgi", text: "Modificació i enviament de proteïnes; formació de vesícules" },
              ].map((o) => (
                <button
                  key={o.key}
                  onClick={() => setShowOrganelle((s) => (s === o.key ? null : o.key))}
                  className="text-left p-4 bg-gray-100 border rounded-lg hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <strong>{o.name}</strong>
                      <p className="text-sm text-gray-600 mt-1">{o.text.slice(0, 80)}...</p>
                    </div>
                    <div className="text-sm text-gray-500">{showOrganelle === o.key ? "▲" : "▼"}</div>
                  </div>

                  {showOrganelle === o.key && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.22 }}
                      className="mt-3 text-sm text-gray-700"
                    >
                      {o.text}
                      <p className="mt-2 text-xs text-gray-500">Font: apunts resum (no exhaustiu).</p>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* 3. Biomolècules (detall ampli) */}
          <section className="mt-8">
            <h3 className="text-2xl font-semibold mb-3">3. Biomolècules</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold">Glúcids</h4>
                <p className="mt-2">
                  Els glúcids (hidrats de carboni) són molècules formades principalment per carboni,
                  hidrogen i oxigen. Actuen com a font d'energia immediata (ex. glucosa), com a
                  material estructural (ex. cel·lulosa) i com a molècules de reconeixement cel·lular.
                  Tenen formes simples (monosacàrids) i polimèriques (polisacàrids).
                </p>
              </div>

              <div>
                <h4 className="font-bold">Lípids</h4>
                <p className="mt-2">
                  Els lípids inclouen greixos, olis i fosfolípids. Són importants com a reserva
                  energètica a llarg termini i com a components de membranes (bicapa lipídica).
                  També actuen com a molècules de senyalització i aïllen tèrmicament alguns organismes.
                </p>
              </div>

              <div>
                <h4 className="font-bold">Proteïnes</h4>
                <p className="mt-2">
                  Les proteïnes estan constituïdes per aminoàcids i tenen funcions molt diverses:
                  estructurals (col·lagen), enzimàtiques (catalitzen reaccions), de transport
                  (hemoglobina), i de senyalització o defensa (anticossos). La seva funció depèn
                  de la seva estructura tridimensional.
                </p>
              </div>

              <div>
                <h4 className="font-bold">Àcids nucleics</h4>
                <p className="mt-2">
                  L'ADN i l'ARN emmagatzemen i transmeten la informació genètica. L'ADN codifica la
                  seqüència d'aminoàcids de les proteïnes; l'ARN transmet aquesta informació per
                  a la síntesi proteica i té funcions reguladores i catalítiques.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Metabolisme cel·lular */}
          <section className="mt-8">
            <h3 className="text-2xl font-semibold mb-3">4. Metabolisme cel·lular</h3>

            <p>
              El metabolisme inclou totes les reaccions químiques que tenen lloc a la cèl·lula.
              Es divideix en:
            </p>

            <div className="mt-3 space-y-3">
              <div>
                <strong>Anabolisme:</strong>
                <p className="mt-1">
                  Conjunt de reaccions que construeixen molècules complexes a partir de molècules
                  més simples. Aquest procés requereix energia (per exemple, la síntesi de proteïnes
                  a partir d'aminoàcids o la formació de polisacàrids).
                </p>
              </div>

              <div>
                <strong>Catabolisme:</strong>
                <p className="mt-1">
                  Conjunt de reaccions que degraden molècules per alliberar energia (per exemple,
                  la degradació de glucosa en la respiració cel·lular). L'energia alliberada s'emmagatzema
                  en forma d'ATP.
                </p>
              </div>

              <div>
                <strong>Respiració cel·lular (resum):</strong>
                <p className="mt-1">
                  Glucosa + O<span className="align-baseline">₂</span> → CO<span className="align-baseline">₂</span> + H<span className="align-baseline">₂</span>O + energia (ATP).
                  Aquesta reacció, a través de la glicòlisi, cicl de Krebs i cadena respiratòria,
                  es realitza principalment als mitocondris en cèl·lules eucariotes.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Transport a través de la membrana */}
          <section className="mt-8">
            <h3 className="text-2xl font-semibold mb-3">5. Transport a través de la membrana</h3>

            <div className="space-y-3">
              <div>
                <strong>Difusió:</strong>
                <p className="mt-1">
                  Moviment de molècules des d'una zona de major concentració cap a una de menor,
                  segons el gradient de concentració. No requereix energia i pot ser simple o facilitada.
                </p>
              </div>

              <div>
                <strong>Osmosi:</strong>
                <p className="mt-1">
                  Tipus de difusió de l'aigua a través d'una membrana semipermeable des d'una zona
                  amb menor concentració de soluts a una amb major concentració de soluts.
                </p>
              </div>

              <div>
                <strong>Difusió facilitada:</strong>
                <p className="mt-1">
                  Transport de molècules grans o polars a través de canals o transportadors proteics,
                  seguint el gradient i sense consum d'energia.
                </p>
              </div>

              <div>
                <strong>Transport actiu:</strong>
                <p className="mt-1">
                  Transport en contra del gradient de concentració que requereix energia (ATP). Un
                  exemple és la bomba Na⁺/K⁺ que manté gradients i potencials de membrana.
                </p>
              </div>

              <div>
                <strong>Endocitosi / Exocitosi:</strong>
                <p className="mt-1">
                  Mecanismes pels quals la cèl·lula ingereix materials (endocitosi) o allibera
                  substàncies (exocitosi) mitjançant vesícules membranosas.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Homeòstasi */}
          <section className="mt-8">
            <h3 className="text-2xl font-semibold mb-3">6. Homeòstasi</h3>
            <p>
              Homeòstasi és la capacitat d'un organisme de mantenir l'estat intern estable davant
              canvis externs. Inclou la regulació de la temperatura, el pH, i la concentració de
              ions i nutrients. Els mecanismes d'homeòstasi impliquen senyals, receptors i respostes
              coordinades per sistema nerviós i endocrí.
            </p>
          </section>

          {/* 7. Medi intern i extern */}
          <section className="mt-8">
            <h3 className="text-2xl font-semibold mb-3">7. Medi intern i extern</h3>
            <p>
              Medi intern: és l'entorn estable (sang, líquids intersticials) on viuen les cèl·lules.
              Medi extern: entorn variable exterior (temperatura, nutrients, factors ambientals) que
              pot afectar el medi intern; l'organisme desenvolupa mecanismes per contrarestar els
              efectes externs (homeòstasi).
            </p>
          </section>

          {/* 8. Teixits */}
          <section className="mt-8">
            <h3 className="text-2xl font-semibold mb-3">8. Teixits del cos humà</h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-bold">Teixit epitelial</h4>
                <p className="mt-2">
                  Cobreix i protegeix superfícies internes i externes. Es divideix en epiteli de revestiment
                  (protecció, absorció) i epiteli glandular (secreció). Les característiques varien segons la
                  localització: simple o estratificat, escamos, cúbic o columnar.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-bold">Teixit connectiu</h4>
                <p className="mt-2">
                  Suporta i connecta altres teixits. Inclou tipus com conjuntiu (fibres i matriu extracellular),
                  adipós (emmagatzematge de greix), cartilaginós, ossi i sanguini. S'encarrega de la resistència i transport.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-bold">Teixit muscular</h4>
                <p className="mt-2">
                  Format per cèl·lules contractils (fibres) que generen força i moviment. Tipus: estriat (voluntari), llis (involuntari) i cardíac.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-bold">Teixit nerviós</h4>
                <p className="mt-2">
                  Composat per neurones (transmissió d'impulsos) i cèl·lules glials (suport i protecció). Les neurones tenen dendrites, soma i un axó per transmetre senyals.
                </p>
              </div>
            </div>
          </section>

          {/* 9. Organització biològica */}
          <section className="mt-8">
            <h3 className="text-2xl font-semibold mb-3">9. Organització biològica</h3>
            <p>
              Jerarquia biològica: cèl·lules → teixits → òrgans → aparells → sistemes. Cada nivell s'estructura per complir funcions específiques que contribueixen al funcionament de l'organisme.
            </p>
          </section>

          {/* 10. Diferenciació cel·lular */}
          <section className="mt-8">
            <h3 className="text-2xl font-semibold mb-3">10. Diferenciació cel·lular</h3>
            <p>
              Procés pel qual cèl·lules amb el mateix ADN adquireixen funcions diferents perquè s'activen o s'apaguen gens específics. Aquesta especialització permet la diversificació de teixits i òrgans en organismes pluricel·lulars.
            </p>
          </section>

          {/* 11. Reproducció cel·lular: mitosi (detall ampli) */}
          <section className="mt-8 mb-12">
            <h3 className="text-2xl font-semibold mb-3">11. Reproducció cel·lular: mitosi</h3>
            <p className="mb-3">
              La mitosi és el procés de divisió cel·lular que genera dues cèl·lules filles genèticament idèntiques a la cèl·lula mare. És essencial per al creixement, la regeneració i la substitució cel·lular.
            </p>

            <div className="space-y-3">
              <div>
                <strong>Interfase (G1, S, G2):</strong>
                <p className="mt-1">
                  La cèl·lula es prepara per dividir-se: creix (G1), duplica l'ADN (S) i sintetitza proteïnes i orgànuls (G2).
                </p>
              </div>

              <div>
                <strong>Profase:</strong>
                <p className="mt-1">
                  La cromatina es condensa en cromosomes visibles; els centríols es desplacen als pols i es forma el fus mitòtic; la membrana nuclear comença a fragmentar-se.
                </p>
              </div>

              <div>
                <strong>Metafase:</strong>
                <p className="mt-1">
                  Els cromosomes alineats s'ubiquen al pla equatorial; els microtúbuls del fus s'enllacen als centròmers.
                </p>
              </div>

              <div>
                <strong>Anafase:</strong>
                <p className="mt-1">
                  Les cromàtides germanes se separen i són arrossegades cap als pols oposats per l'acció dels microtúbuls.
                </p>
              </div>

              <div>
                <strong>Telofase:</strong>
                <p className="mt-1">
                  Es reestableixen les membranes nuclears al voltant dels conjunts de cromosomes i aquests comencen a descondensar-se.
                </p>
              </div>

              <div>
                <strong>Citocinesi:</strong>
                <p className="mt-1">
                  Divisió del citoplasma que dona lloc a dues cèl·lules filles independents; la citocinesi pot fer-se per estrangulament en cèl·lules animals o per formació d'una nova paret en cèl·lules vegetals.
                </p>
              </div>
            </div>
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

export default DocumentoBiologia;
