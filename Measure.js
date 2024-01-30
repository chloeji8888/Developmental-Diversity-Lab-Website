document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.title').forEach(function(title) {
        title.addEventListener('click', function () {
            var container = this.parentNode;
            var content = container.querySelector('.content');
            if (content.style.display === 'none') {
                content.style.display = 'block';
                container.classList.add('active');
            } else {
                content.style.display = 'none';
                container.classList.remove('active');
            }
        });
    });
});
