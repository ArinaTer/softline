// loader.js
export function loader() {
    const loaderElement = document.querySelector('.loader');

    if (!loaderElement) return;

    loaderElement.style.display = 'flex';

    window.addEventListener('load', function handler() {
        loaderElement.classList.add('loader--hidden');

        loaderElement.addEventListener('transitionend', function cleanup() {
            loaderElement.style.display = 'none';
            loaderElement.removeEventListener('transitionend', cleanup);
        }, { once: true });

        window.removeEventListener('load', handler);
    });
}
