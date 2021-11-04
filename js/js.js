const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = testimonialsContainer.querySelector('.testimonial');
const logo = testimonialsContainer.querySelector('.logo');
const username = testimonialsContainer.querySelector('.username');

const testimonials = [
    {
        "name": "Michele",
        "photo": "images/Michele.png",
		"text": "A Discovery Rio Tour é uma empresa muito competente, pontual e responsável. Eu recomendo demais essa empresa, principalmente, os passeios com os guias Nestor e Verônica que são pessoas maravilhosas , atenciosas, educadas, comprometidas com os clientes , além de serem uma simpatia de pessoas. Foram dias inesquecíveis e maravilhosos que tivemos no Rio de Janeiro na companhia deles,vocês são demais!!"
    },
    {
        "name": "Mabel",
        "photo": "images/Mabel.png",
		"text": "Fiz uma visita privada aos pontos turísticos que me interessaram. O guia falava espanhol junto com o motorista muito legal. Fomos primeiro ao Cristo Redentor onde fomos os primeiros a entrar e tiramos ótimas fotos e quase não havia gente. Além disso, devido à pandemia, eles também nos fornecem informações para agendarmos o RT-PCR. Altamente recomendado"
    },
    {
        "name": "Ivan",
        "photo": "images/Ivan Lopes.png",
		"text": "Passeio conhecendo o Rio. Super indico a Discovery, pessoal educado, atenciosos, ótimo custo benefício, o almoço é de qualidade...tudo nesse passeio eu amei e espero que vocês também o façam...não vão se arrepender, podem confiar!!! Gracias Verónica"
    },
    {
        "name": "Carina",
        "photo": "images/Carina Noronha.png",
		"text": "Amei o passeio que fizemos para Arraial do Cabo. Fechamos o passeio com a Verónica, que é super carismática. Gostamos tanto que em breve faremos o passeio de Angra."
    }

];
let idx = 1;


function updateTestimonial() {
	let { name, photo, text } = testimonials[idx];
	
	testimonial.innerHTML = text;
	logo.src  = photo;
	username.innerHTML = name;
	
	idx++;
	if(idx > testimonials.length -1 ) {
		idx = 0;
	}
}

setInterval(updateTestimonial, 10000);

window.location = "#wall-1";