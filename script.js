const form = document.querySelector("#addBook")
const inputs = document.querySelectorAll('input')
const submitButton = document.getElementById('submit')
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
//   hasRead: true,
// }

function Book(bookTitle, bookAuthor, pageNumber, hasReadBook) {
  const book = Object.create(Book.prototype)
  this.title = bookTitle
  this.author = bookAuthor
  this.pageNumber = pageNumber
  this.hasRead = hasReadBook
  return book
}

function addBookToLibrary() {
  // take user input


  // run constructor func
  // push new obj to lib array
  // return bookList.push(Book())
}

form.addEventListener('submit', (e) => {
   e.preventDefault();
  bookList.push(Book(title.value, author.value, pages.value, hasRead.checked))
  console.log(title.value, author.value, pages.value, hasRead.checked)

}
)


// function displayBooks() {

// }


