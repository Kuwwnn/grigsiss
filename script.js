document.getElementById("current-year").textContent = new Date().getFullYear();

const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const items = Array.from(track.children);

let currentIndex = 0;

function updateCarousel() {
    const itemWidth = items[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}


nextBtn.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.querySelector('.language-selector');
    const dropdown = languageSelector.querySelector('.dropdown');

    languageSelector.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdown.classList.toggle('visible');
    });

    document.addEventListener('click', () => {
        dropdown.classList.remove('visible');
    });
});

function showModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('show');

    setTimeout(() => {
        modal.classList.remove('show');
    }, 3000);
}

const contactBtn = document.querySelector('.contact-btn');
const modalCts = document.querySelector('.modal-ctus');
const modalClose = document.querySelector('.modal_close');

contactBtn.addEventListener('click', () => {
    modalCts.classList.add('visible');
    document.body.classList.add('modal_visible');
});

modalClose.addEventListener('click', () => {
    modalCts.classList.remove('visible');
    document.body.classList.remove('modal_visible');
});

modalCts.addEventListener('click', (e) => {
    if (e.target === modalCts) {
        modalCts.classList.remove('visible');
        document.body.classList.remove('modal_visible');
    }
});

