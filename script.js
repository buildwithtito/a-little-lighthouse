 function turnOnTheLight() {
            const body = document.body;
            const btn = document.getElementById('turnOnLightBtn');
            const flash = document.getElementById('lightFlashBeam');
            const bgVideos = document.getElementById('bgVideoMarquee');
            const beaconGlow = document.getElementById('beaconGlow');

            // 1. Trigger Radial Light Flash
            if (flash) {
                flash.classList.add('active');
            }

            // 2. Turn Beacon Halo On
            if (beaconGlow) {
                beaconGlow.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                beaconGlow.style.boxShadow = '0 0 50px 20px rgba(226, 182, 255, 0.9)';
            }

            // 3. Fade Out and Disappear the Light Button
            if (btn) {
                btn.style.opacity = '0';
                btn.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    btn.style.display = 'none';
                }, 500);
            }

            // 4. Switch from Wireframe Mode to Powered-Up Dark Mode
            setTimeout(() => {
                body.classList.remove('wireframe-mode');
                body.style.backgroundColor = '#0E0416';

                // Bring Background Video Marquee to Life (Brighter Opacity)
                if (bgVideos) {
                    bgVideos.style.opacity = '0.85';
                }

                // Fade Flash Away
                if (flash) {
                    flash.style.opacity = '0';
                }
            }, 600);
        }

        document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.25,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.story-block').forEach((el) => {
        observer.observe(el);
    });
});