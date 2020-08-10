const searchNews = document.getElementById('search-news');
const submit = document.getElementById('submit-btn');
const showNews1 = document.getElementById('show-news1');
const showNews2 = document.getElementById('show-news2');
const showNews3 = document.getElementById('show-news3');
const bottomLeft = document.getElementById('bottom-left');
const bottomRight = document.getElementById('bottom-right');
const newsLeft = document.getElementById('news-left');
const newsRight = document.getElementById('news-right');
const newsBottom = document.getElementById('news-bottom');
const newsTop = document.getElementById('news-top');
const newsMiddle = document.getElementById('news-middle');
const newsMin = document.getElementById('news-min');
const newsMid = document.getElementById('news-mid');
const newsMax = document.getElementById('news-max');
const hero = document.getElementById('hero');
const heroText = document.getElementById('hero-text');
const topCard = document.getElementById('top-card');
const bottomCard = document.getElementById('bottom-card');
const leftCard = document.getElementById('left-card');
const bottomLeftCard = document.getElementById('bottomleft-card');
const rightCard = document.getElementById('right-card');


const getNews = async() => {
    const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=OtN5TgEakuRqnuUsHHxWTfMISpfrrAV7
    `)
    let data = await res.json();
    console.log(data)
    const details = data.results;

  const show1 =   `
<div class="card card-top" >
    <img src =${details[0].multimedia[0].url}  class="card-img-top image img-fluid" alt="...">
    <div class="card-body">
      <h3 class="card-title">${details[0].title}</h3>
      <h4 class="card-text" >${details[0].abstract}</h4>
      <h6 class="card-text" style=" font-family: cursive"> ${details[0].byline}</h6>       
    </div>
</div> 
    `
  showNews1.innerHTML = show1;


  const show2 =   `
  <div class="card card-top">
      <img src =${details[1].multimedia[0].url} class="card-img-top image img-fluid" alt="...">
      <div class="card-body">
        <h3 class="card-title">${details[1].title}</h3>
        <h4 class="card-text" >${details[1].abstract}</h4>
        <h6 class="card-text" style=" font-family: cursive"> ${details[1].byline}</h6>     
      </div>
  </div> 
      `
  showNews2.innerHTML = show2;


  const show3 =   `
<div class="card card-top">
    <img src =${details[2].multimedia[0].url} class="card-img-top image img-fluid" alt="...">
    <div class="card-body">
      <h3 class="card-title">${details[2].title}</h3>
      <h4 class="card-text" >${details[2].abstract}</h4>
      <h6 class="card-text" style=" font-family: cursive"> ${details[2].byline}</h6>          
    </div>
</div> 
    `
  showNews3.innerHTML = show3;


  const left =   `
<div class="card card-bottom">
      <img src =${details[4].multimedia[0].url} class="card-img-top image img-fluid" alt="..." style = "height: 400px">
      <div class="card-body card-dark" >
        <h3 class="card-title">${details[4].title}</h3>
        <h4 class="card-text" >${details[4].abstract}</h4>
        <h6 class="card-text" style=" font-family: cursive"> ${details[4].byline}</h6>      
        <h6>${details[4].section}</h6>       
      </div>
</div> 
      `
  bottomLeft.innerHTML = left;

  const right =   `
  <div class="card card-bottom">
      <img src =${details[3].multimedia[0].url} class="card-img-top image img-fluid" alt="..." style = "height: 400px">
      <div class="card-body card-dark"  >
        <h3 class="card-title">${details[3].title}</h3>
        <h4 class="card-text" >${details[3].abstract}</h4>
        <h6 class="card-text" style=" font-family: cursive"> ${details[3].byline}</h6>     
        <h6>${details[3].section}</h6>  
      </div>
    </div> 
      `
  bottomRight.innerHTML = right;

  const rightNews =   `
      <img src =${details[6].multimedia[0].url} " class = "img-fluid">
      `
    newsRight.innerHTML = rightNews;

  const leftNews =   `
      <h1>${details[6].title}</h1>
      <h3>${details[6].abstract}</h3>
      <h5>${details[6].byline}</h5>
      <h6>${details[6].published_date}</h6>
      <h6>${details[6].section}</h6><br> 

      <h1>${details[23].title}</h1>
      <h3>${details[23].abstract}</h3>
      <h5>${details[23].byline}</h5>
      <h6>${details[23].published_date}</h6>
      <h6>${details[23].section}</h6> ` 
     
    newsLeft.innerHTML = leftNews;

  const bottomNews =   `
      <h1>${details[7].title}</h1>
      <h3>${details[7].abstract}</h3>
      <h5>${details[7].byline}</h5>
      <h6>${details[7].published_date}</h6>
      <h6>${details[7].section}</h6>
      `
    newsBottom.innerHTML = bottomNews;

    const middleNews =   `
      <img src =${details[7].multimedia[0].url} " class = "img-fluid">
      `
    newsMiddle.innerHTML = middleNews;

    const topNews =   `
     <h1>${details[11].title}</h1>
     <h3>${details[11].abstract}</h3>
     <h5>${details[11].byline}</h5>
     <h6>${details[11].published_date}</h6>
     <h6>${details[11].section}</h6>
      `
    newsTop.innerHTML = topNews;

    const minNews =   `
    <img src =${details[9].multimedia[0].url} " class = "img-fluid">
   
    `
  newsMin.innerHTML = minNews;

  const midNews =   `
  <h1>${details[8].title}</h1>
  <h3>${details[8].abstract}</h3>
  <h5>${details[8].byline}</h5>
  <h6>${details[8].published_date}</h6>
  <h6>${details[8].section}</h6>
  <a href = ${details[8].url}>Continue Reading</a>
  `
newsMid.innerHTML = midNews;

  const maxNews =   `
  <h1>${details[9].title}</h1>
  <h3>${details[9].abstract}</h3>
  <h5>${details[9].byline}</h5>
  <h6>${details[9].published_date}</h6>
  <h6>${details[9].section}</h6>
  <a href = ${details[8].url}>Continue Reading</a>
  `
newsMax.innerHTML = maxNews;

const heroImage =   `
<img src =${details[1].multimedia[0].url} " class = "img-fluid hero-img"/>
`
hero.innerHTML = heroImage;

const cardLeft = `
<div class="card" style="width: 100%; height: 48rem">
  <img src =${details[16].multimedia[0].url}  class="card-img-top card-img img-fluid" alt="...">
  <div class="card-body">
    <h5 class="card-title">${details[16].title}</h5>
    <p class="card-text">${details[16].abstract}.</p>
    <a href=${details[16].url} class="card-link">Continue</a>
  </div>
</div>
`
leftCard.innerHTML = cardLeft;


const cardTop = `
<div class="card height">
  <div class="card-body bg-light text-info">
    <h5 class="card-title">${details[17].title}</h5>
    <p class="card-text">${details[17].abstract}.</p>
    <a href=${details[17].url} class="card-link">Continue</a> 
  </div>
</div>
`
topCard.innerHTML = cardTop;

const cardBottom = `
<div class="card height" >
  <div class="card-body bg-light text-danger">
    <h5 class="card-title">${details[18].title}</h5>
    <p class="card-text">${details[18].abstract}.</p>
    <a href=${details[18].url} class="card-link">Continue</a>
  </div>
</div>
`
bottomCard.innerHTML = cardBottom;

const cardLeftBottom = `
<div class="card height">
  <div class="card-body bg-light text-info">
    <h5 class="card-title ">${details[19].title}</h5>
    <p class="card-text">${details[19].abstract}.</p>
    <a href=${details[19].url} class="card-link">Continue</a>
  </div>
</div>
`
bottomLeftCard.innerHTML = cardLeftBottom;

const cardRight = `
<div class="card height">
  <div class="card-body bg-light text-danger">
    <h5 class="card-title">${details[20].title}</h5>
    <p class="card-text">${details[20].abstract}.</p>
    <a href=${details[20].url} class="card-link">Continue</a>
  </div>
</div>
`
rightCard.innerHTML = cardRight;  
}

window.addEventListener('DOMContentLoaded', getNews)
