document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
       var title = document.getElementById('title');
       title.innerHTML = 'Wróć do nas!';
    } else {
       var title = document.getElementById('title');
       title.innerHTML = 'ULMA';
    }
 });
 