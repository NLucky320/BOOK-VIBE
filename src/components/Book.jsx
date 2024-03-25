
import { MdOutlineStarRate } from "react-icons/md";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  console.log(book);
  return (
    <Link to={`/bookDetails/${book.bookId}`}>
      <div className="card bg-base h-full p-6 border border-solid border-[#13131326]">
        <figure className="px-10 pt-10 bg-[#F3F3F3] p-4 rounded-lg">
          <img src={book.image} alt="Shoes" className="rounded-xl" />
        </figure>
              <div className="items-start text-start py-6">
                  <div className="flex gap-3 text-center items-center">
                          {book.tags.map((tag, index) => ( 
                              <p className="text-[#23BE0A]  bg-[#17BE0A0D] rounded-[30px] p-2 px-6" key={index}> {tag}</p>
                          ))}
                  </div>
          <h2 className="text-[24px] font-bold py-4">{book.bookName} </h2>
          <p className="font-medium text-[#131313CC] border-b border-dashed pb-2">By : {book.author} </p>
          <div className="flex justify-between pt-4">
            <div>
               <div>{ book.category}</div>
            </div>
            <div className="flex justify-between items-center gap-4">
                         <div>{book.rating} </div>
              <div> <MdOutlineStarRate /></div>
           </div>            
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
