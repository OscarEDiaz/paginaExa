var parrafo = document.getElementById('mosaic-text');
var caja = document.getElementById('box-1');
var texto = document.getElementById('box-1-content');
var caja2 = document.getElementById('box-2')
var texto2 = document.getElementById('box-2-content');

caja.addEventListener('mouseenter', function(){
    caja.style.transition = 'all 1s ease 0s';
    caja.style.scale = (1.3,1.3);
    parrafo.style.transition = 'all 1s ease 0s';
    parrafo.style.marginBottom = '100px';
    texto.style.transition = 'opacity 1s ease 0s';
    texto.style.opacity = '1';
}, false)  

caja.addEventListener('mouseleave', function(){
    caja.style.transition = 'all 1s ease 0s';
    caja.style.scale = (1,1);
    parrafo.style.transition = 'all 1s ease 0s';
    parrafo.style.marginBottom = '30px';
    setTimeout(function(){
        texto.style.transition = 'opacity 1s ease 0s';
        texto.style.opacity = '0';
    }, 500);    
}, false)

caja2.addEventListener('mouseenter', function(){
    caja.style.zIndex = '0';
    caja2.style.zIndex = '1';
    caja2.style.transition = 'all 1s ease 0s';
    caja2.style.scale = (1.3,1.3);
    parrafo.style.transition = 'all 1s ease 0s';
    parrafo.style.marginBottom = '100px';
    texto2.style.transition = 'opacity 1s ease 0s';
    texto2.style.opacity = '1';
}, false)

caja2.addEventListener('mouseleave', function(){
    caja2.style.transition = 'all 1s ease 0s';
    caja2.style.scale = (1,1);
    parrafo.style.transition = 'all 1s ease 0s';
    parrafo.style.marginBottom = '30px';
    caja.style.zIndex = '1';
    caja2.style.zIndex = '0';
    setTimeout(function(){
        texto2.style.transition = 'opacity 1s ease 0s';
        texto2.style.opacity = '0';
    }, 500);
}, false)