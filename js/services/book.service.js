const STORAGE_KEY = 'books'
var gBooks = []

//use util functions
function loadBooks() {
    const booksFromStorage = localStorage.getItem(STORAGE_KEY)
    if (booksFromStorage) {
        gBooks = JSON.parse(booksFromStorage)
    }
    if (gBooks.length === 0) {
        _createDemoBooks()
    }
}

function _createDemoBooks() {
    gBooks = [
        {
            id: 'bg1',
            title: 'The Adventures of Lori Ipsi',
            price: 120,
            imgUrl: 'lori-ipsi.jpg'
        },
        {
            id: 'bg2',
            title: 'World Atlas',
            price: 300,
            imgUrl: 'world-atlas.jpg'
        },
        {
            id: 'bg3',
            title: 'Zorba the Greek',
            price: 87,
            imgUrl: 'zorba.jpg'
        }
    ]
    _saveBooks()
}


function getBooks() {
    return gBooks
}

function getBookById(bookId) {
    const book = getBooks().find(b => b.id === bookId)
    if (!book) return null
    else {
        return book
    }
}

function getNextBookId() {
    if (gBooks.length === 0) return 1
    const maxId = Math.max(...gBooks.map(book => {
        return parseInt(book.id.replace('bg', ''))
    }))
    return maxId + 1
}

function removeBook(bookId) {
    const index = gBooks.findIndex(book => book.id === bookId)
    if (index !== -1) {
        gBooks.splice(index, 1)
        _saveBooks()
    }
}

function updatePrice(bookId, newPrice) {
    const book = getBookById(bookId)
    if (book) {
        book.price = newPrice
        _saveBooks()
    }
}

function addBook(title, price) {
    const newBook = {
        id: 'bg' + getNextBookId(),
        title: title,
        price: price,
        imgUrl: ''
    }
    gBooks.unshift(newBook)
    _saveBooks()
}


function filterBooksByTitle(searchTerm) {
    if (!searchTerm) return gBooks

    const lowerSearchTerm = searchTerm.toLowerCase()
    return gBooks.filter(book =>
        book.title.toLowerCase().includes(lowerSearchTerm)
    )
}

function getBookStats() {
    const expensive = gBooks.filter(book => book.price > 200).length
    const average = gBooks.filter(book => book.price >= 80 && book.price <= 200).length
    const cheap = gBooks.filter(book => book.price < 80).length

    return { expensive, average, cheap }
}

function _saveBooks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gBooks))
}