import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useBooksData from "../Hooks/useBooksData";

const ListedBooks = () => {
const { data } = useBooksData();
  const [sortedBooks, setSortedBooks] = useState(data);
  const [tabIndex, setTabIndex] = useState(0);


  // Function to sort books based on rating in descending order
  const sortByRating = () => {
    const sorted = [...sortedBooks].sort((a, b) => b.rating - a.rating);
    console.log("Sorted by Rating:", sorted);
    setSortedBooks(sorted);
  };

  // Function to sort books based on number of pages in descending order
  const sortByPages = () => {
    const sorted = [...sortedBooks].sort((a, b) => b.totalPages - a.totalPages);
    console.log("Sorted by Pages:", sorted);
    setSortedBooks(sorted);
  };

  // Function to sort books based on published year in descending order
  const sortByYear = () => {
    const sorted = [...sortedBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    console.log("Sorted by Year:", sorted);
    setSortedBooks(sorted);
  };

  // Handler for selecting a sorting option
  const handleSortOption = (option) => {
    if (option === "Rating") {
      sortByRating();
    } else if (option === "Number of pages") {
      sortByPages();
    } else if (option === "Published year") {
      sortByYear();
    }
  };

  useEffect(() => {
    // Update sortedBooks whenever data changes
    setSortedBooks(data);
  }, [data]);

  useEffect(() => {
    // console.log("Sorted Books:", sortedBooks);
  }, [sortedBooks]);


  return (
    <div className="p-4 lg:mt-[30px">
      <div className="bg-[#1313130D] p-6 rounded-[24px]">
        <h2 className="text-center font-bold text-4xl">Books</h2>
      </div>
      <div className="text-center p-6">
        <div className="dropdown text-center items-center">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#23BE0A] text-center  text-white items-center"
          >
            Click
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => handleSortOption("Rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handleSortOption("Number of pages")}>Number of pages</a>
            </li>
            <li>
              <a onClick={() => handleSortOption("Published year")}>Published year</a>
            </li>
          </ul>
        </div>
      </div>
       <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>Read Books</span>
        </Link>
        <Link
          to={`wishlist`}
          onClick={() => setTabIndex(1)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>Wishlist Books</span>
        </Link>
      </div>
      <div className="mt-8">
        <Outlet></Outlet>
      </div>
      
    </div>
  );
};

export default ListedBooks;
