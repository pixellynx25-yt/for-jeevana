let panels=document.querySelectorAll('.panel');let i=0;let startY=0;
particlesJS('particles',{particles:{number:{value:50},size:{value:4},move:{speed:1}}});

function show(n){
 panels.forEach(p=>p.classList.remove('active'));
 panels[n].classList.add('active');
 gsap.from(panels[n],{opacity:0,scale:.9,duration:1});
}

document.addEventListener('keydown',e=>{
 if(e.code==='Space'){i=Math.min(i+1,panels.length-1);show(i);}
});

document.addEventListener('touchstart',e=>startY=e.touches[0].clientY);
document.addEventListener('touchend',e=>{
 let endY=e.changedTouches[0].clientY;
 if(startY-endY>50){i=Math.min(i+1,panels.length-1);show(i);}
});

function unlock(){
 if(pass.value==='250724'){
  lock.style.display='none';
  bgm.play();
 }
}

function accept(){reply.innerText='Thank you baby ❤️ I promise to be better.'}
function deny(){reply.innerText='It’s okay my love. Take your time. I’m here.'}
