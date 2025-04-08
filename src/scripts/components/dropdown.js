export function dropdown() {
    const elements = {
        map: document.querySelector('.map'),
        container: document.getElementById('dropdown-container'),
        titles: document.querySelectorAll('.map__dropdown-title')
    };

    const toggleButton = elements.container?.querySelector('.map__nav-dropdown-button');
    const isMobile = () => window.innerWidth <= 992.98;

    function closeAllLists() {
        elements.titles.forEach(title => {
            const list = title.nextElementSibling;
            const region = title.closest('.map__dropdown-region');
            if (list?.classList.contains('map__dropdown-list')) {
                list.classList.remove('active');
                title.classList.remove('active');
                region.style.height = '';
            }
        });
    }

    function toggleRegionList(title) {
        const list = title.nextElementSibling;
        const region = title.closest('.map__dropdown-region');

        if (!list?.classList.contains('map__dropdown-list') || !region) return;

        const isActive = list.classList.contains('active');
        closeAllLists();

        if (!isActive) {
            list.classList.add('active');
            title.classList.add('active');
            requestAnimationFrame(() => {
                region.style.height = `${title.offsetHeight + list.scrollHeight + 5}px`;
            });
        }
    }

    toggleButton?.addEventListener('click', () => {
        elements.map?.classList.toggle('dropdown-active');
        if (!elements.map?.classList.contains('dropdown-active')) {
            closeAllLists();
        }
    });

    document.addEventListener('click', (event) => {
        if (elements.map && !elements.map.contains(event.target)) {
            elements.map.classList.remove('dropdown-active');
            closeAllLists();
        }
    });

    elements.titles.forEach(title => {
        title.addEventListener('click', (event) => {
            if (!isMobile()) return;
            event.preventDefault();
            toggleRegionList(title);
        });
    });

    window.addEventListener('resize', () => {
        if (!isMobile()) closeAllLists();
    }, { passive: true });
}
