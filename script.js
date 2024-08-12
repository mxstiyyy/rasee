// Scroll to Top Button
window.addEventListener('scroll', () => {
    const button = document.querySelector('.scroll-to-top');
    if (window.scrollY > 300) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
