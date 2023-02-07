const form = document.getElementById('addBook')
// const inputs = document.querySelectorAll('input')
const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const read = document.getElementById('read')
// const remove = document.querySelectorAll('.remove')

const hasReadItClick = () => {
  hasRead = document.querySelectorAll('.hasRead')
  hasRead.forEach(el => el.addEventListener('click', () => {
  if (el.textContent === 'Read') {
    el.style.backgroundColor = 'var(--red)'
    el.textContent = 'Not Read'
  } else {
    el.style.backgroundColor = 'var(--green)'
    el.textContent = 'Read'
  } 
  }))
}

hasReadItClick()

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
  console.log(form)
  e.preventDefault();
  bookList.push(new Book(title.value, author.value, pages.value, read.checked));

    const articleContainer = document.querySelector(".articleContainer")
    const newArticle = document.createElement("article")
  
    articleContainer.appendChild(newArticle)

    const userInputArray = [title.value, author.value, pages.value, (read.checked ? 'Read': 'Not Read')]
    const articleClasses = ['title', 'author', 'pages', 'hasRead']

    for (let i = 0; i < userInputArray.length; i++) {
      const div = document.createElement('div')
      div.setAttribute('class', articleClasses[i])
      div.textContent = userInputArray[i]

      if (div.textContent === 'Read') {
        div.style.backgroundColor = 'var(--green)'
        } else if (div.textContent === 'Not Read') {
        div.style.backgroundColor = 'var(--red)'
        }   
        newArticle.append(div)
        }
        
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
    hasReadItClick()
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

// toggle the read button style/text content
//    modify the bookList hasRead property

// remove button removes the object from bookList array 
//    remove the article element from DOM

// create light/dark theme button
