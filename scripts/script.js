const myLibrary = [];

/*function Book(title, author, pages, read) {
    this.id = crypto.randomUUID().slice(0, 8);
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read === 'true'; // Converte para boolean
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
    return newBook;
}

function displayBooks() {
    const bookCards = document.querySelector('.book-cards');
    bookCards.innerHTML = '';

    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.id = book.id; // Armazena o ID para referência

        card.innerHTML = `
        <h4>${book.title}</h4>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Read: </strong>${book.read ? 'Yes' : 'No'}</p>
        <div class="card-actions">
            <button class="btn-toggle-read" data-id="${book.id}">
                <i class="mdi mdi-eye${book.read ? '' : '-off'}"></i>
            </button>
            <button class="btn-remove-book" data-id="${book.id}">
                <i class="mdi mdi-delete"></i>
            </button>
        </div>
        `;

        bookCards.appendChild(card);
    });

    addEventListenersToCards();
}


function addEventListenersToCards() {
    document.querySelectorAll('.btn-toggle-read').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const bookId = e.currentTarget.dataset.id;
            const book = myLibrary.find(b => b.id === bookId);
            if (book) {
                book.toggleRead();
                displayBooks(); // Atualiza a exibição
            }
        });
    });

    document.querySelectorAll('.btn-remove-book').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const bookId = e.currentTarget.dataset.id;
            const index = myLibrary.findIndex(b => b.id === bookId);
            if (index !== -1) {
                myLibrary.splice(index, 1);
                displayBooks();
            }
        });
    });
}



const dialog = document.querySelector("#form-dialog");
const newBookBtn = document.querySelector(".btn-new");
const closeButton = document.querySelector(".btn-close-form");
const form = document.querySelector(".form");

newBookBtn.addEventListener("click", () => {
    form.reset();
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;

    if (read === "default") {
        alert("Please select a read status");
        return
    }

    addBookToLibrary(title, author, pages, read);
    displayBooks();
    dialog.close();
});

// Livros iniciais para teste
addBookToLibrary("O Senhor dos Anéis", "J.R.R. Tolkien", "1200", "true");
addBookToLibrary("Harry Potter e a Pedra Filosofal", "J.K. Rowling", "300", "false");
addBookToLibrary("1984", "George Orwell", "328", "true");
addBookToLibrary("Hitler: Biografia comentada", "Hamud C. Hamud", "1150", "false");

// Exibe os livros iniciais
displayBooks();*/

class Book{
    constructor(title, author, pages, read) {
        this.id = crypto.randomUUID().slice(0, 8);
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read === 'true'; // Converte para boolean
    }

    toggleRead() {
        this.read = !this.read;
    }
    
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
    return newBook;
}

function displayBooks() {
    const bookCards = document.querySelector('.book-cards');
    bookCards.innerHTML = '';

    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.id = book.id; // Armazena o ID para referência

        card.innerHTML = `
        <h4>${book.title}</h4>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Read: </strong>${book.read ? 'Yes' : 'No'}</p>
        <div class="card-actions">
            <button class="btn-toggle-read" data-id="${book.id}">
                <i class="mdi mdi-eye${book.read ? '' : '-off'}"></i>
            </button>
            <button class="btn-remove-book" data-id="${book.id}">
                <i class="mdi mdi-delete"></i>
            </button>
        </div>
        `;

        bookCards.appendChild(card);
    });

    addEventListenersToCards();
}

function addEventListenersToCards() {
    document.querySelectorAll('.btn-toggle-read').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const bookId = e.currentTarget.dataset.id;
            const book = myLibrary.find(b => b.id === bookId);
            if (book) {
                book.toggleRead();
                displayBooks(); // Atualiza a exibição
            }
        });
    });

    document.querySelectorAll('.btn-remove-book').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const bookId = e.currentTarget.dataset.id;
            const index = myLibrary.findIndex(b => b.id === bookId);
            if (index !== -1) {
                myLibrary.splice(index, 1);
                displayBooks();
            }
        });
    });
}



const dialog = document.querySelector("#form-dialog");
const newBookBtn = document.querySelector(".btn-new");
const closeButton = document.querySelector(".btn-close-form");
const form = document.querySelector(".form");

newBookBtn.addEventListener("click", () => {
    form.reset();
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;

    if (read === "default") {
        alert("Please select a read status");
        return
    }

    addBookToLibrary(title, author, pages, read);
    displayBooks();
    dialog.close();
});

// Livros iniciais para teste
addBookToLibrary("O Senhor dos Anéis", "J.R.R. Tolkien", "1200", "true");
addBookToLibrary("Harry Potter e a Pedra Filosofal", "J.K. Rowling", "300", "false");
addBookToLibrary("1984", "George Orwell", "328", "true");
addBookToLibrary("Hitler: Biografia comentada", "Hamud C. Hamud", "1150", "false");

// Exibe os livros iniciais
displayBooks();