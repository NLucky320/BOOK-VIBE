import React from 'react';

const ExploreBook = ({book}) => {
    return (
        <div>
           <div className="card bg-base-100 shadow-xl h-full ">
  <figure className="px-10 py-5 bg-blue-gray-50">
    <img src={book.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
                    <h2 className="card-title">{ book.bookName}</h2>
    <div className="card-actions">
                        <button className="px-8 py-3 bg-[#23BE0A] text-white rounded">{ book.library}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ExploreBook;
