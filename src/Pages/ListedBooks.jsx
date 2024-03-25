import { useState } from "react";
import { Link } from "react-router-dom";



const ListedBooks = () => {
        const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='p-4 lg:mt-[30px'>
            <div className='bg-[#1313130D] p-6 rounded-[24px]'>
                <h2 className='text-center font-bold text-4xl'>Books</h2>
            </div>
            <div className="text-center p-6">
                    <div className="dropdown text-center items-center">
  <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-center  text-white items-center">Click</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Rating</a></li>
    <li><a>Number
of pages</a></li>
    <li><a>Published year</a></li>
  </ul>
</div>
            </div>
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                      <Link to=''
                          onClick={()=>setTabIndex(0)}
              rel="noopener noreferrer"
              href="#"
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===0?'border border-b-0':'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
            >
          
              <span>Read Books</span>
            </Link>
                      <Link to={`wishlist`}
                           onClick={()=>setTabIndex(1)}
              rel="noopener noreferrer"
              href="#"
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===1?'border border-b-0':'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
            >
             
              <span>Wishlist Books</span>
                </Link>
                </div>
        </div>
    );
};

export default ListedBooks;