const form = document.querySelector("#addBook")
// const inputs = document.querySelectorAll('input')
// const submitButton = document.getElementById('submit')
const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const hasRead = document.getElementById('read')

const bookList = [{
  title: 'The Final Empire',
  author: 'Brandon Sanderson',
  pageNumber: 541,
  hasRead: true,
}]

// {
//   title: 'The Tao of Pooh',
//   author: 'Benjamin Hoff',
//   pageNumber: 158,
//   hasRead: true,
// },
// {
//   title: 'East of Eden',
//   author: 'John Steinbeck',
//   pageNumber: 608,
//   hasRead: false,
// }

function Book(bookTitle, bookAuthor, pageNumber, hasReadBook) {
  this.title = bookTitle
  this.author = bookAuthor
  this.pageNumber = pageNumber
  this.hasRead = hasReadBook
}


form.addEventListener('submit', (e) => {
   e.preventDefault();
  bookList.push(new Book(title.value, author.value, pages.value, hasRead.checked));
  const articleContainer = document.getElementsByClassName('articleContainer')
  const newArticle = document.createElement('Article')
  articleContainer.appendChild(newArticle)
  const newDiv = document.createElement('div')
  newDiv.textContent = title.value
  newArticle.appendChild(newDiv)
  newDiv.textContent = author.value
  newArticle.appendChild(newDiv)
  newDiv.textContent = pages.value
  newArticle.appendChild(newDiv)

}
)


// function displayNewBook() {
//   bookList.forEach(obj => )
// }

// const articleContainer = document.getElementsByClassName('articleContainer')
// const newArticle = document.createElement('Article')
// articleContainer.appendChild(newArticle)
// const newDiv = document.createElement('div')
// newDiv.textContent = title.value
// newArticle.appendChild(newDiv)
// newDiv.textContent = author.value
// newArticle.appendChild(newDiv)
// newDiv.textContent = pages.value
// newArticle.appendChild(newDiv)

  // search for articleContainer
  // create new article element
  // append new article to articleContainer
  // create new divs
// add content to divs
// append divs to article element