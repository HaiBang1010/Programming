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
