export function map() {
    const elements = {
        map: document.querySelector(".map")
    };

    function calculateAspectRatioDesc(height) {
        return height * 16 / 9;
    }

    function updateAspectRatio() {
        const { innerWidth: width, innerHeight: height } = window;
        const aspectHeight = Number.parseFloat(height / width * 100).toFixed(3);
        const aspectWidth = Number.parseFloat(calculateAspectRatioDesc(height) / width * 100).toFixed(3);

        elements.map.classList.toggle('slightly-move-x', aspectHeight > 100);
        elements.map.classList.toggle('slightly-move-y', aspectHeight < 53);

        document.documentElement.style.setProperty("--aspect-ratio", aspectHeight);
        document.documentElement.style.setProperty("--aspect-ratio-width", aspectWidth);
    }

    updateAspectRatio();
    window.addEventListener("resize", updateAspectRatio, { passive: true });
}
