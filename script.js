const icon = document.querySelector(".nav-icon");
const navmenu = document.querySelector(".nav-menu");

icon.addEventListener("click", () => {
    icon.classList.toggle("active");
    navmenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    icon.classList.remove("active");
    navmenu.classList.remove("active");
}))