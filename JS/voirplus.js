const popupbox = document.querySelector('.popup-screen');
const popupTitle = document.querySelector('.popup-box .etitle');
const popupContent = document.querySelector('.popup-box .content');
const popupExit = document.querySelector('.popup-box i');


const elTitle = document.querySelectorAll('.element .etitle');
const elContents = document.querySelectorAll('.element .econtent');
const voirplus = document.querySelectorAll('.element a');

popupExit.addEventListener('click', () => {
    popupbox.classList.remove("p-active");
});

for(let i = 0; i < voirplus.length; i++){
    voirplus[i].addEventListener('click', () => {
        console.log(i);
        popupbox.classList.add("p-active");
        popupTitle.innerHTML = elTitle[i].innerHTML;
        popupContent.innerHTML = elContents[i].innerHTML;
    });
}

