/* eslint-disable no-use-before-define */

const library = {
  bookList: [{
    title: 'Sample Book Title',
    author: 'Author\'s Name',
    pages: 1234,
    hasRead: true
  }],

  init() {
    this.cacheDom()
    this.render()
  },
  cacheDom() {
    this.form = document.getElementById('addBook')
    this.title = document.getElementById('title')
    this.author = document.getElementById('author')
    this.pages = document.getElementById('pages')
    this.read = document.getElementById('read')
    this.articleContainer = document.querySelector(".articleContainer")
    this.newArticle = document.createElement("article")
    this.button = document.createElement('button')
  },  
  render() {
    this.clearPage(this.articleContainer)
    this.addBookElements()
    this.bindEvents()
  },
  bindEvents() {
    this.form.addEventListener('submit', e => {
      const book = new Book(e.title.value, e.author.value, e.pages.value, e.read.checked)
      this.render()
    }) 
  },

  clearPage(node) {
    while(node.firstChild) {
      node.removeChild(node.firstChild)
    }
  },
  addBookElements() { 
    let n = 0
    this.bookList.forEach(book => {    
      this.articleContainer.appendChild(this.newArticle)   
      const divContent = [book.title, book.author, book.pages, book.hasRead]
      const articleClasses = ['title', 'author', 'pages', (book.hasRead ? 'readButton hasRead': 'readButton hasNotRead')]
    
      for (let i = 0; i < divContent.length; i++) {
        const div = document.createElement('div')
        div.setAttribute('class', articleClasses[i])
        div.textContent = divContent[i]
        this.newArticle.append(div)
      }
    this.newArticle.setAttribute('data-index', (n+=1) )
    this.addRemoveButton()
    })
  },

  addRemoveButton() {
    this.button.setAttribute('class', 'remove')
    this.button.textContent = 'Remove'
    return this.newArticle.append(this.button)
  }

}

class Book {
  constructor (bookTitle, bookAuthor, pageNumber, hasReadBook) {
    this.title = bookTitle
    this.author = bookAuthor
    this.pageNumber = pageNumber
    this.hasRead = hasReadBook

    library.bookList.push(this) // does this work?
  }
}

library.init()


// const hasReadClick = () => {
//   const readButton = document.querySelectorAll('.readButton')
//   const e = readButton[readButton.length -1]
//   e.addEventListener('click', () => {
//   if (e.textContent === 'Read') {
//     e.classList.remove('hasRead')
//     e.classList.add('hasNotRead')
//     e.textContent = 'Not Read'
//   } else {
//     e.classList.remove('hasNotRead')
//     e.classList.add('hasRead')
//     e.textContent = 'Read'
//   } 

//   if (e.textContent === 'Not Read') {
//     bookList[(e.parentElement.getAttribute('data-index'))].hasRead = false
//   } else if (e.textContent === 'Read') {
//     bookList[(e.parentElement.getAttribute('data-index'))].hasRead = true
//   }
//   })
// }
// hasReadClick()

// const removeBookClick = () => {
//   const remove = document.querySelectorAll('.remove')
//   const e = remove[remove.length-1]
//   e.addEventListener('click', () => { 
//     if(window.confirm('Are you sure you want to permanently remove this book?')) {
//       bookList.splice(e.parentElement.getAttribute('data-index'))
//       e.parentElement.remove()
//     }
//   }
// )}
// removeBookClick()

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   bookList.push(new Book(title.value, author.value, pages.value, read.checked))

//     closePopup(popup)
//     title.value = ''
//     author.value = ''
//     pages.value = ''
//     read.checked = false
//     hasReadClick()
//     removeBookClick()
//   }
// )

// const openPopupButtons = document.querySelectorAll('[data-popup-target]')
// const overlay = document.getElementById('overlay')

// openPopupButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const popup = document.querySelector(button.dataset.popupTarget)
//     openPopup(popup)
//   })
// })
// overlay.addEventListener('click', () => {
//   const popups = document.querySelector('.popup.active')
//   closePopup(popups)
// })
// function openPopup(popup) {
//   if (popup == null) return 
//     popup.classList.add('active')
//     overlay.classList.add('active')
// }
// function closePopup(popup) {
//   if (popup == null) return 
//     popup.classList.remove('active')
//     overlay.classList.remove('active')
// }

// _________________________________________________________________

