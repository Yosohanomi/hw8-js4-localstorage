document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const saveBtn = document.getElementById('saveBtn');
    
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
        usernameInput.value = savedData.username || '';
        passwordInput.value = savedData.password || '';
    }
    
    saveBtn.addEventListener('click', function() {
        const formData = {
            username: usernameInput.value,
            password: passwordInput.value
        };
        
        localStorage.setItem('formData', JSON.stringify(formData));
        alert('Дані збережено!');
    });
});

// з 9 теми веб-сховища: setItem(key, value) –—зберегти пару ключ/значення.
// getItem(key) — отримати значення за ключем.