let eduBtn = document.getElementById("cv-edu");
let workBtn = document.getElementById("cv-work");
let eduCont = document.getElementById("cv-edu-cont");
let workCont = document.getElementById("cv-work-cont");

eduBtn.addEventListener("click", () => {
    eduCont.classList.remove("hidden");
    workCont.classList.add("hidden");
    eduBtn.style.color = "var(--green)";
    workBtn.style.color = "var(--darkgreen)";
})

workBtn.addEventListener("click", () => {
    workCont.classList.remove("hidden");
    eduCont.classList.add("hidden");
    workBtn.style.color = "var(--green)";
    eduBtn.style.color = "var(--darkgreen)";
})