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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  bookList.push(new Book(title.value, author.value, pages.value, hasRead.checked));

    const articleContainer = document.querySelector(".articleContainer")
    const newArticle = document.createElement("article")
  
    articleContainer.appendChild(newArticle)

    const userInputArray = [title.value, author.value, pages.value, hasRead.checked]
    const articleClasses = ['title', 'author', 'pages', 'hasRead']

    for (let i = 0; i < userInputArray.length; i++) {
      const div = document.createElement('div')
      div.setAttribute('class', articleClasses[i])
      div.textContent = userInputArray[i]
      newArticle.append(div)
      }
    const button = document.createElement('button')
    button.setAttribute('class', 'remove')
    button.textContent = 'Remove'
    newArticle.append(button)
    const popup = document.querySelector('.popup.active')
    closePopup(popup)
  }
)

const openPopupButtons = document.querySelectorAll('[data-popup-target]')
const overlay = document.getElementById('overlay')

openPopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popup = document.querySelector(button.dataset.popupTarget)
    openPopup(popup)
  })
})

overlay.addEventListener('click', () => {
  const popups = document.querySelectorAll('.popup.active')
  popups.forEach(popup => {
    closePopup(popup)
  })
})

function openPopup(popup) {
  if (popup == null) return 
    popup.classList.add('active')
    overlay.classList.add('active')
}
function closePopup(popup) {
  if (popup == null) return 
    popup.classList.remove('active')
    overlay.classList.remove('active')
}

// hide user inputs
// add event listener to display user inputs
// hide user inputs after submit pressed

// toggle the read button style/text content
// modify the objects hasRead property

// remove button removes the object from bookList array 
// remove the article element and contents from DOM
