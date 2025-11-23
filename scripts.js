document.addEventListener('DOMContentLoaded', () => {
    // Update copyright year
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear().toString();
    }

    // Handle hero search form
    const heroForm = document.querySelector('.hero-form');
    if (heroForm) {
        heroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const destination = document.getElementById('destination');
            const checkin = document.getElementById('checkin');
            const guests = document.getElementById('guests');
            
            if (destination && destination.value.trim()) {
                // Simulate search functionality
                alert(`Searching for trips to ${destination.value.trim()}...`);
                
                // Reset form
                destination.value = '';
                if (checkin) checkin.value = '';
                if (guests) guests.value = '2-adults-0-children-1-room';
            } else {
                alert('Please enter a destination to search.');
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effects to destination cards
    const destinationCards = document.querySelectorAll('.destination-card:not(.placeholder)');
    destinationCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Header scroll effect
    const header = document.querySelector('.site-header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#fff';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
});

