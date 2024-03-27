import { useEffect, useState } from "react";
import { getBooks } from "../Utils";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { RiPagesLine } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";

const ReadTab = () => {
 const savedBooks = getBooks();
  const [displayBooks, setDisplayBooks] = useState(savedBooks);
  const [sortOption, setSortOption] = useState([]); // Default sort option

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        rating: "rating",
        totalPages: "totalPages",
        yearOfPublishing: "yearOfPublishing",
      };
      const sortProperty = types[type];
      const sorted = [...displayBooks].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setDisplayBooks(sorted);
    };
    sortArray(sortOption);
  }, [sortOption]);
console.log(displayBooks)
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div>
          <div className="mb-4 mt-4">
              <div className="pb-6 text-center">
                   <select className=" px-8 py-3 bg-[#23BE0A] text-white rounded " onChange={handleSortChange} value={sortOption}>
          <option >Sort By</option>
          <option value="rating">Rating</option>
          <option value="totalPages">Number of pages</option>
          <option value="yearOfPublishing">Published year</option>
        </select>
          </div>

        {displayBooks
          .filter((book) => book.section === "Read")
          .map((book, index) => (
            <div
              key={index}
              className="card flex flex-col items-center md:items-start  md:flex-row bg-base-100 shadow-xl mb-4"
            >
              <div className="w-[230px] bg-[#1313130D]">
                <figure className="px-10 pt-10 bg-[#F3F3F3] p-4 rounded-lg">
                  <img className="" src={book.image} alt="Book Cover" />
                </figure>
              </div>
              <div className="card-body">
                <h2>{book.bookName}</h2>
                <p>By: {book.author}</p>
                <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
                  <span className="text-[#131313] font-bold">Tag: </span>
                  {book.tags.map((tag, index) => (
                    <p
                      className="text-[#23BE0A]  bg-[#17BE0A0D] rounded-[30px] p-2 px-2"
                      key={index}
                    >
                      #{tag}
                    </p>
                  ))}
                  <div className="flex gap-2">
                    <div>
                      <CiLocationOn />
                    </div>
                    <div>Year of Publishing: {book.yearOfPublishing}</div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 border-b border-dashed items-center md:items-start">
                  <div className="flex gap-2">
                    <div>
                     <IoMdContacts />
                    </div>
                    <div>Publisher: {book.publisher}</div>
                  </div>
                          <div className="flex gap-2"> 
                              <div>
                                   <RiPagesLine />
                              </div>
                              <div>Page: {book.totalPages}</div>
                  </div>
                </div>
                <div className="card-actions flex flex-col md:flex-row  items-center md:items-start gap-4">
                  <button className="text-[#328EFF] bg-[#328EFF42] p-4 py-2 rounded-[30px]">
                    Category: {book.category}
                  </button>
                  <button className="text-[#FFAC33] bg-[#FFAC3326] p-4 py-2 rounded-[30px]">
                    Rating: {book.rating}
                  </button>
                  <Link
                    to={`/bookDetails/${book.bookId}`}
                    className=" bg-[#23BE0A] text-white p-4 py-2 rounded-[30px]"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReadTab;
