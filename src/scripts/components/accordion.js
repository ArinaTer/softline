export function accordion() {

    const cards = document.querySelectorAll('.business-directions__card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (window.innerWidth > 992.98) return;

            if (card.classList.contains('active')) {
                card.classList.remove('active');
                return;
            }

            cards.forEach(c => c.classList.remove('active'));

            card.classList.add('active');
        });
    });
}
