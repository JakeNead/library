const myLibrary = [{
  title: 'The Final Empire',
  author: 'Brandon Sanderson',
  pageNumber: 541,
  hasRead: true,
},
{
  title: 'The Tao of Pooh',
  author: 'Benjamin Hoff',
  pageNumber: 158,
  hasRead: true,
},
{
  title: 'East of Eden',
  author: 'John Steinbeck',
  pageNumber: 608,
  hasRead: true,
}];

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
