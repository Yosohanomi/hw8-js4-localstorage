document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("bookmarkInput"),t=document.getElementById("addBookmarkBtn"),u=document.getElementById("bookmarkList"),n=JSON.parse(localStorage.getItem("bookmarks"))||[];function i(){localStorage.setItem("bookmarks",JSON.stringify(n))}function l(){if(u.innerHTML="",0===n.length){u.innerHTML='<li class="empty-message">Немає закладок. Додайте першу!</li>';return}n.forEach((e,t)=>{let d=document.createElement("li");if(e.editing){d.innerHTML=`
                    <div class="edit-form">
                        <input type="text" class="edit-url" value="${e.url}" placeholder="URL">
                        <div class="edit-form-buttons">
                            <button class="save-edit">\u{417}\u{431}\u{435}\u{440}\u{435}\u{433}\u{442}\u{438}</button>
                            <button class="cancel-edit">\u{421}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438}</button>
                        </div>
                    </div>
                `;let u=d.querySelector(".save-edit"),a=d.querySelector(".cancel-edit"),o=d.querySelector(".edit-url");u.addEventListener("click",()=>{let e=o.value.trim();e&&r(e)?(n[t].url=e,n[t].editing=!1,i(),l()):alert("Будь ласка, введіть правильний URL")}),a.addEventListener("click",()=>{n[t].editing=!1,i(),l()})}else{d.innerHTML=`
                    <div class="bookmark-content">
                        <a href="${e.url}" target="_blank">${e.url}</a>
                    </div>
                    <div class="bookmark-actions">
                        <button class="edit">\u{420}\u{435}\u{434}\u{430}\u{433}\u{443}\u{432}\u{430}\u{442}\u{438}</button>
                        <button class="delete">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
                    </div>
                `;let u=d.querySelector(".delete"),r=d.querySelector(".edit");u.addEventListener("click",()=>{n.splice(t,1),i(),l()}),r.addEventListener("click",()=>{n[t].editing=!0,i(),l()})}u.appendChild(d)})}function r(e){try{return new URL(e),!0}catch(e){return!1}}function d(){let t=e.value.trim();t&&r(t)?(n.push({url:t,editing:!1}),i(),l(),e.value=""):alert("Будь ласка, введіть правильний URL (наприклад: https://example.com)")}t.addEventListener("click",d),e.addEventListener("keypress",function(e){"Enter"===e.key&&d()}),l()});
//# sourceMappingURL=hw8-js4-localstorage.2f68a99c.js.map
