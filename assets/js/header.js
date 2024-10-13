document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const links = document.querySelectorAll('.catalog-content a');
const toggle = document.getElementById('toggle');

links.forEach(link => {
    link.addEventListener('click', () => {
        
        setTimeout(() => {
            toggle.checked = false;
        }, 500);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const burguerCatalog = document.querySelector('.burguer-catalog');
    const colorFilm = document.getElementById('film');
    const root = document.documentElement;
    const presentationContents = document.getElementsByClassName('kanit-font');

    const colorButtons = document.querySelectorAll('.btn-span-color');

    function changeBackgroundColor(event) {
        const backgroundColor = window.getComputedStyle(event.target).backgroundColor;

        burguerCatalog.style.backgroundColor = backgroundColor;
        colorFilm.style.backgroundColor = backgroundColor;
        root.style.setProperty('--color-text-span', `${backgroundColor}`);

        // Itera sobre todos os elementos com a classe 'kanit-font'
        Array.from(presentationContents).forEach(element => {
            element.style.color = backgroundColor;
        });
    }

    colorButtons.forEach(button => {
        button.addEventListener('click', changeBackgroundColor);
    });
});
