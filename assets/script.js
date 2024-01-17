const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/*LES VARIABLES DU PROJET RECUPEREES AU FUR ET A MESURE*/

/* ici c'est mon compteur qui 
par defaut est à 0 donc la première case du tabeau*/
let index = 0

/*ici je récupère des éléments de mon html 
que je vais dynamiser en JAVA et je les mets dans mes variables*/

const dots = document.querySelector(".dots");
const next = document.querySelector("#banner .arrow_right");
const previous = document.querySelector("#banner .arrow_left");
const img = document.querySelector(".banner-img");
const text = document.querySelector("#banner p");

function principale() {
	AffichageDots();
	ClickNextSlide();
	ClickPreviousSlide();
}
principale() 
	

/* AFFICHAGE DE MES BULLETS POINT SANS BACKGROUND BLANC SAUF LA PREMIERE*/

function AffichageDots() {
	for (
		let indexSlides = 0; 
		indexSlides < slides.length; 
		indexSlides++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);	

/* je créée ma condition pour colorer en blanc ma dot 
de départ par défaut la première dot quand on arrive sur la page*/
 if (indexSlides === index) {
	dot.classList.add("dot_selected");
 }
	}
}

/*AFFICHAGE DES SLIDE AU CLICK DROIT (NEXT) ET DE LA DOT CORRESPONDANTE*/

function ClickNextSlide() {

	next.addEventListener("click", () => {

		/*je récupéres toutes mes dots dans une variable ici*/

		const DivDots = document.getElementsByClassName ("dot");

		DivDots[index].classList.remove("dot_selected"); 
		/*j'enléve le background de la dot 
		avant l'incrémentation de mon index de référence*/

		index++; 
        
		/* 
		*** INDEX VALEURS POSSIBLES 0 1 2 3
		*** SLIDES LENGTH 1 2 3 4
		Si on ne met pas le -1 il y a un click "vide" à la fin*/

		if (index > slides.length -1) {
			index = 0;	
		} /*quand l'index pour notre tableau dépasse le nombre de slide -1 (
			pour la prise en compte du 0 de l'index) il repart à 0 et ainsi de suite...
		)*/


		/*ici je rajoute la classe dot_selected 
		à l'index en cours car l'index aura déjà été incrémenté*/

		DivDots[index].classList.add("dot_selected");

		/*à chaque clic droit je veux changer la source de l'image
		et le texte de chaque slide / j'ai ajouté la source relative dans mon Array slides*/

		img.src = slides[index].image;
	    text.innerHTML = slides[index].tagLine;

	});
}


/*JE DUPLIQUE ICI POUR LE CLICK GAUCHE*/
/*AFFICHAGE DES SLIDE AU CLICK GAUCHE (PREVIOUS) ET DE LA DOT CORRESPONDANTE*/

function ClickPreviousSlide() {

	previous.addEventListener("click", () => {

		const DivDots = document.getElementsByClassName ("dot");

		DivDots[index].classList.remove("dot_selected")

		index--; /*je repars en arrière*/
        
		if (index < 0) {
			index = slides.length -1;	
		}

	img.src = slides[index].image;

	text.innerHTML = slides[index].tagLine;

	DivDots[index].classList.add("dot_selected");

	});

}