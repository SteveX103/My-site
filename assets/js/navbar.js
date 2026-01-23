document.addEventListener("DOMContentLoaded", function () {
    fetch("/assets/components/navbar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Navbar fetch failed");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
        })
        .catch(error => {
            console.error(error);
        });
});
