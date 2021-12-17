const tousMesProjets = document.getElementById('all');
const projetsEnCours = document.getElementById('encours');
const projetsTermines = document.getElementById('fini');

const projets = document.querySelectorAll(".projet");
const pourcentages = document.querySelectorAll(".container-2 .projet .projet-container p");

var compteur = 0;
var compteurT = 0;
var compteurEc = 0;
var indexEc = [];
var indexTer = [];

for(let i = 0; i < pourcentages.length; i++)
{
    if(pourcentages[i].innerHTML.includes("100%"))
    {
        compteurT +=1
        indexTer += i;
    }
    else
    {
        compteurEc +=1;
        indexEc += i;
    }
    compteur +=1;
}

tousMesProjets.innerHTML += " (<span style='color:cornflowerblue'>" + compteur + "</span>)";
projetsEnCours.innerHTML += " (<span style='color:cornflowerblue'>" + compteurEc + "</span>)";
projetsTermines.innerHTML += " (<span style='color:cornflowerblue'>" + compteurT + "</span>)";

tousMesProjets.addEventListener("click", () => {
    for(let i = 0; i < projets.length; i++)
    {
        projets[i].classList.remove('visible');
    }
    setTimeout( () => {
    for(let i = 0; i < projets.length; i++)
        {
            console.log(i);
            projets[i].classList.add('visible');
        }
    }, 100);
    projetsEnCours.classList.remove("listactive");
    projetsTermines.classList.remove("listactive");
    tousMesProjets.classList.add("listactive");
});

projetsEnCours.addEventListener("click", () => {
    for(let i = 0; i < projets.length; i++)
    {
        projets[i].classList.remove('visible');
    }
    setTimeout( () => { for(let i = 0; i < indexEc.length; i++)
        {
            projets[indexEc[i]].classList.add('visible');
        }
    }, 100);
    projetsEnCours.classList.add("listactive");
    projetsTermines.classList.remove("listactive");
    tousMesProjets.classList.remove("listactive");
});

projetsTermines.addEventListener("click", () => {
    for(let i = 0; i < projets.length; i++)
    {
        projets[i].classList.remove('visible');
    }
    setTimeout( () => {
        for(let i = 0; i < indexTer.length; i++)
        {
            projets[indexTer[i]].classList.add('visible');
        }
    }, 100),
    projetsEnCours.classList.remove("listactive");
    projetsTermines.classList.add("listactive");
    tousMesProjets.classList.remove("listactive");
});
