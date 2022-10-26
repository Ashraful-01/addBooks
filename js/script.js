//Get the UI elements
let form = document.querySelector('#book_title')



// Book Class
class Book {
    constructor (title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


//UI Class 
class UI{
    constructor(){

    }
    addToBooklist(book){
        // console.log(book);
        let list  = document.querySelector('#book-list');
        let row = document.createElement('tr');
    row.innerHTML= `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td ><a herf='#' class="delete">x</a> </d>`;

    list.appendChild(row);
    }
    clearFields(){
document.querySelector('#title').value = '';
document.querySelector('#author').value = '';
document.querySelector('#isbn').value = '';
    }
   
}

//add Event Listener
form.addEventListener('submit', newBook);

function newBook(e){
let title= document.querySelector('#title').value;
let author = document.querySelector('#author').value;
let isbn = document.querySelector('#isbn').value;



let book = new Book(title, author, isbn);
// console.log(book);

let ui = new UI();

ui.addToBooklist(book);
ui.clearFields();




e.preventDefault();
}













