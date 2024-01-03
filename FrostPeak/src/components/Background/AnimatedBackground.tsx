import React from 'react';
import Particles from 'react-tsparticles';
import backgroundConfig from '../../config/backgroundConfig'; 

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <Particles options={backgroundConfig} />
    </div>
  );
};

export default AnimatedBackground;