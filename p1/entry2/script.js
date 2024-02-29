let text = document.getElementById('text');
let ink1 = document.getElementById('ink1');
let ink2 = document.getElementById('ink2');
let ink3 = document.getElementById('ink3');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value *2.5 + 'px';
    ink4.style.left = value *-1.5 + 'px';
    ink5.style.left = value *1.5 + 'px';
    ink1.style.marginTop = value *1.5 + 'px';

    
    

});