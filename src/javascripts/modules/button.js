import Particles from '../libs/particles';


export default class Button {
    constructor(bttn) {
        let particlesOpts = {
            type: 'triangle',
            easing: 'easeOutSine',
            size: 3,
            duration: 800,
            particlesAmountCoefficient: 7,
            speed: 3,
            oscillationCoefficient: 1,
	        // complete: () => {
		    //     window.location.href = "//game.web-tycoon.com";
	        // }
        };
        
        
        const particles = new Particles(bttn, particlesOpts);
    
        let buttonVisible = true;
        bttn.addEventListener('click', () => {
	        setTimeout(() => {
		        window.location.href = "https://game.web-tycoon.com/?invite=xgTM";
	        }, 800);
            if ( !particles.isAnimating() && buttonVisible ) {
                particles.disintegrate();
                buttonVisible = !buttonVisible;
            }
        });
    }
}
