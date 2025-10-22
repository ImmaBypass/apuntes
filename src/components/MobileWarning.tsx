import { useEffect, useState } from "react";

export default function MobileWarning() {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      if (window.innerWidth < 768) {
        setShowWarning(true);
      } else {
        setShowWarning(false);
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  if (!showWarning) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-yellow-400 text-black text-center p-3 z-50 shadow-md">
      ⚠️ Esta página está optimizada para ordenador. En móviles o tablets puede verse diferente.
    </div>
  );
}
