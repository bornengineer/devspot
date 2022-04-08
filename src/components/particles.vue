<template>
<!-- it is the particles js file
we can modify the values to customize acc to us -->
    <div id="app">
        <Particles
                id="tsparticles"
                :particlesInit="particlesInit"
                :particlesLoaded="particlesLoaded"
                url="http://foo.bar/particles.json"
        />

        <Particles
                id="tsparticles"
                :particlesInit="particlesInit"
                :particlesLoaded="particlesLoaded"
                :options="{
                    background: {
                        color: {
                            value: ''
                        }
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'bubble'
                            },
                            onHover: {
                                enable: true,
                                mode: ''
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 80,
                                duration: 2,
                                opacity: 0.8,
                                size: 20
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff',
                        },
                        links: {
                            color: '',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        stroke: {
                            width: 3,
                            color:'#ffffff',
                            opacity:0.5,
                            
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: '',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 1,
                            straight: true
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 6
                        },
                        opacity: {
                            value: 0.7,
                            anim:{
                                enable: true,
                                speed: 2,
                            }
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            random: true,
                            value: 6
                        }
                    },
                    detectRetina: true
                }"
        />
    </div>
</template>