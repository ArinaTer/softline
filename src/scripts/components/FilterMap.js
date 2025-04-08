import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

export function FilterMap() {
    const elements = {
        media: document.querySelector('.map__media'),
        buttons: document.querySelectorAll('.map__nav-button'),
        dots: document.querySelectorAll('.map__dot')
    };
    let draggableInstance = null;

    function updateFilter(filter) {
        const visibleDots = [];
        elements.dots.forEach(dot => {
            const isVisible = filter === 'all' || dot.dataset.region === filter;
            dot.style.display = isVisible ? 'block' : 'none';
            if (isVisible) visibleDots.push(dot);
        });
        return visibleDots;
    }

    function centerMap(visibleDots) {
        if (!draggableInstance || window.innerWidth > 1350 || visibleDots.length === 0) return;

        const centerX = visibleDots.reduce((sum, dot) => {
            const x = parseFloat(dot.getAttribute('x')) || 0;
            const width = parseFloat(dot.getAttribute('width')) || 0;
            return sum + x + (width / 2);
        }, 0) / visibleDots.length;

        gsap.to(elements.media, {
            x: -centerX + (window.innerWidth / 2),
            duration: 1,
            ease: "power2.out"
        });
    }

    elements.buttons.forEach(button => {
        button.addEventListener('click', () => {
            elements.buttons.forEach(btn => btn.classList.remove('map__nav-button--active'));
            button.classList.add('map__nav-button--active');
            const visibleDots = updateFilter(button.dataset.filter);
            centerMap(visibleDots);
        });
    });

    gsap.matchMedia().add("(max-width: 1350px)", () => {
        draggableInstance = Draggable.create(elements.media, {
            bounds: ".map__wrapper",
            type: "x",
            inertia: true
        })[0];
    });
}
