const myLibrary = [];

function Book(title, author, pageNumber, hasRead) {
  const book = Object.create(Book.prototype)
  this.title = title
  this.author = author
  this.pageNumber = pageNumber
  this.hasRead = hasRead
  return book
}

function addBookToLibrary() {

}
