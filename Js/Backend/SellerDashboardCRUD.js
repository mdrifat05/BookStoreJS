document.addEventListener('DOMContentLoaded', () => {
  displayBooks();
});

// Function to display books in a table
function displayBooks() {
  const books = readBooks();
  const tableBody = document.getElementById('book-table-body');
   tableBody.innerHTML = '';

  books.forEach((book) => {
    const row = document.createElement('tr');

    // Create table cells for each book property
    const checkboxCell = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = book.Id;
    checkboxCell.appendChild(checkbox);
    debugger;
    row.appendChild(checkboxCell);

    // Create table cells for each book property
    const idCell = document.createElement('td');
    idCell.textContent = book.Id;
    row.appendChild(idCell);

    const titleCell = document.createElement('td');
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    const authorCell = document.createElement('td');
    authorCell.textContent = book.author;
    row.appendChild(authorCell);

    const genreCell = document.createElement('td');
    genreCell.textContent = book.genre;
    row.appendChild(genreCell);

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = book.description;
    row.appendChild(descriptionCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = book.price;
    row.appendChild(priceCell);

    
    const quantityCell = document.createElement('td');
    quantityCell.textContent = book.quantity;
    row.appendChild(quantityCell);

    const actionCell = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.textContent = 'Update';
    editButton.classList.add('btn', 'btn-primary', 'btn-sm');
    editButton.addEventListener('click', () => {
      editBook(book.Id);
    });
    actionCell.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'ml-2');
    deleteButton.addEventListener('click', () => {
      deleteBook(book.Id);
    });
    actionCell.appendChild(deleteButton);

    row.appendChild(actionCell);

    tableBody.appendChild(row);
  });
  // Add event listener for select all checkbox
  const selectAllCheckbox = document.getElementById('select-all-checkbox');
  debugger;
  selectAllCheckbox.addEventListener('change', () => {
    debugger;
    const checkboxes = document.querySelectorAll('#book-table-body input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAllCheckbox.checked;
    });
  });
}

function readBooks() {
  // Retrieve the loggedInEmail and book list from local storage
  var loggedInEmail = localStorage.getItem("loggedInEmail") || "";
  var bookListData = JSON.parse(localStorage.getItem("books")) || [];

  // Array to store the matching books
  var matchingBooks = [];

  // Iterate over each book in the list
  for (var i = 0; i < bookListData.length; i++) {
    var book = bookListData[i];

    // Check if the book's email matches the loggedInEmail
    if (book.email === loggedInEmail) {
      // Add the matching book to the array
      matchingBooks.push(book);
    }
  }
  // Return the array of matching books
  return matchingBooks;
}

function editBook(bookId) {
  // Retrieve the book from local storage using the bookId
  const books = readBooks();
  const book = books.find((b) => b.Id == bookId);
  // Redirect to UpdateBook.html with the book details and email as URL parameters
  const queryParams = `?id=${book.Id}&title=${encodeURIComponent(book.title)}&author=${encodeURIComponent(book.author)}&genre=${encodeURIComponent(book.genre)}&description=${encodeURIComponent(book.description)}&price=${encodeURIComponent(book.price)}&quantity=${encodeURIComponent(book.quantity)}`;
  window.location.href = `UpdateBook.html${queryParams}`;
}

function deleteBook(bookId) {
  debugger;
  // Retrieve the book from local storage using the bookId
  const books = readBooks();
  const bookIndex = books.findIndex((b) => b.Id == bookId);

  if (bookIndex !== -1) {
    debugger;
    // Remove the book from the array
    books.splice(bookIndex, 1);
    
    // Save the updated books array to local storage
    localStorage.setItem('books', JSON.stringify(books));

    const tableBody = document.getElementById('book-table-body');
    tableBody.innerHTML = ''; // Clear the table body

    // Refresh the displayed books
    displayBooks();
  }
}

function deleteSelectedBooks() {
  // var checkboxes = document.getElementById('select-all-checkbox');
  const checkboxes = document.querySelectorAll('#book-table-body input[type="checkbox"]:checked');
  const selectedBookIds = Array.from(checkboxes).map((checkbox) => checkbox.value);
  var bookListData = JSON.parse(localStorage.getItem("books")) || [];

  var selectedIds = [];
  if (selectedBookIds.length == 0) {
    alert('Please select at least one book to delete.');
    return;
  }

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      const bookId = checkboxes[i].value;
      selectedIds.push(bookId);
      debugger;
    }
  }

  var updatedBooks = bookListData.filter(function(book) {
    return !selectedIds.includes(book.Id.toString());
  });

  localStorage.setItem('books', JSON.stringify(updatedBooks));
  location.reload();
}


// Function to filter books based on the search input
function filterBooks() {
  var searchInput = document.getElementById("search-bar").value.toLowerCase();
  var tableRows = document.getElementById("book-table-body").getElementsByTagName("tr");

  for (var i = 0; i < tableRows.length; i++) {
    var bookTitle = tableRows[i].getElementsByTagName("td")[2].textContent.toLowerCase();

    if (bookTitle.includes(searchInput)) {
      tableRows[i].style.display = "";
    } else {
      tableRows[i].style.display = "none";
    }
  }
}

// Event listener for search input
document.getElementById("search-bar").addEventListener("input", filterBooks);
