document.addEventListener('DOMContentLoaded', function () {
    // Get the menu icon and the dropdown menu
    var menuIcon = document.getElementById('menu-icon');
    var dropdownMenu = document.getElementById('dropdown-menu');

    // Add a click event listener to the menu icon
    menuIcon.addEventListener('click', function () {
        // Toggle the visibility of the dropdown menu
        if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
            dropdownMenu.style.display = 'block';
        } else {
            dropdownMenu.style.display = 'none';
        }
    });

    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (!event.target.matches('#menu-icon')) {
            dropdownMenu.style.display = 'none';
        }
    });
});