function onInit() {
    loadBooks()
    renderBooks()
    renderFooter()
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
    renderFooter()
    showConfirmMsg('removed')
}

function onUpdateBook(bookId) {
    const newPrice = +prompt('Enter new price:')
    if (newPrice !== null && newPrice !== '') {
        updatePrice(bookId, newPrice)
        renderBooks()
        renderFooter()
        showConfirmMsg('updated')
    }
}

function onAddBook() {
    const title = prompt('Enter book title:')
    if (title === null || title === '') return

    const price = +prompt('Enter book price:')
    if (price === null || price === '') return

    addBook(title, price)
    renderBooks()
    renderFooter()
    showConfirmMsg('added')
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

function showConfirmMsg(operation) {
    const msgModal = document.querySelector('.confirm-msg')
    msgModal.innerText = `book sucessfully ${operation}`
    msgModal.showModal()
    setTimeout(() => { msgModal.close() }, 2000)
}

function renderFooter() {
    const stats = getBookStats()
    document.querySelector('.expensive-count').innerText = stats.expensive
    document.querySelector('.average-count').innerText = stats.average
    document.querySelector('.cheap-count').innerText = stats.cheap
}