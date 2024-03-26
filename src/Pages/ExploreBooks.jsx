import React, { useEffect, useState } from "react";
import useBooksData from "../Hooks/useBooksData";
import ExploreBook from "../components/ExploreBook";

const ExploreBooks = () => {
    const [books, setBooks] = useState([]);
    const { data } = useBooksData();

    useEffect(() => {
        setBooks(data);
    }, [data]);

    return (
        <div className="p-4 md:mt-[40px] text-center"> 
            <h2 className="font-bold text-[40px]">Explore Books</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {books.map(book => <ExploreBook key={book.bookId} book={book}></ExploreBook>)}
            </div>
        </div>
    );
};

export default ExploreBooks;
