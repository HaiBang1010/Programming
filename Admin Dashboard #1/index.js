Orders.forEach((order) => {
    const tr = document.createElement("tr");
    const trContent = `
        <td>${order.Name}</td>
        <td>${order.Payment}</td>
        <td class="${
            order.Status === "Declined"
                ? "danger"
                : order.Status === "Pending"
                ? "warning"
                : "success"
        }">${order.Status}</td>
        <td>${order.CourseNumber}</td>
        <td class="primary">Detail >></td>
    `;
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);
});

const asideMenu = document.querySelector("aside");
const btnMenu = document.querySelector(".menu");
const btnClose = document.querySelector("#close");
const btnDarkMode = document.querySelector(".dark-mode");

btnMenu.addEventListener("click", () => {
    asideMenu.style.display = "block";
});

btnClose.addEventListener("click", () => {
    asideMenu.style.display = "none";
});

btnDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode-variables");
    btnDarkMode.querySelector("span:nth-child(1)").classList.toggle("active");
    btnDarkMode.querySelector("span:nth-child(2)").classList.toggle("active");
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        asideMenu.style.display = "block";
    }
});
