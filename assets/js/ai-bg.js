document.addEventListener("DOMContentLoaded", function () {

    if (!document.getElementById("ai-bg")) {
        console.error("ai-bg div not found");
        return;
    }

    if (typeof particlesJS === "undefined") {
        console.error("particles.js not loaded");
        return;
    }

    particlesJS("ai-bg", {
        particles: {
            number: {
                value: 70,
                density: {
                    enable: true,
                    value_area: 900
                }
            },
            color: { value: "#38bdf8" },
            shape: { type: "circle" },
            opacity: {
                value: 0.35,
                random: true
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#38bdf8",
                opacity: 0.25,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.9,
                out_mode: "out"
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                }
            },
            modes: {
                grab: {
                    distance: 160,
                    line_linked: {
                        opacity: 0.6
                    }
                }
            }
        },
        retina_detect: true
    });

    // Mobile optimization
    if (window.innerWidth < 768 && window.pJSDom && pJSDom[0]) {
        pJSDom[0].pJS.particles.number.value = 35;
        pJSDom[0].pJS.fn.particlesRefresh();
    }

});
