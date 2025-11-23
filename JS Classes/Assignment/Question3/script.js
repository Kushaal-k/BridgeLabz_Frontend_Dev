class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = false;
  }

  issueBook() {
    this.isIssued = true;
  }

  returnBook() {
    this.isIssued = false;
  }
}

let books = [
  new Book("Book A", "Author A", "111"),
  new Book("Book B", "Author B", "222"),
  new Book("Book C", "Author C", "333")
];

function showAvailableBooks() {
  books.filter(b => !b.isIssued).forEach(b => console.log(b));
}

function issueByISBN(isbn) {
  let book = books.find(b => b.isbn === isbn);
  if(book) book.issueBook();
}

showAvailableBooks();
issueByISBN("222");
showAvailableBooks();
