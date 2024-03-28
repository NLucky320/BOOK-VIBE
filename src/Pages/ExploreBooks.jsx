import React, { useEffect, useState } from "react";
import useBooksData from "../Hooks/useBooksData";
import ExploreBook from "../components/ExploreBook";
import image from "../../src/assets/Book.jpg";
const ExploreBooks = () => {
  const [books, setBooks] = useState([]);
  const { data } = useBooksData();

  useEffect(() => {
    setBooks(data);
  }, [data]);

  return (
    <div className=" mt-[80px] p-2 text-center">
      <div className=" m-4">
        <h2 className="font-bold text-[40px]">Explore Books</h2>
      </div>
      <div className="hero bg-[#0d0d0d0d] p-4 mt-6 md:mt-[52px] md:py-[80px] rounded-[24px]">
        <div className="hero-content flex-col lg:flex-row-reverse gap-4 lg:gap-[86px] pr-4">
          <img src={image} className="max-w-[280px] rounded-lg shadow-2xl" />
          <div className="max-w-[500px]">
            <h1 className="text-3xl md:text-5xl font-bold pb-10">
              {" "}
              Hundreds of books picked for you
            </h1>
            <p className="text-lg md:text-xl pb-4">
              Explore a curated catalogue, completely free
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <ExploreBook key={book.bookId} book={book}></ExploreBook>
        ))}
      </div>
    </div>
  );
};

export default ExploreBooks;
