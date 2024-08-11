document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1500);

    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navBar = document.getElementById('nav-bar');
    hamburger.addEventListener('click', function() {
        navBar.classList.toggle('open');
    });

    // Carousel Animation
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    setInterval(() => {
        carouselItems[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].style.display = 'block';
    }, 3000);

    // Comment Form Submission
    const commentForm = document.getElementById('commentForm');
    const commentList = document.getElementById('commentList');
    const commentInput = document.getElementById('commentInput');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const commentText = commentInput.value.trim();
        if (commentText !== '') {
            const newComment = document.createElement('li');
            newComment.textContent = commentText;
            commentList.appendChild(newComment);
            commentInput.value = '';
        }
    });

    // Basic Comment Moderation (Filtering Offensive Words)
    const badWords = ["badword1", "badword2", "badword3"]; // Replace with actual words to filter
    commentList.addEventListener('DOMNodeInserted', function(event) {
        const newComment = event.target;
        badWords.forEach(word => {
            if (newComment.textContent.includes(word)) {
                newComment.remove();
            }
        });
    });
});
