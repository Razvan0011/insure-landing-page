const btn = document.querySelector(".hamburger");
const body = document.querySelector("body");
const overlay = document.querySelector(".mobile-nav");

btn.addEventListener("click", () => {
    // console.log("it works");
    if (overlay.classList.contains("hide")) {
        overlay.classList.remove("hide");
        body.classList.add("overflow");
        btn.children[0].classList.add("hide");
        btn.children[1].classList.remove("hide");
    } else if (!overlay.classList.contains("hide")) {
        overlay.classList.add("hide");
        body.classList.remove("overflow");
        btn.children[1].classList.add("hide");
        btn.children[0].classList.remove("hide");

    }
});