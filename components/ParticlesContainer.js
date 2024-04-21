import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';
import { color, distance } from 'framer-motion';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async(engine) => {
    await loadFull(engine);
  }, []);

const particlesLoaded = useCallback(async() => {}, []);
return (
  <Particles 
    className='w-full h-full absolute translate-z-0'
    style={{zIndex: '-10'}}
    id='tsparticles'
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      fullScreen: {enable: false},
      background: {
        color: {
          value: '',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          push:{
            quantity: 90
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#c9c9c9',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        directions: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
    },
        random: false,
        speed: 1,
        straight: false,
  },
  number: {
    density: {
      enable: true,
      area: 800,
    },
    value: 50,
  },
  opacity: {
    value: 0.5,
  },
  shape: {
    value: {min: 1, max: 5 },
},
},
detectRetina: true,
    }}
    />
);
};

export default ParticlesContainer;