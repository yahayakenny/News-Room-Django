const input = document.getElementById('input')
const search = document.getElementById('search')
const showMovies = document.getElementById('show-movies')

const getMovie = async() => {
   const response = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${input.value}&api-key=OtN5TgEakuRqnuUsHHxWTfMISpfrrAV7`)

   const data = await response.json();
   console.log(data)
   let details = data.results;
    console.log(details)

   const movies = details.map (item => {
       return `
       <div class="container-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                <div class="card bg-dark text-light" style="width: 80%;">
                <div class="card-body">
                  <h5 class="card-title">${item.display_title}</h5>         
                  <p class="card-text">${item.headline}</p>
                  <p class="card-text">${item.summary_short}</p>
                  <a href= ${item.link.url} class="card-link">Read More..</a>   
                </div>
            </div>           
                 </div>
             </div>
        </div>
       `  
   }).join('')
   showMovies.innerHTML = movies 
}

search.addEventListener('click', getMovie)