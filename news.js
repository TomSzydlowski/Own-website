let newsAll = document.getElementById("news");
let newsBox = document.getElementById("news-box-id")

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateNews = () => {
    return (newsAll.innerHTML = newsData
      .map((x) => {
        let { id, date, img, title, desc, more, link } = x;
        let search = basket.find((x) => x.id === id) || [];
        return `
  
        <div class="news-box" id=>
            <div class="news-img" ${id}>
                <img src=${img} alt="">
            </div>
            <div class="news-details">
                <h4>${title}</h4>
                <p>${desc}</p>
            <a href=${link} target="_blank">${more}</a>
            </div>
            <h1>${date}</h1>
        </div>
      `;
      })
      .join(""));
  };
  
  generateNews()