import { useState } from "react";
import ReadTab from "../components/ReadTab";
import WishTab from "../components/WishTab";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="p-4 lg:mt-[30px]">
      <div className="bg-[#1313130D] p-6 rounded-[24px]">
        <h2 className="text-center font-bold text-4xl">Books</h2>
      </div>
      <div className="flex items-center pt-6">
        <button
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? "border border-b-0" : "border-b"} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>Read Books</span>
        </button>
        <button
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? "border border-b-0" : "border-b"} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>Wishlist Books</span>
        </button>
      </div>
      
      {/* Render appropriate tab based on selected index */}
      {tabIndex === 0 ? <ReadTab /> : <WishTab />}
    </div>
  );
};

export default ListedBooks;
