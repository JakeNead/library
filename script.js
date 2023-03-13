/* eslint-disable no-use-before-define */

(() => {
  const library = {
    bookList: [
      {title: 'Sample Book Title',
      author: 'Author\'s Name',
      pageNumber: 1234,
      hasRead: true
      }
    ],

    init() {
      this.cacheDom()
      this.bindEvents()
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
      this.clearPage()
      this.addBookElements()
    },

    bindEvents() {
      this.form.addEventListener('submit', e => {
        e.preventDefault()
        this.bookList.push(new Book(title.value, author.value, pages.value, read.checked))
        this.form.title.value = ''
        this.form.author.value = ''
        this.form.pages.value = ''
        this.form.read.checked = false
        this.closePopup(this.popup)
        this.render()
      })
      this.popupButton.addEventListener('click', () => {
        this.openPopup(this.popup)
      })
      this.overlay.addEventListener('click', () => {
        this.closePopup(this.popup)
      })
    },

    clearPage() {
      while(this.articleContainer.hasChildNodes()) {
        this.articleContainer.removeChild(this.articleContainer.firstChild)
      }
    },

    addBookElements() { 
      let n = -1
      this.bookList.forEach(book => {    
        const newArticle = document.createElement("article")
        newArticle.setAttribute('data-index', (n+=1) )
        this.articleContainer.appendChild(newArticle)

        const divContent = [book.title, book.author, book.pageNumber, (book.hasRead ? 'Read': 'Has not read')]
        const articleClasses = ['title', 'author', 'pages', (book.hasRead ? 'readButton hasRead': 'readButton hasNotRead')]
      
        for (let i = 0; i < divContent.length; i+=1) {
          const div = document.createElement('div')
          div.setAttribute('class', articleClasses[i])
          div.textContent = divContent[i]
          newArticle.append(div)
        }
      
      const button = document.createElement('button')
      button.setAttribute('class', 'remove')
      button.textContent = 'Remove'
      newArticle.append(button)
      })
      this.readToggle()
      this.removeBook()
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
          this.bookList[btn.parentElement.getAttribute('data-index')].hasRead = false
        } else {
          btn.classList.remove('hasNotRead')
          btn.classList.add('hasRead')
          btn.textContent = 'Read'
          this.bookList[btn.parentElement.getAttribute('data-index')].hasRead = true 
        } 
        }))
    },

    removeBook () {
      const remove = document.querySelectorAll('.remove')
      remove.forEach(btn => btn.addEventListener('click', () => {
        if (window.confirm('Are you sure you want to permanently remove this book?')){
          this.bookList.splice(btn.parentElement.getAttribute('data-index'),1)
          this.render()
        }
        console.log(btn.parentElement.getAttribute('data-index'))
      })
    )}
  }
  library.init()
})()

class Book {
  constructor (bookTitle, bookAuthor, pageNumber, hasReadBook) {
    this.title = bookTitle
    this.author = bookAuthor
    this.pageNumber = pageNumber
    this.hasRead = hasReadBook
  }
}