import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
} from "@tsparticles/engine";

 import { loadFull } from "tsparticles";
import { particleOptions } from "../../config/backgroundConfig";

const AnimatedBackground = () => {
  const [init, setInit] = useState(false); // See https://github.com/tsparticles/react/#readme

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      
      await loadFull(engine);

    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options = useMemo(() => particleOptions, []);

  if (init) {
    return (
        <div className="fixed top-0 left-0 z-[-1] w-full h-full">
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        </div>
    );
  }

  return <></>;
};

export default AnimatedBackground;