export default class Relax {
    constructor(el) {
        const className = 'isScroling';
        
        const fixHeaderScroll = () => {
            if (window.pageYOffset > 20) {
                if (el.classList)
                    el.classList.add(className);
                else
                    el.className += ' ' + className;
            } else {
                if (el.classList)
                    el.classList.remove(className);
                else
                    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        };
    
        window.addEventListener('scroll', fixHeaderScroll);
        fixHeaderScroll();
    }
}
