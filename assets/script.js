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

/*LES VARIABLES DU PROJET*/

const dots = document.querySelector(".dots");

let index = 0 /* ici c'est mon compteur qui par defaut est à 0 donc la première case du tabeau*/

const next = document.querySelector("#banner .arrow_right");

const previous = document.querySelector("#banner .arrow_left");

const img = document.querySelector(".banner-img");

const text = document.querySelector("#banner p");


/*JE CREER UNE FONCTION PRINCIPAL POUR REGROUPER TOUTES MES FONCTIONS*/
function main() {
	AffichageDots();
	ClickNextSlide();
	ClickPreviousSlide();
}
main()




/* AFFICHAGE DE MES DOTS VIDES */

function AffichageDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);	
/* je créée ma condition pour colorer en blanc ma dot 
de départ par défaut la première dot quand on arrive sur la page*/
 if (i == index) {
	dot.classList.add("dot_selected");
 }
	}
}

function ClickNextSlide() {
	next.addEventListener("click", () => {

		/*je vais créer un tableau pour mes dots ici
		je le place avant le index++ pour que cette action
		s'effectue avant*/

		const arrayDots = document.querySelectorAll (".dots .dot");
		arrayDots[index].classList.remove("dot_selected")

		index++; 
        
		/* Mon index s'arrête à 3 je veux 
		qu'à 3 il reparte à 0 (la première image)*/
		if (index > slides.length -1 /*on met -1 car index de départ 
		est a 0 or la taille du tableau est à 4 donc il y a un clic "vide"*/) {
			index = 0;	
		} /*illustration de la condition : 
		--> il y a 4 image donc index possible sont 0 1 2 3
		--> si on arrive à la 4éme image, le clic suivant 
		mon index sera dont superieur à slides.length(4)-1 soit 3
		--> donc l'index repart à 0 et ainsi de suite ....

		/*à chaque clic droit je veux changer la source de l'image
		j'ai ajouté la source relative dans mon Array slides*/

	img.src = slides[index].image;
	text.innerHTML = slides[index].tagLine;

		/*ici je rajoute la classe dot_selected 
		à l'index en cours car l'index aura déjà été incrémenté*/

		arrayDots[index].classList.add("dot_selected");

	});
}


/*JE DUPLIQUE ICI POUR LE CLICK GAUCHE*/
/*AFFICHAGE DES SLIDE AU CLICK GAUCHE ET DE LA DOT CORRESPONDANTE*/

function ClickPreviousSlide() {
	previous.addEventListener("click", () => {
		const arrayDots = document.querySelectorAll (".dots .dot");
		arrayDots[index].classList.remove("dot_selected")

		index--; /*je repars en arrière*/
        
		if (index < 0) {
			index = slides.length -1;	
		}

	img.src = slides[index].image;
	text.innerHTML = slides[index].tagLine;
	arrayDots[index].classList.add("dot_selected");

	});

}