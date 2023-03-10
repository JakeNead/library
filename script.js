/* eslint-disable no-use-before-define */

const library = {
  bookList: [
    {title: 'Sample Book Title',
    author: 'Author\'s Name',
    pages: 1234,
    hasRead: true
    }, 
    {title: 'Sample Book Title',
    author: 'Author\'s Name',
    pages: 1234,
    hasRead: true
    },
    {title: 'Sample Book Title',
    author: 'Author\'s Name',
    pages: 1234,
    hasRead: true},
],

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
    this.popupButton = document.querySelector('[data-popup-target]')
    this.popup = document.querySelector('.popup')
    this.overlay = document.getElementById('overlay')
  },  
  render() {
    this.clearPage(this.articleContainer)
    this.addBookElements()
    this.bindEvents()
  },
  bindEvents() {
    this.form.addEventListener('submit', e => {
      e.preventDefault()
      this.bookList.push(new Book(title.value, author.value, pages.value, read.checked))
      this.render()
    })
    this.popupButton.addEventListener('click', () => {
      this.openPopup(this.popup)
    })
    this.overlay.addEventListener('click', () => {
      this.closePopup(this.popup)
    })
      this.readToggle()
  },
  clearPage(node) {
    while(node.hasChildNodes()) {
      node.removeChild(node.firstChild)
    }
  },
  addBookElements() { 
    let n = 0
    this.bookList.forEach(book => {    
      this.newArticle = document.createElement("article")
      this.articleContainer.appendChild(this.newArticle)   
      const divContent = [book.title, book.author, book.pages, book.hasRead ? 'Read': 'Has not read']
      const articleClasses = ['title', 'author', 'pages', (book.hasRead ? 'readButton hasRead': 'readButton hasNotRead')]
    
      for (let i = 0; i < divContent.length; i++) {
        const div = document.createElement('div')
        div.setAttribute('class', articleClasses[i])
        div.textContent = divContent[i]
        this.newArticle.append(div)
      }
    this.newArticle.setAttribute('data-index', (n+=1) )
    const button = document.createElement('button')
    button.setAttribute('class', 'remove')
    button.textContent = 'Remove'
    this.newArticle.append(button)
    })
  },
  openPopup(popup) {
    if (popup == null) return 
      popup.classList.add('active')
      this.overlay.classList.add('active')
  },
  closePopup(popup) {
      if (popup == null) return 
        this.popup.classList.remove('active')
        this.overlay.classList.remove('active')
    },
  readToggle(){
    const readButton = document.querySelectorAll('.readButton')
    readButton.forEach(btn => btn.addEventListener('click', () => {
      if (btn.textContent === 'Read') {
        btn.classList.remove('hasRead')
        btn.classList.add('hasNotRead')
        btn.textContent = 'Not Read'
        this.bookList[btn.parentElement.getAttribute('data-index')-1].hasRead = false
      } else {
        btn.classList.remove('hasNotRead')
        btn.classList.add('hasRead')
        btn.textContent = 'Read'
        this.bookList[btn.parentElement.getAttribute('data-index')-1].hasRead = true
      } 
      }))
  }
}

class Book {
  constructor (bookTitle, bookAuthor, pageNumber, hasReadBook) {
    this.title = bookTitle
    this.author = bookAuthor
    this.pageNumber = pageNumber
    this.hasRead = hasReadBook
  }
}

library.init()

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

