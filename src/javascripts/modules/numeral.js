import numeral from 'numeral'


export default class Scene {
    constructor(el) {
        const num = numeral(el.innerHTML);
        const speed = el.getAttribute('data-speed') || 300;
        const type = el.getAttribute('data-type') || 'plus';
        
        setInterval(() => {
            let diff = 1;
            if (type === 'random') {
                diff = Math.floor(Math.random() * 3) - 1;
            }
            
            num.add(diff);
            el.innerHTML = num.format('0,0').replace(',', ' ')
        }, speed);
    }
}
