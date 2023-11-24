document.addEventListener("DOMContentLoaded", function() {
    const contentBoxes = document.querySelectorAll('.content-box1, .content-box2, .content-box3');
    
    contentBoxes.forEach(function(box) {
        box.classList.add('active');
    });
});