let navbar1 = document.getElementById("navbar");
let navbar2 = document.getElementById("navbar2");
let mobileBtn = document.getElementById("mobile");
let closeBtn = document.getElementById("close");
let lang = document.getElementById("site-lang-box")

mobileBtn.addEventListener("click", () => {
    navbar1.classList.add("active");
    navbar2.classList.add("active");
    closeBtn.classList.add("active");
    mobileBtn.classList.add("active");
    lang.classList.add("active");
})

closeBtn.addEventListener("click", () => {
    navbar1.classList.remove("active");
    navbar2.classList.remove("active");
    closeBtn.classList.remove("active");
    mobileBtn.classList.remove("active");
    lang.classList.remove("active");
})
