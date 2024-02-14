document.addEventListener('DOMContentLoaded', function () {
    var containers = document.querySelectorAll('.content-container');
    // Initialize the display of the content blocks
    containers.forEach(function(container, index) {
        var content = container.querySelector('.content');
        if (index === 0) { // Automatically display the first content
            content.style.display = 'block';
            container.classList.add('active');
        } else { // Hide other contents
            content.style.display = 'none';
        }
    });

    // Add click event listeners to the titles
    document.querySelectorAll('.title').forEach(function(title) {
        title.addEventListener('click', function () {
            var container = this.parentNode;
            var content = container.querySelector('.content');
            // Check if the clicked title's content is already displayed
            var curContent = container.querySelector('.curcontent');
            if (content.style.display === 'none') {
                content.style.display = 'block';
                container.classList.add('active');
            } else if (curContent && content !== curContent) {
                // If there's a .curcontent and it's different from the clicked one, show it
                curContent.style.display = 'block';
                container.classList.add('active');
            } else {
                content.style.display = 'none';
                container.classList.remove('active');
            }
        });
    });
});
