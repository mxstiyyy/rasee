document.addEventListener("DOMContentLoaded", function () {
    // Preloader animasyonunu gizle
    const preloader = document.querySelector('.preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);

    // Yorum gönderme işlemi
    const commentForm = document.getElementById('commentForm');
    const commentInput = document.getElementById('commentInput');
    const commentList = document.getElementById('commentList');

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const commentText = commentInput.value.trim();
        if (commentText !== '') {
            const commentItem = document.createElement('li');
            commentItem.textContent = commentText;
            commentList.appendChild(commentItem);
            commentInput.value = '';

            // Küfür filtreleme (basit bir örnek)
            const badWords = ['kötükelime1', 'kötükelime2'];
            badWords.forEach(word => {
                if (commentText.includes(word)) {
                    commentItem.textContent = "Bu yorum silindi.";
                }
            });
        }
    });
});
