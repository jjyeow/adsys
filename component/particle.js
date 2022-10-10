import React from 'react';
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';

const ParticlesConfig = {
    autoplay: true,
    fullScreen: {
        enable: false,
        zIndex: 1,
    },
    particles: {
    number: {
        value: 7,
        density: {
            enable: false,
            value_area: 500,
        },
    },
    color: {
        value: '#005c61',
    },
    shape: {
        type: 'circle',
        // options: {
        //     sides: 5,
        // },
    },
    opacity: {
        value: 0.2,
        random: false,
        anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
        },
    },
    size: {
        value: 2,
        random: false,
        anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
        },
    },
    rotate: {
        value: 0,
        random: true,
        direction: 'clockwise',
        animation: {
            enable: true,
            speed: 5,
            sync: false,
        },
    },
    line_linked: {
        enable: true,
        distance: 600,
        color: '#005c61',
        opacity: 0.4,
        width: 2,
    },
    move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
        },
    },
    },
    interactivity: {
        // events: {
        //     onhover: {
        //     enable: true,
        //     mode: ['grab'],
        //     },
        //     onclick: {
        //     enable: false,
        //     mode: 'bubble',
        //     },
        //     resize: true,
        // },
        // modes: {
        //     grab: {
        //     distance: 400,
        //     line_linked: {
        //         opacity: 1,
        //     },
        //     },
        //     bubble: {
        //     distance: 400,
        //     size: 40,
        //     duration: 2,
        //     opacity: 8,
        //     speed: 3,
        //     },
        //     repulse: {
        //     distance: 200,
        //     },
        //     push: {
        //     particles_nb: 4,
        //     },
        //     remove: {
        //     particles_nb: 2,
        //     },
        // },
    },
    retina_detect: true,
    background: {
        color: '#FFFFFF',
        image: '',
        position: '50% 50%',
        repeat: 'no-repeat',
        size: 'cover',
    },
};

const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
    return (
        <div id='particle-background'>
        <Particles
            id='tsparticles'
            particlesLoaded='particlesLoaded'
            init={particlesInit}
            loaded={particlesLoaded}
            options={ParticlesConfig}
            height='100vh'
            width='100vw'
        ></Particles>
        </div>
    );
};

export default ParticleBackground;