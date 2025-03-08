const boutonsModale = document.querySelectorAll('.bouton');
const modale = document.querySelector('.modale');

for (let i = 0; i < boutonsModale.length; i++) {
    boutonsModale[i].addEventListener('click', openModale);
}

function openModale() {
    const chemin = this.previousElementSibling.getAttribute("src");
    const image = document.createElement('img');
    image.setAttribute('src', chemin);
    image.classList.add('zoom');

    modale.appendChild(image);
    modale.classList.add('visible');

    image.addEventListener("click", closeModale);

    console.log("openModale");
}

function closeModale(event) {
    modale.removeChild(event.target);
    modale.classList.remove('visible');
}