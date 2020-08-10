const showBooks = document.getElementById('show-books');
const bookImage = document.getElementById('book-image');

const getBooks = async () => {
  const response = await fetch(
    `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=OtN5TgEakuRqnuUsHHxWTfMISpfrrAV7`
  );
  const data = await response.json();
  console.log(data);
  const details = data.results.books;
  console.log(details);

  const imageBook = details.map(item => {
      return `
      <div class="container book">
      <div class="row">
          <div class="col-md-6 col-sm-12 no-padding">
          <img src = ${item.book_image} class = "image">
              
          </div>
          <div class="col-md-6 col-sm-12 book-text no-padding">
          <h1>Title: ${item.title}</h1>
          <h3>Rank: ${item.rank}</h3>
          <h4>Author: ${item.author}</h4><br>
          <h5>Description: ${item.description}</h5><br>
          <h6>Publisher: ${item.publisher}</h6>
          <h6>ISBN: ${item.isbns[0].isbn10}</h6>
          <h6>Rank Last Week: ${item.rank_last_week}</h6>
          <h6>Weeks on List: ${item.weeks_on_list}</h6><br>
          <div class = "stores">
            <div class = "amazon">
                <a href = ${item.buy_links[0].url}><i class="fab fa-amazon"></i>Amazon Books</a>
            </div>
            <div class = "apple">
                 <a href = ${item.buy_links[1].url}><i class="fab fa-apple"></i>Apple Books</a> 
            </div> 
          </div>
          </div>
      </div>
  </div><hr><br><br>   
      `
  }).join('')
  bookImage.innerHTML = imageBook;
};

window.addEventListener('DOMContentLoaded', getBooks);
