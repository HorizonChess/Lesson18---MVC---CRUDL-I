const gBooks = [
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

function getBooks() {
    return gBooks
}

function getNextBookId() {
    const maxId = Math.max(...gBooks.map(book => {
        return parseInt(book.id.replace('bg', ''))
    }))
    return maxId + 1
}

function removeBook(bookId) {
    const index = gBooks.findIndex(book => book.id === bookId)
    if (index > -1) {
        gBooks.splice(index, 1)
    }
}

function updatePrice(bookId, newPrice) {
    const book = gBooks.find(book => book.id === bookId)
    if (book) {
        book.price = newPrice
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
}
