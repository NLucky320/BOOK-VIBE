import React, { useEffect, useState } from "react";
import useBooksData from "../Hooks/useBooksData";
import ExploreBook from "../components/ExploreBook";
import image from '../../src/assets/explorebook.jpg'
const ExploreBooks = () => {
    const [books, setBooks] = useState([]);
    const { data } = useBooksData();

    useEffect(() => {
        setBooks(data);
    }, [data]);

    return (
        <div className="p-4 mt-[80px] text-center"> 
            <h2 className="font-bold text-[40px]">Explore Books</h2>
              <div className="hero bg-[#0d0d0d0d] mt-4 md:mt-[52px] md:py-[80px] rounded-[24px]">
  <div className="hero-content flex-col lg:flex-row-reverse gap-4 lg:gap-[86px]">
    <img src={image} className="max-w-sm mx-auto rounded-lg shadow-2xl" />
    <div className="max-w-[526px] mx-auto">
      <h1 className="text-4xl pt-2 md:text-5xl font-bold pb-4">Hundreds of books picked for you</h1>
                        <p className="text-xl pb-4">Explore a curated catalogue, completely free</p>
     
    </div>
  </div>
</div>

            <div className="mt-6 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {books.map(book => <ExploreBook key={book.bookId} book={book}></ExploreBook>)}
            </div>
        </div>
    );
};

export default ExploreBooks;
