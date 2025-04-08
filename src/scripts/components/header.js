export function header() {
    const elements = {
        header: document.querySelector('header')
    };

    function updateHeaderHeight() {
        const height = elements.header.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${height}px`);
    }

    window.addEventListener('load', updateHeaderHeight);
    window.addEventListener('resize', updateHeaderHeight, { passive: true });
}
