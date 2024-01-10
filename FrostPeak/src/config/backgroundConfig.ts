/* 

Configuration for the snowflake animated background.

*/

import { ISourceOptions } from "@tsparticles/engine";

export const particleOptions: ISourceOptions = {
  particles: {
    color: {
      value: "#fff",
    },
    number: {
      value: 100,
    },
    opacity: {
      value: { min: 0.3, max: 1 },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
    move: {
      direction: "bottom-right",
      enable: true,
      speed: { min: 2, max: 5 },
      straight: true,
    },
  },
  background: {
    color: {
        value: "transparent",
    },
    image: "url('/bg-overall.png')",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
};

