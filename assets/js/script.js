document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const presentation = document.querySelector('#presentation');
        const header = document.querySelector('header');
        const footer = document.querySelector('footer')

        presentation.classList.add('decrease');
        header.classList.add('appear');
        footer.classList.add('appear');
    }, 500);

    setTimeout(() => {
        const presentationContent = document.querySelector('.presentation-content');

        presentationContent.classList.add('appear');
    }, 800);
});

function movePresentation() {
    var presentation = document.querySelector('.presentation');
    var article = document.querySelector('main > article');

    if (window.innerWidth <= 768) {
        if (!article.contains(presentation)) {
            article.insertBefore(presentation, article.firstChild);
        }
    } else {
        if (document.body.contains(presentation) && !document.querySelector('body > .presentation')) {
            document.body.insertBefore(presentation, document.body.querySelector('main'));
        }
    }
}

window.addEventListener('resize', movePresentation);
movePresentation();
