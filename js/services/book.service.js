const gBooks = [
    {
        id: 'bg4J78',
        title: 'The Adventures of Lori Ipsi',
        price: 120,
        imgUrl: 'lori-ipsi.jpg'
    },
    {
        id: 'bg4J79',
        title: 'World Atlas',
        price: 300,
        imgUrl: 'world-atlas.jpg'
    },
    {
        id: 'bg4J80',
        title: 'Zorba the Greek',
        price: 87,
        imgUrl: 'zorba.jpg'
    }
]

function getBooks() {
    return gBooks
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
