const clicks = document.querySelectorAll(".click");
const backdrop = document.querySelector(".backdrop");
const body = document.querySelector("body")

clicks.forEach(click => {
    click.addEventListener("click", modalClose);
});

document.addEventListener("keydown", closeHandle);

function modalClose() {
    backdrop.classList.remove("is-open");
    body.classList.remove("no-scroll");
}

function closeHandle(e) {
    if (e.code === "Escape") {
        modalClose();
    }
}