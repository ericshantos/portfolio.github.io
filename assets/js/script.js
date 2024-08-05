document.addEventListener('DOMContentLoaded', function () {
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
    movePresentation(); // Chama a função ao carregar a página
});
