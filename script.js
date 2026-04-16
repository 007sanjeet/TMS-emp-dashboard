document.addEventListener("DOMContentLoaded", function() {
    const sidebarToggle = document.getElementById("sidebarToggle");
    const sidebar = document.getElementById("sidebar");

    if (sidebarToggle) {
        sidebarToggle.addEventListener("click", function() {
            sidebar.classList.toggle("show");
        });
    }

    // Optional: Close sidebar if clicking outside on mobile
    document.addEventListener("click", function(event) {
        if (window.innerWidth < 992) {
            if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
                sidebar.classList.remove("show");
            }
        }
    });
});