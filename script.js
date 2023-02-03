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
   
    const div = document.createElement("div")
    articleContainer.appendChild(newArticle)

    // div.textContent = title.value
    // div.setAttribute('class', 'title')
    // newArticle.appendChild(div)

    // div.textContent = author.value
    // div.setAttribute('class', 'author')
    // newArticle.appendChild(div)

    // div.textContent = pages.value
    // div.setAttribute('class', 'pages')
    // newArticle.appendChild(div)



    const userInputArray = [title.value, author.value, pages.value, hasRead.checked]
    const articleClasses = ['title', 'author', 'pages', 'hasRead']
    
    for (let i = 0; i < userInputArray.length; i++) {
      div.setAttribute('class', articleClasses[i])
      div.textContent = userInputArray[i]
      newArticle.append(div)
      }
    // function createContainer (val) {
    //   div.setAttribute('class', val)
    //   div.textContent = userInputArray[i]
    // }
  
    
  
    console.log(userInputArray)
}
)


// function addNewArticle(title, author, pages, hasRead){
  
// }
