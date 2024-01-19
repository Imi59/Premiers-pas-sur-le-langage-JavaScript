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

let index = 0;
const dots = document.querySelector(".dots");
const next = document.querySelector("#banner .arrow_right");
const previous = document.querySelector("#banner .arrow_left");
const img = document.querySelector(".banner-img");
const text = document.querySelector("#banner p");

/* AFFICHAGE DE MES BULLETS POINT SANS BACKGROUND BLANC SAUF LA PREMIERE*/

function AffichageDots() {
	for (let i = 0; i < slides.length; i++) 
 {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);	

 if (i === index) {
	dot.classList.add("dot_selected");
 }
	}
}
AffichageDots();

function ClickNextSlide() {

	next.addEventListener("click", () => {

/*ETAPE 1 : au clic -->  incrémentation + boucle infinie + dote qui évolue*/
		const DivDots = document.getElementsByClassName ("dot");
		DivDots[index].classList.remove("dot_selected"); 
		index++;
		if (index > slides.length -1) {
			index = 0;	
		} 
		 DivDots[index].classList.add("dot_selected");
/*ETAPE 2 : CHANGEMENT D IMAGE EN MEME TEMPS ET DE TEXTE */
		img.src = slides[index].image;
		text.innerHTML = slides[index].tagLine;
	
	});
}
ClickNextSlide();


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
ClickPreviousSlide();