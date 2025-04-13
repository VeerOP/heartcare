// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Scroll animation for stats
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const speed = 200; // Animation speed
        const count = parseInt(stat.textContent);
        const increment = target / speed;
        
        if (count < target) {
            stat.textContent = Math.ceil(count + increment);
            setTimeout(animateStats, 1);
        } else {
            stat.textContent = target;
        }
    });
}

// Initialize stats animation when scrolled into view
window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.stats');
    const sectionPosition = statsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (sectionPosition < screenPosition) {
        animateStats();
        // Remove event listener after animation triggers
        window.removeEventListener('scroll', this);
    }
});

// Form validation for prediction form
const predictionForm = document.getElementById('predictionForm');
if (predictionForm) {
    predictionForm.addEventListener('submit', (e) => {
        let isValid = true;
        
        // Validate age
        const age = document.getElementById('age');
        if (age.value < 18 || age.value > 120) {
            alert('Please enter a valid age between 18 and 120');
            isValid = false;
        }
        
        // Validate blood pressure
        const bp = document.getElementById('restingBP');
        if (bp.value < 80 || bp.value > 200) {
            alert('Please enter a valid resting blood pressure between 80 and 200 mm Hg');
            isValid = false;
        }
        
        // Validate cholesterol
        const cholesterol = document.getElementById('cholesterol');
        if (cholesterol.value < 100 || cholesterol.value > 600) {
            alert('Please enter a valid serum cholesterol level between 100 and 600 mg/dl');
            isValid = false;
        }
        
        if (!isValid) {
            e.preventDefault();
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.pointerEvents = 'auto';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.pointerEvents = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize back to top button styles
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '30px';
backToTopButton.style.right = '30px';
backToTopButton.style.width = '50px';
backToTopButton.style.height = '50px';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.backgroundColor = 'var(--primary-color)';
backToTopButton.style.color = 'white';
backToTopButton.style.border = 'none';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.opacity = '0';
backToTopButton.style.pointerEvents = 'none';
backToTopButton.style.transition = 'var(--transition)';
backToTopButton.style.display = 'flex';
backToTopButton.style.alignItems = 'center';
backToTopButton.style.justifyContent = 'center';
backToTopButton.style.fontSize = '1.2rem';
backToTopButton.style.zIndex = '999';

backToTopButton.addEventListener('mouseenter', () => {
    backToTopButton.style.transform = 'translateY(-5px)';
    backToTopButton.style.boxShadow = '0 5px 15px rgba(255, 71, 87, 0.4)';
});

backToTopButton.addEventListener('mouseleave', () => {
    backToTopButton.style.transform = 'translateY(0)';
    backToTopButton.style.boxShadow = 'none';
});