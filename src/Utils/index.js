import toast from "react-hot-toast";

export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("bookDetails");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};

// export const saveBooks = (book) => {
//   let books = getBooks();
//   const isExist = books.find((b) => b.bookId === book.bookId);
//   if (isExist) {
//     return toast.error("Already added");
//   }
//   books.push(book);

//   localStorage.setItem("bookDetails", JSON.stringify(books));
//   toast.success("Book added Successfully");
// };

export const saveBooks = (book, section) => {
  let books = getBooks();

  // Check if the book is already in the Read section
  const isRead = books.some(
    (b) => b.bookId === book.bookId && b.section === "Read"
  );

  if (section === "Wishlist" && isRead) {
    return toast.error("Book is already added to the Read section");
  }

  const isExist = books.find(
    (b) => b.bookId === book.bookId && b.section === section
  );
  if (isExist) {
    return toast.error("Already added");
  }

  // Add the section information to the book object
  book.section = section;

  books.push(book);

  localStorage.setItem("bookDetails", JSON.stringify(books));
  toast.success("Book added Successfully");
};
