import {generateRange} from './utils.js';

const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => entry.target.style.opacity = entry.intersectionRatio);
    },
    {
        root: null,
        threshold: generateRange()
    }
);

(() => {
    const targetElements = document.querySelectorAll('.content-image');

    for (const target of targetElements) {
        intersectionObserver.observe(target);
    }
})();
