// Magic Navigation Menu
document.addEventListener('DOMContentLoaded', function() {
    const list = document.querySelectorAll('.navigation .list');
    
    function setActive(element) {
        // Remove active class from all items
        list.forEach(item => item.classList.remove('active'));
        
        // Add active class to clicked item
        element.classList.add('active');
    }
    
    // Add click event listeners
    list.forEach(item => {
        item.addEventListener('click', function() {
            setActive(this);
        });
    });
    
    // Initialize with first item active
    if (list.length > 0) {
        setActive(list[0]);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});


// Mobile menu toggle (can be added later if needed)
// const menuToggle = document.querySelector('.menu-toggle');
// const navLinks = document.querySelector('.nav-links');

// menuToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const navIndicator = document.querySelector('.nav-indicator');
    
    // Function to move the indicator
    function moveIndicator(element) {
        const linkRect = element.getBoundingClientRect();
        const navRect = element.parentElement.parentElement.getBoundingClientRect();
        
        navIndicator.style.width = `${linkRect.width}px`;
        navIndicator.style.left = `${linkRect.left - navRect.left}px`;
    }
    
    // Initialize indicator position
    const activeLink = document.querySelector('.nav-links a.active');
    if (activeLink) {
        moveIndicator(activeLink);
    }
    
    // Add click event listeners
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            // Move indicator
            moveIndicator(this);
        });
    });
    
    // Update indicator position on window resize
    window.addEventListener('resize', function() {
        const activeLink = document.querySelector('.nav-links a.active');
        if (activeLink) {
            moveIndicator(activeLink);
        }
    });
});

// Quick Links Navigation
document.addEventListener('DOMContentLoaded', function() {
    const list = document.querySelectorAll('.navigation .list');
    const indicator = document.querySelector('.navigation .indicator');
    
    function setActive(element) {
        // Remove active class from all items
        list.forEach(item => item.classList.remove('active'));
        
        // Add active class to clicked item
        element.classList.add('active');
    }
    
    // Add click event listeners
    list.forEach(item => {
        item.addEventListener('click', function() {
            setActive(this);
        });
        
        // Add hover effect
        item.addEventListener('mouseenter', function() {
            const index = Array.from(list).indexOf(this);
            indicator.style.transform = `translateX(calc(100px * ${index}))`;
        });
    });
    
    // Initialize with first item active
    if (list.length > 0) {
        setActive(list[0]);
    }
});

// Parallax Card Effect
document.addEventListener('DOMContentLoaded', function() {
    const parallaxCard = document.getElementById('parallaxCard');
    
    if (parallaxCard) {
        parallaxCard.addEventListener('mousemove', (e) => {
            const rect = parallaxCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (x - centerX) / 10;

            parallaxCard.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
        });

        parallaxCard.addEventListener('mouseleave', () => {
            parallaxCard.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
});

// Theme Toggle Functionality - Centralized for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Create theme toggle button if it doesn't exist
    if (!document.getElementById('themeToggle')) {
        const themeToggle = document.createElement('button');
        themeToggle.id = 'themeToggle';
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        document.body.appendChild(themeToggle);
    }

    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });
    
    function updateIcon(theme) {
        icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }

    // Scroll Animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.observe(element);
    });

    // Navigation scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.top-nav');
        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
    });
}); 