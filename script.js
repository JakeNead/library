const form = document.getElementById("addBook")
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

function Book(bookTitle, bookAuthor, pageNumber, hasReadBook) {
  this.title = bookTitle
  this.author = bookAuthor
  this.pageNumber = pageNumber
  this.hasRead = hasReadBook
}

// let currentBook = {}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  bookList.push(new Book(title.value, author.value, pages.value, hasRead.checked));
  // currentBook = bookList.slice(-1)[0]

    const articleContainer = document.querySelector(".articleContainer")
    const newArticle = document.createElement("article")
  
    articleContainer.appendChild(newArticle)

    const userInputArray = [title.value, author.value, pages.value, hasRead.checked]
    const articleClasses = ['title', 'author', 'pages', 'hasRead']

    for (let i = 0; i < userInputArray.length; i++) {
      const div = document.createElement("div")
      div.setAttribute('class', articleClasses[i])
      div.textContent = userInputArray[i]
      newArticle.append(div)
      }
  
}
)
