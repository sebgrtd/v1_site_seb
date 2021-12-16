var clicked = false;

const navSlide = () => {
    const containerm = document.querySelector('.containerm');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li');
    console.log(containerm)

    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');
        if(clicked == false){ 
            containerm.style = "overflow-Y: hidden";
            clicked = true;
        }
        else{
            containerm.style = "overflow-Y: visible";
            clicked = false;
        }
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation =''
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            } 
        })
        burger.classList.toggle('toggle');
    });

}
 
navSlide();