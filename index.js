let frontAll = document.getElementById("projects");
let designAll = document.getElementById("engineer-projects")
let frontend = document.getElementById("projects-front");
let design = document.getElementById("projects-constraction")

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateFrontendProjects = () => {
  return (frontend.innerHTML = frontendProjectsData
    .map((x) => {
      let { id, name, desc, img, href1, href2 } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `

        <div class="pro" id=${id}>
            <a href=${href1} target="_blank"><img class="p-img" src=${img} alt="" ></a>
            <div class="p-info">
                <h1>${name}</h1>
                <a href=${href2} target="_blank"><i class="fa-brands fa-github p-icons"></i></a>
                <h2>${desc}</h2>
            </div>  
        </div>
    `;
    })
    .join(""));
};

generateFrontendProjects()

let designBtn = document.getElementById("btn-constuction");
let frontendBtn = document.getElementById("btn-front");
let background = document.getElementsByTagName("body")

designBtn.addEventListener("click", () => {
    frontAll.classList.add("hidden");
    designAll.classList.remove("hidden");
})

frontendBtn.addEventListener("click", () => {
    designAll.classList.add("hidden");
    frontAll.classList.remove("hidden");

})






