function onInit() {
    _loadBooks()
    renderBooks()
}

function renderBooks() {
    const books = getBooks()
    const tableBody = document.querySelector('.books-table-body')

    var html = ''
    books.forEach(book => {
        html += `
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

    tableBody.innerHTML = html
}

function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()
}

function onUpdateBook(bookId) {
    const newPrice = prompt('Enter new price:')
    if (newPrice !== null && newPrice !== '') {
        updatePrice(bookId, parseInt(newPrice))
        renderBooks()
    }
}

function onAddBook() {
    const title = prompt('Enter book title:')
    if (title === null || title === '') return

    const price = prompt('Enter book price:')
    if (price === null || price === '') return

    addBook(title, parseInt(price))
    renderBooks()
}

function onReadBook(bookId) {
    const book = getBooks().find(b => b.id === bookId)
    if (!book) return

    const detailsText = document.querySelector('.book-details-text')
    detailsText.textContent = JSON.stringify(book, null, 2)

    document.querySelector('.book-details-modal').classList.remove('hidden')
}

function onCloseModal() {
    document.querySelector('.book-details-modal').classList.add('hidden')
}
