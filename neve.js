(function(){
    const container = document.getElementById('snowContainer');
    container.style.position = 'fixed';
    container.style.inset = '0';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '-1';
    const flakes = 203; // ajuste aqui
    for(let i=0;i<flakes;i++){
        const f = document.createElement('div');
        f.className = 'flakejs';
        const size = 4 + Math.random()*12; // px
        f.style.width = f.style.height = size + 'px';
        f.style.left = Math.random()*100 + 'vw';
        f.style.top = (Math.random()*-100) + 'vh';
        f.style.opacity = 0.5 + Math.random()*0.9;
        f.style.transform = `translateY(0)`;
        f.style.position = 'absolute';
        f.style.borderRadius = '50%';
        f.style.background = 'white';
        f.style.willChange = 'transform, opacity';
        const duration = 6 + Math.random()*18;
        f.style.animation = `falljs ${duration}s linear ${-Math.random()*duration}s infinite`;
        f.dataset.speed = duration;
        container.appendChild(f);
    }

    // opcional: remove flakes em reduced-motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches){
        container.style.display = 'none';
    }
})();

function fechar(){
    document.getElementById('fundo').style.display = 'none'
}