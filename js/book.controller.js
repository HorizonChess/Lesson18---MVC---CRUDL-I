function onInit() {
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
                    <button>Read</button>
                    <button>Update</button>
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
