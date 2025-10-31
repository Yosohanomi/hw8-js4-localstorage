document.addEventListener('DOMContentLoaded', function() {
    const bookmarkInput = document.getElementById('bookmarkInput');
    const addBookmarkBtn = document.getElementById('addBookmarkBtn');
    const bookmarkList = document.getElementById('bookmarkList');
    
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    
    function saveBookmarks() {
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    
    function renderBookmarks() {
        bookmarkList.innerHTML = '';
        
        if (bookmarks.length === 0) {
            bookmarkList.innerHTML = '<li class="empty-message">Немає закладок. Додайте першу!</li>';
            return;
        }
        
        bookmarks.forEach((bookmark, index) => {
            const li = document.createElement('li');
            
            if (bookmark.editing) {
                li.innerHTML = `
                    <div class="edit-form">
                        <input type="text" class="edit-url" value="${bookmark.url}" placeholder="URL">
                        <div class="edit-form-buttons">
                            <button class="save-edit">Зберегти</button>
                            <button class="cancel-edit">Скасувати</button>
                        </div>
                    </div>
                `;
                
                const saveBtn = li.querySelector('.save-edit');
                const cancelBtn = li.querySelector('.cancel-edit');
                const urlInput = li.querySelector('.edit-url');
                
                saveBtn.addEventListener('click', () => {
                    const newUrl = urlInput.value.trim();
                    if (newUrl && isValidUrl(newUrl)) {
                        bookmarks[index].url = newUrl;
                        bookmarks[index].editing = false;
                        saveBookmarks();
                        renderBookmarks();
                    } else {
                        alert('Будь ласка, введіть правильний URL');
                    }
                });
                
                cancelBtn.addEventListener('click', () => {
                    bookmarks[index].editing = false;
                    saveBookmarks();
                    renderBookmarks();
                });
            } else {
                li.innerHTML = `
                    <div class="bookmark-content">
                        <a href="${bookmark.url}" target="_blank">${bookmark.url}</a>
                    </div>
                    <div class="bookmark-actions">
                        <button class="edit">Редагувати</button>
                        <button class="delete">Видалити</button>
                    </div>
                `;
                
                const deleteBtn = li.querySelector('.delete');
                const editBtn = li.querySelector('.edit');
                
                deleteBtn.addEventListener('click', () => {
                    bookmarks.splice(index, 1);
                    saveBookmarks();
                    renderBookmarks();
                });
                
                editBtn.addEventListener('click', () => {
                    bookmarks[index].editing = true;
                    saveBookmarks();
                    renderBookmarks();
                });
            }
            
            bookmarkList.appendChild(li);
        });
    }
    
    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }
    
    function addBookmark() {
        const url = bookmarkInput.value.trim();
        
        if (url && isValidUrl(url)) {
            bookmarks.push({ url: url, editing: false });
            saveBookmarks();
            renderBookmarks();
            bookmarkInput.value = '';
        } else {
            alert('Будь ласка, введіть правильний URL (наприклад: https://example.com)');
        }
    }
    
    addBookmarkBtn.addEventListener('click', addBookmark);
    
    bookmarkInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addBookmark();
        }
    });
    
    renderBookmarks();
});