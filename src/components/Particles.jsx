import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function ParticlesBg() {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className="absolute inset-0 w-full h-full"
      init={init}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          number: { value: 70, density: { enable: true, area: 900 } },
          color: { value: "#00f5d4" },
          opacity: { value: { min: 0.1, max: 0.5 } },
          size: { value: { min: 0.5, max: 2 } },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            outModes: { default: "bounce" },
          },
          links: {
            enable: true,
            color: "#00f5d4",
            distance: 130,
            opacity: 0.08,
            width: 0.8,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.2 } },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
