function onInit() {
    loadBooks()
    renderBooks()
}

function renderBooks(books = getBooks()) {
    const tableBody = document.querySelector('.books-table-body')

    var strHtml = ''
    strHtml = books.map(book => {
        return `
            <tr>
                <td>${book.title}</td>
                <td>${book.price}</td>
                <td>
                    <button onclick="onReadBook('${book.id}')">Read</button>
                    <button onclick="onUpdateBook('${book.id}')">Update</button>
                    <button onclick="onRemoveBook('${book.id}')">Delete</button>
                </td>
            </tr>
        `
    })
    console.log(strHtml)
    tableBody.innerHTML = strHtml.join('')
}

function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()
}

function onUpdateBook(bookId) {
    const newPrice = +prompt('Enter new price:')
    if (newPrice !== null && newPrice !== '') {
        updatePrice(bookId, newPrice)
        renderBooks()
    }
}

function onAddBook() {
    const title = prompt('Enter book title:')
    if (title === null || title === '') return

    const price = +prompt('Enter book price:')
    if (price === null || price === '') return

    addBook(title, price)
    renderBooks()
}

function onReadBook(bookId) {
    const book = getBookById(bookId)
    document.querySelector('.book-cover').src = 'assets/book cover-default.jpg'
    document.querySelector('.book-title').innerText = book.title
    document.querySelector('.book-price').innerText = makeLorem()

    document.querySelector('.book-details-modal').showModal()
}

function onFilterBooks() {
    const searchTerm = document.querySelector('.search-input').value
    const filteredBooks = filterBooksByTitle(searchTerm)
    renderBooks(filteredBooks)
}

function onClearFilter() {
    document.querySelector('.search-input').value = ''
    renderBooks()
}

function onCloseModal() {
    document.querySelector('.book-details-modal').close()
}

