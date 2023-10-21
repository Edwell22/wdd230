const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {

    const mybook = input.value;
    if (mybook.trim() == '') {
        alert("Add a book and a chapter before adding.");
        return
    }

    input.value = '';

    const book = document.createElement('li');
    const text = document.createElement('span');
    const deleteButton = document.createElement('button');

    book.appendChild(text);
    text.textContent = mybook;
    book.appendChild(deleteButton);
    deleteButton.textContent = '❌';
    list.appendChild(book);

    deleteButton.addEventListener('click', () => {
        list.removeChild(book);
    });

    input.focus();
});


const date = new Date();

let year = date.getFullYear();

let currentYear = `${year}`;

document.querySelector("#year").textContent = currentYear;

document.getElementById("currentdate").textContent = document.lastModified;