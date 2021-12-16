const containerm = document.querySelector('.containerm');
containerm.addEventListener("scroll", reveal);
function reveal(){
    var subcontainers = document.querySelector('.container');
    const toreveal = document.querySelector('.reveal');
    var windowHeight = window.innerHeight;
    var revealTop = subcontainers.getBoundingClientRect().top;
    var revealpoint = 150;
    if(revealTop < windowHeight - revealpoint){
        toreveal.classList.add('isactive');
    }
    else{
        toreveal.classList.remove('isactive');
    }
}