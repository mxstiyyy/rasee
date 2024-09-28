// Scroll Animasyonları için basit örnek
document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.feature, .pricing-box');
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.inner.height;
        
        if (position < windowHeight - 100) {
            el.style.transform = 'translateY(0)';
            el.style.opacity = '1';
        } else {
            el.style.transform = 'translateY(50px)';
            el.style.opacity = '0';
        }
    });
});

// Smooth Scroll özelliği
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
