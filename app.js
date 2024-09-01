const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const menuItems = document.querySelectorAll(".off-screen-menu ul li");

hamMenu.addEventListener("click", () => {
    if (offScreenMenu.classList.contains("active")) {
        // Add the closing animation class
        menuItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add("closing");
        });

        setTimeout(() => {
            hamMenu.classList.toggle("active");
            offScreenMenu.classList.toggle("active");

            menuItems.forEach((item) => {
                item.classList.remove("closing");
                item.style.animationDelay = '';
            });
        }, 250);
    } else {
        hamMenu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");
    }
});
