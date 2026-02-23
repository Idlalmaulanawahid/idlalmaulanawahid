// Navigation Elements
const navbar = document.getElementById('navbar');
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('.nav-link');

// Scroll Event for Navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
    } else {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    }
});

// Close Mobile Menu on Link Click
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    });
});

// Active Link highlighting on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Scroll Reveal Animation Initialization
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Un-comment below to only animate once
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll('.animate-on-scroll');
animatedElements.forEach(el => observer.observe(el));

// Code syntax highlight simulation (Adding span colors to the visual box strings)
const codeLines = document.querySelector('.code-lines');
if (codeLines) {
    const colors = ['#38bdf8', '#818cf8', '#a78bfa', '#f472b6', '#34d399'];
    const lines = codeLines.querySelectorAll('.line');
    
    // Add glowing effect occasionally
    setInterval(() => {
        const randomLine = lines[Math.floor(Math.random() * lines.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        randomLine.style.backgroundColor = randomColor;
        randomLine.style.boxShadow = `0 0 10px ${randomColor}`;
        
        setTimeout(() => {
            randomLine.style.backgroundColor = 'var(--border-color)';
            randomLine.style.boxShadow = 'none';
        }, 800);
    }, 2000);
}
