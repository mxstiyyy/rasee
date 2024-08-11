// Preloader
window.addEventListener('load', () => {
    document.querySelector('.preloader').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.preloader').style.display = 'none';
    }, 500);
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Navbar Toggle for Mobile
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('open');
});

// Comment Section
const commentForm = document.getElementById('commentForm');
const commentInput = document.getElementById('commentInput');
const commentList = document.getElementById('commentList');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const commentText = commentInput.value.trim();
    if (commentText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = commentText;

        // Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Sil';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            commentList.removeChild(listItem);
        });

        listItem.appendChild(deleteBtn);
        commentList.appendChild(listItem);
        commentInput.value = '';
    }
});
