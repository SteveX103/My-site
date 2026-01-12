document.addEventListener("DOMContentLoaded", () => {
    fetch("assets/components/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
        })
        .catch(error => {
            console.error("Navbar load failed:", error);
        });
});
