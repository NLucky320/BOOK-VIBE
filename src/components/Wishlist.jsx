import React from 'react';
import { getBooks } from '../Utils';
import { Link } from 'react-router-dom';
const Wishlist = () => {
     const savedBooks = getBooks();
    return (
        <div>
             <div className='mb-4'> 
            {savedBooks
                    .filter(book => book.section === 'Wishlist')
                    .map((book, index) =>(
                <div key={index} className="card flex flex-col md:flex-row bg-base-100 shadow-xl mb-4">
                    <div className='w-[230px] bg-[#1313130D]'><figure className='px-10 pt-10 bg-[#F3F3F3] p-4 rounded-lg'><img className='' src={book.image} alt="Book Cover"/></figure></div>
                    <div className="card-body">
                        <h2>{book.bookName}</h2>
                        <p>By: {book.author}</p>
                        <div className='flex gap-2 items-center justify-center'>
                            <span className="text-[#131313] font-bold">Tag: </span> {book.tags.map((tag, index) => ( 
                              <p className="text-[#23BE0A]  bg-[#17BE0A0D] rounded-[30px] p-2 px-6" key={index}> #{tag}</p>
                          ))}
                        </div>
                        <div className='flex gap-4 border-b border-dashed'>
                            <div>
                                <div>
                                    Publisher: {book.publisher}
</div>
                            </div>
                            <div>
Page: {book.totalPages}
                            </div>
                        </div>
                        <div className="card-actions flex flex-col md:flex-row gap-4">
                            <button className="text-[#328EFF] bg-[#328EFF42] p-4 rounded-[30px]" >Category: {book.category}</button>
                            <button className="text-[#FFAC33] bg-[#FFAC3326] p-4 rounded-[30px]">Rating: { book.rating}</button>
                            <Link to={`/bookDetails/${book.bookId}`} className="btn bg-[#23BE0A] text-white p-4 rounded-[30px]">
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

export default Wishlist;