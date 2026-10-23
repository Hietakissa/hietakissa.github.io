const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
});

document.addEventListener("pointerover", (event) => {
    if (event.target.closest("a, button")) {
        cursor.classList.add("hovering");
    }
});

document.addEventListener("pointerout", (event) => {
    const from = event.target.closest("a, button");
    const to = event.relatedTarget?.closest?.("a, button");

    if (from && from !== to) {
        cursor.classList.toggle("hovering", Boolean(to));
    }
});