import toast from "react-hot-toast";

export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("bookDetails");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};

export const saveBooks = (book) => {
  let books = getBooks();
  const isExist = books.find((b) => b.bookId === book.bookId);
  if (isExist) {
    return toast.error("Already added");
  }
  books.push(book);

  localStorage.setItem("bookDetails", JSON.stringify(books));
  toast.success("Book added Successfully");
};
