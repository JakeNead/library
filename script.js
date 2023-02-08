const form = document.getElementById('addBook')
const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const read = document.getElementById('read')

const bookList = [{
  title: 'Sample Book Title',
  author: 'Author\'s Name',
  pages: 1234,

}]

function Book(bookTitle, bookAuthor, pageNumber, hasReadBook) {
  this.title = bookTitle
  this.author = bookAuthor
  this.pageNumber = pageNumber
  this.hasRead = hasReadBook
}

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

  if (e.textContent === 'Not Read') {
    bookList[(e.parentElement.getAttribute('data-index'))].hasRead = false
  } else if (e.textContent === 'Read') {
    bookList[(e.parentElement.getAttribute('data-index'))].hasRead = true
  }
  })
}
hasReadClick()

const removeBookClick = () => {
  const remove = document.querySelectorAll('.remove')
  const e = remove[remove.length-1]
  e.addEventListener('click', () => { 
    if(confirm('Are you sure you want to permanently remove this book?')) {
      bookList.splice(e.parentElement.getAttribute('data-index'))
      e.parentElement.remove()
    }
  }
)}
removeBookClick()

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
    removeBookClick()
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