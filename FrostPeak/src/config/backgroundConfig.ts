/* 

Configuration for the snowflake animated background.

*/

import { ISourceOptions } from "@tsparticles/engine";


const responsiveBackground = () => {
    const width = window.innerWidth;
  
    if (width <= 640) {
      return "url('/bg-mobile.png')";
    } else if (width > 640 && width <= 1024) {
      return "url('/bg-tablet.png')";
    } else {
      return "url('/bg-desktop.png')";
    }
};


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
    image: responsiveBackground(), // My try to get the background img responsive
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
};

