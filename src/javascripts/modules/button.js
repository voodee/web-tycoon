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
            oscillationCoefficient: 1
        };
        
        particlesOpts.complete = () => {
            console.log('button complete')
        };
        const particles = new Particles(bttn, particlesOpts);
    
        let buttonVisible = true;
        bttn.addEventListener('click', () => {
            if ( !particles.isAnimating() && buttonVisible ) {
                particles.disintegrate();
                buttonVisible = !buttonVisible;
            }
        });
    }
}
