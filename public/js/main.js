document.addEventListener('DOMContentLoaded', () => {
    // Example: Display flash messages
    const flashMessages = document.querySelector('.flash-messages');
    if (flashMessages) {
        setTimeout(() => {
            flashMessages.remove(); // Remove flash message after 3 seconds
        }, 3000);
    }

    // Example: Form validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (event) => {
            const title = document.getElementById('title').value;
            if (!title) {
                event.preventDefault(); // Prevent form submission
                alert('Title is required!');
            }
        });
    }
});
