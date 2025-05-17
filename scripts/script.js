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

class Book {
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
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    return newBook;
}

function displayBooks() {
    const bookCards = document.querySelector('.book-cards');
    bookCards.innerHTML = '';

    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.id = book.id;

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
                displayBooks();
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

// Elementos do formulário
const dialog = document.querySelector("#form-dialog");
const newBookBtn = document.querySelector(".btn-new");
const closeButton = document.querySelector(".btn-close-form");
const cancelButton = document.querySelector(".btn-cancel");
const form = document.querySelector(".form");
const title = document.getElementById("title");
const titleError = document.querySelector("#title + span.error");
const author = document.getElementById("author");
const authorError = document.querySelector("#author + span.error");
const pages = document.getElementById("pages");
const pagesError = document.querySelector("#pages + span.error");
const read = document.getElementById("read");
const readError = document.querySelector("#read + span.error");

// Função genérica para validar campos
function validateField(input, errorElement) {
    const isReadField = input === read;
    const isRequired = input.hasAttribute('required');
    const isEmpty = input.value.trim() === '';
    const isValid = (!isRequired || !isEmpty) && input.validity.valid && (!isReadField || input.value !== "default");

    if (isValid) {
        errorElement.textContent = "";
        errorElement.className = "error";
        input.classList.remove("invalid");
        input.classList.add("valid");
        console.log(`Adicionando .valid a ${input.id}`);
    } else {
        showErrorMessage(input, errorElement);
        input.classList.add("invalid");
        input.classList.remove("valid");
    }

    return isValid;
}

// Função genérica para exibir mensagens de erro
function showErrorMessage(input, errorElement) {
    if (input.validity.valueMissing || (input.value.trim() === '' && input.hasAttribute('required'))) {
        errorElement.textContent = "This field is required.";
    } else if (input.validity.tooShort) {
        errorElement.textContent = `Should be at least ${input.minLength} characters.`;
    } else if (input.validity.patternMismatch) {
        errorElement.textContent = "Please enter a valid number of pages (e.g., 100 or 1000).";
    } else if (input === read && input.value === "default") {
        errorElement.textContent = "Please select a read status.";
    }
    errorElement.className = "error active";
}

// Validação em tempo real para cada campo
title.addEventListener("input", () => validateField(title, titleError));
author.addEventListener("input", () => validateField(author, authorError));
pages.addEventListener("input", () => validateField(pages, pagesError));
read.addEventListener("change", () => validateField(read, readError));

// Manipulação do formulário
newBookBtn.addEventListener("click", () => {
    form.reset();
    [title, author, pages, read].forEach(input => {
        const errorElement = document.querySelector(`#${input.id} + span.error`);
        console.log(`Input.id = ${input.id}`);
        errorElement.textContent = "";
        errorElement.className = "error";
        input.classList.remove("valid", "invalid");
    });
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

cancelButton.addEventListener("click", () => {
    dialog.close();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isFormValid = true;

    // Valida todos os campos
    [title, author, pages, read].forEach(input => {
        const errorElement = document.querySelector(`#${input.id} + span.error`);
        const isValid = validateField(input, errorElement);
        if (!isValid) {
            isFormValid = false;
        }
    });

    // Se todos os campos forem válidos, adiciona o livro
    if (isFormValid) {
        const titleValue = title.value;
        const authorValue = author.value;
        const pagesValue = pages.value;
        const readValue = read.value;

        addBookToLibrary(titleValue, authorValue, pagesValue, readValue);
        displayBooks();
        dialog.close();
    }
});

// Livros iniciais para teste
addBookToLibrary("O Senhor dos Anéis", "J.R.R. Tolkien", "1200", "true");
addBookToLibrary("Harry Potter e a Pedra Filosofal", "J.K. Rowling", "300", "false");
addBookToLibrary("1984", "George Orwell", "328", "true");
addBookToLibrary("Hitler: Biografia comentada", "Hamud C. Hamud", "1150", "false");

// Exibe os livros iniciais
displayBooks();