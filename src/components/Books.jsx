import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
      const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div className="p-4 md:mt-[80px] text-center"> 
            <h2 className="font-bold text-[40px]">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
 {
                books.map(book => <Book key={book.bookId} book={book}></Book> )
            }
            </div>
        </div>
    );
};

export default Books;