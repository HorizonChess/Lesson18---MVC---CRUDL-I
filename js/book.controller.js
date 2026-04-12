function onInit() {
    renderBooks();
}

function renderBooks() {
    const books = getBooks();
    const tableBody = document.querySelector('.books-table-body');

    let html = '';
    books.forEach(book => {
        html += `
            <tr>
                <td>${book.title}</td>
                <td>${book.price}</td>
                <td>
                    <button>Read</button>
                    <button>Update</button>
                    <button>Delete</button>
                </td>
            </tr>
        `;
    });

    tableBody.innerHTML = html;
}
