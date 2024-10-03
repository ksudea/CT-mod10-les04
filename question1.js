
// Task 1
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

// Task 2
Book.prototype.getInfo = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages`;
  };

// Task 3
let bookStore = [];

function addBook(title, author, pages) {
    const book = new Book(title, author, pages);
    library.push(book);
}
  
function searchByTitle(searchTitle) {
    return library.filter(book => book.title.toLowerCase().includes(searchTitle.toLowerCase()));
}

function searchByAuthor(searchAuthor) {
    return library.filter(book => book.author.toLowerCase().includes(searchAuthor.toLowerCase()));
}

// Task 4
function formatBook() {
    return library.map(book => ({
      title: `Title: ${book.title}`,
      author: `Author: ${book.author}`
    }));
  }

function filterBooksPageCount() {
    return library.filter(book => book.pages > 100);
}

  
  