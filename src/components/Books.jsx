import { useEffect, useState } from "react";
import Book from "./Book";
import useBooksData from "../Hooks/useBooksData";

const Books = () => {
      const [books, setBooks] = useState([]);
    const { data} = useBooksData();
     useEffect(() => {
    setBooks(data)
    
    
     }, [data])
    // console.log(data)
    // useEffect(() => {
    //     fetch('/data.json')
    //         .then(res => res.json())
    //     .then(data=>setBooks(data))
    // },[])
    return (
        <div className="p-4 mt-6 md:mt-[70px] text-center"> 
            <h2 className="font-bold text-[40px] pb-6">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
 {
                data.map(book => <Book key={book.bookId} book={book}></Book> )
            }
            </div>
        </div>
    );
};

export default Books;