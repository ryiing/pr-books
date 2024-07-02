let myLibrary = [];

function book (title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function() {
        return title + ' ' + author + ' ' + pages + ' ' + status;
    }
}

book.prototype.changeStatus = function() {
    console.log('hi');
    
    if(this.status == 'true') {
        this.status = 'false';
    }
    else {
        this.status = 'true';
    }
    updateLibrary();
}

function updateLibrary() {
    main.innerHTML = '';
    for (let i=0; i < myLibrary.length; i++) {
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        const card_title = document.createElement('p');
        const card_author = document.createElement('p');
        const card_pages = document.createElement('p');
        const card_status = document.createElement('p');
        const toggle = document.createElement('button');
        toggle.classList.add('toggle');
    
        card_title.textContent = myLibrary[i].title;
        card_author.textContent = myLibrary[i].author;
        card_pages.textContent = myLibrary[i].pages;
        card_status.textContent = myLibrary[i].status;
        toggle.textContent = 'Toggle';

        toggle.addEventListener('click', () => {
            console.log([i]);
            myLibrary[i].changeStatus();
        });

        newCard.append(card_title, card_author, card_pages, card_status, toggle);
        main.appendChild(newCard);
    }
}

function addBookToLibrary(radio) {
    const newBook = new book(title.value, author.value, pages.value, radio)
    myLibrary.push(newBook)
    console.log(myLibrary);
}


const main = document.querySelector('.main');

const createBook = document.querySelector('#createBook');
const clear = document.querySelector('.clear');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');

createBook.addEventListener('click', (e) => {
    const radios = document.querySelector('input[name="status"]:checked');
    e.preventDefault();
    addBookToLibrary(radios.value);
    updateLibrary();
});

clear.addEventListener('click', () => {
    main.innerHTML = '';
    myLibrary = [];
});

