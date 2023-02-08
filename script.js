const form = document.getElementById('addBook')
// const inputs = document.querySelectorAll('input')
const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const read = document.getElementById('read')
// const remove = document.querySelectorAll('.remove')

const hasReadClick = () => {
  const readButton = document.querySelectorAll('.readButton')
  const e = readButton[readButton.length -1]
  e.addEventListener('click', () => {
  if (e.textContent === 'Read') {
    e.classList.remove('hasRead')
    e.classList.add('hasNotRead')
    e.textContent = 'Not Read'
  } else {
    e.classList.remove('hasNotRead')
    e.classList.add('hasRead')
    e.textContent = 'Read'
  }
  if (e.textContent === 'Read') {
    // change bookList array to turn hasRead to false
    // else the oposite
  }
  console.log(e)
  })
}

hasReadClick()

const bookList = []

function Book(bookTitle, bookAuthor, pageNumber, hasReadBook) {
  this.title = bookTitle
  this.author = bookAuthor
  this.pageNumber = pageNumber
  this.hasRead = hasReadBook
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  bookList.push(new Book(title.value, author.value, pages.value, read.checked));

    const articleContainer = document.querySelector(".articleContainer")
    const newArticle = document.createElement("article")
  
    articleContainer.appendChild(newArticle)

    const userInputArray = [title.value, author.value, pages.value, (read.checked ? 'Read': 'Not Read')]
    const articleClasses = ['title', 'author', 'pages', (read.checked ? 'readButton hasRead': 'readButton hasNotRead')]

    for (let i = 0; i < userInputArray.length; i++) {
      const div = document.createElement('div')
      div.setAttribute('class', articleClasses[i])
      div.textContent = userInputArray[i]
      newArticle.append(div)
      }

    newArticle.setAttribute('data-index', bookList.length -1)

    const button = document.createElement('button')
    button.setAttribute('class', 'remove')
    button.textContent = 'Remove'
    newArticle.append(button)

    const popup = document.querySelector('.popup.active')
    closePopup(popup)
    title.value = ''
    author.value = ''
    pages.value = ''
    read.checked = false
    hasReadClick()
  }
)


// Start of popup user input code
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
// End of popup user input code


// ...To-Do List...

//    modify the bookList hasRead property

// remove button removes the object from bookList array 
//    remove the article element from DOM

// create light/dark theme button
