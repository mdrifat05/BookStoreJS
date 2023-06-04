// Get the book table body element
const bookTableBody = document.getElementById('book-table-body');

// Retrieve the books data from local storage
const booksData = JSON.parse(localStorage.getItem('books'));

// Retrieve the sellers data from local storage
const sellersData = JSON.parse(localStorage.getItem('Sellers'));

// Variables to track current page number and items per page
let currentPage = 1;
const itemsPerPage = 1;

// Function to create a table row for each book
function createBookRow(book, shopname) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${shopname}</td>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.genre}</td>
    <td>${book.description}</td>
    <td>${book.price}</td>
    <td>${book.quantity}</td>
    <td>
      <button class="btn btn-primary">Order Now</button>
    </td>
  `;
  return row;
}

// Function to get the Shopname for a given email
function getShopname(email) {
  for (const seller of sellersData) {
    if (seller.Email === email) {
      return seller.Shopname;
    }
  }
  return 'Unknown Shop';
}

// Function to populate the table with books data
function populateBookTable() {
  // Clear the existing table content
  bookTableBody.innerHTML = '';

  // Calculate the start and end indexes of the items to be displayed
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  // Slice the books array to get the relevant items for the current page
  const booksForPage = booksData.slice(startIndex, endIndex);

  // Iterate over each book and create a table row for it
  for (const book of booksForPage) {
    const shopname = getShopname(book.email);
    const row = createBookRow(book, shopname);
    bookTableBody.appendChild(row);
  }

  // Update the pagination links
  updatePaginationLinks();
}

// Function to update the pagination links
function updatePaginationLinks() {
  const paginationContainer = document.getElementById('pagination-container');
  paginationContainer.innerHTML = ''; // Clear existing pagination links

  // Calculate the number of pages
  const totalPages = Math.ceil(booksData.length / itemsPerPage);

  // Determine the range of page links to be displayed
  const pageRange = 2; // Number of page links to show before and after the current page

  let startPage = currentPage - pageRange;
  if (startPage < 1) {
    startPage = 1;
  }

  let endPage = currentPage + pageRange;
  if (endPage > totalPages) {
    endPage = totalPages;
  }

  // Generate the pagination links
  const paginationLinks = [];

   // Add first page link if not on the first page
  if (currentPage >= 4) {
    paginationLinks.push(createPaginationLink(1));
  }

  // Add ellipsis before the first page link if necessary
  if (startPage > 2) {
    paginationLinks.push(createEllipsis());
  }

  // Add page links within the range
  for (let page = startPage; page <= endPage; page++) {
    paginationLinks.push(createPaginationLink(page));
  }

  // Add ellipsis after the last page link if necessary
  if (endPage < totalPages - 1) {
    paginationLinks.push(createEllipsis());
  }

   // Add last page link if not on the last page
  if (currentPage+4 <= totalPages) {
    paginationLinks.push(createPaginationLink(totalPages));
  }

  // Append the pagination links to the container
  paginationLinks.forEach((link) => {
    paginationContainer.appendChild(link);
  });

  // Highlight the current page link and remove active class from other links
  const pageLinks = paginationContainer.querySelectorAll('a.page-link');
  pageLinks.forEach((link) => {
    if (Number(link.getAttribute('data-page')) === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function createPaginationLink(page) {
  const pageLink = document.createElement('li');
  pageLink.classList.add('page-item');
  const link = document.createElement('a');
  link.classList.add('page-link');
  link.href = '#';
  link.textContent = page;
  link.setAttribute('data-page', page); // Set the data-page attribute to track the page number
  link.addEventListener('click', (event) => {
    event.preventDefault();
    currentPage = page;
    populateBookTable();
    updatePaginationLinks();
  });
  pageLink.appendChild(link);
  return pageLink;
}


// Function to create an ellipsis
function createEllipsis() {
  const ellipsis = document.createElement('li');
  ellipsis.classList.add('page-item', 'disabled');
  const ellipsisLink = document.createElement('a');
  ellipsisLink.classList.add('page-link');
  ellipsisLink.href = '#';
  ellipsisLink.textContent = '...';
  ellipsis.appendChild(ellipsisLink);
  return ellipsis;
}

// Handler for previous page link click
function previousPageHandler(event) {
    event.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      populateBookTable();
      updatePaginationLinks();
    }
  }

// Handler for next page link click
function nextPageHandler(event) {
  event.preventDefault();
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  if (endIndex < booksData.length) {
    currentPage++;
    populateBookTable();
    updatePaginationLinks();
  }
}
// Add event listeners for previous and next page links
const previousPageLink = document.getElementById('previous-page');
const nextPageLink = document.getElementById('next-page');
previousPageLink.addEventListener('click', previousPageHandler);
nextPageLink.addEventListener('click', nextPageHandler);

// Call the populateBookTable function to initially populate the table
populateBookTable();
