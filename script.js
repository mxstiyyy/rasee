// Preloader animasyonu kaldırma
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// Menü Toggle İşlemi
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});

// Yorumlar Form İşlemleri
const commentForm = document.getElementById('commentForm');
const commentList = document.getElementById('commentList');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const commentInput = document.getElementById('commentInput');
    const newComment = document.createElement('li');
    newComment.textContent = commentInput.value;

    // Küfür filtresi
    const badWords = ['badword1', 'badword2', 'küfür1', 'küfür2']; // İstenmeyen kelimeler
    let isClean = true;
    badWords.forEach(word => {
        if (newComment.textContent.toLowerCase().includes(word)) {
            isClean = false;
        }
    });

    if (isClean) {
        commentList.appendChild(newComment);
        commentInput.value = '';
    } else {
        alert('Küfür veya istenmeyen içerik algılandı.');
    }
});
