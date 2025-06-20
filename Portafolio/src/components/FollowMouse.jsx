import { useEffect, useState } from "react";

export const FollowMouse = () => {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });
  const [mouseActivo, setMouseActivo] = useState(false);

  useEffect(() => {
    const MovimientoMouse = (event) => {
      const { clientX, clientY } = event;
      setPosicion({ x: clientX, y: clientY });
      setMouseActivo(true);
    };

    window.addEventListener("mousemove", MovimientoMouse);

    return () => {
      window.removeEventListener("mousemove", MovimientoMouse);
    };
  }, []);

  useEffect(() => {
    if (mouseActivo) {
      document.body.classList.add("no-cursor");
    }
  }, [mouseActivo]);

  return (
    <>
      {mouseActivo && (
        <div
          style={{
            position: "fixed",
            backgroundColor: "rgba(23, 204, 83, 0.5)",
            border: "1px solid #fff",
            borderRadius: "50%",
            opacity: 0.8,
            pointerEvents: "none",
            left: -25,
            top: -25,
            width: 50,
            height: 50,
            transform: `translate(${posicion.x}px, ${posicion.y}px)`,
          }}
        />
      )}
    </>
  );
};
