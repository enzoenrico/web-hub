//TODO: make it a env var
const newsApiKey = "01dac775927d4be286dda3e37076434f";

let mouseCoords = { x: 100, y: 100 };
const bodyBG = document.querySelector(".app") as HTMLDivElement;
const specialArr: HTMLDivElement[] | HTMLDivElement = document.querySelector(
  ".special"
) as HTMLDivElement;
const news = document.querySelector(".news") as HTMLDivElement;

type newsData = {
  newsId: string;
  title: string;
  subtext: string | null;
  imageUrl: string | null;
};

let newsFeed: newsData[] = [];

window.addEventListener("load", async (e) => {
  let data = await callNewsApi();
  console.log(data);
  data.articles.slice(0, 10).map((e) => {
    console.log(e);
    const title = e.title;
    const subtitle = e.description;
    console.log(title);
    const newNew = document.createElement("div");
    newNew.className = 'news-element'
    newNew.innerHTML = ` <img src='omgg.png' alt='' class='news-img' /><h1 class='news-title'>${title}</h1><p class='news-subtitle'>${subtitle}</p>`;

    news.appendChild(newNew)
  });
});

setInterval(() => {
  mouseCoords.x += 1;
  mouseCoords.y += 1;

  specialArr.style.backgroundPosition = `${mouseCoords.x}px ${mouseCoords.x}px `;
}, 50);

async function callNewsApi() {
  return fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2023-11-29&sortBy=publishedAt&apiKey=01dac775927d4be286dda3e37076434f"
  ).then((res) => res.json());
}
