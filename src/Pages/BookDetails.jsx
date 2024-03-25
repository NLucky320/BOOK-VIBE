import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import { useLoaderData, useParams } from "react-router-dom";
import { saveBooks } from "../Utils";

const BookDetails = () => {
    const bookDetails = useLoaderData();
    
    // console.log(bookDetails)
    const { id } = useParams();
    // console.log(typeof id)
      const idInt = parseInt(id);
    const bookDetail = bookDetails.find(bookDetail => bookDetail.bookId == idInt);
    // console.log(bookDetail)
    const handleBook = bookDetail => {
        console.log(bookDetail)
        saveBooks(bookDetail)
    }
    return (
         <Card className="w-full flex-col items-center md:flex-row my-[50px] gap-4">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0  w-1/2 lg:w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={bookDetail.image}
          className="h-full w-full object-cover bg-[#1313130D] p-12"
        />
      </CardHeader>
      <CardBody className="space-y-2">
        <Typography variant="h4" color="blue-gray" className="mb-2">
      {bookDetail.bookName}
                </Typography>
                
        <Typography color="gray" className="font-normal border-b border-dashed p-2 w-full">
          By: {bookDetail.author}
        </Typography>
        <Typography color="gray" className="font-normal border-b border-dashed p-2">
        {bookDetail.category}
        </Typography>
        
        <Typography color="gray" className="font-normal text-[#131313B2]">
        <span className="text-[#131313] font-bold">Review: </span>    {bookDetail.review}
        </Typography>
         <Typography color="gray" className="font-normal border-b border-dashed p-2">
         <div className="flex gap-3 text-center items-center">
                         <span className="text-[#131313] font-bold">Tag: </span> {bookDetail.tags.map((tag, index) => ( 
                              <p className="text-[#23BE0A]  bg-[#17BE0A0D] rounded-[30px] p-2 px-6" key={index}> #{tag}</p>
                          ))}
                  </div>
                </Typography>
                <Typography color="gray" className="font-normal text-[#131313]">
  <span className="text-[#131313B2]">    Number of Pages: </span> {bookDetail.totalPages}
        </Typography>
                <Typography color="gray" className="font-normal text-[#131313]">
  <span className="text-[#131313B2]">    Publisher: </span> {bookDetail.publisher}
        </Typography>
                <Typography color="gray" className="font-normal text-[#131313]">
  <span className="text-[#131313B2]">    Year of Publishing: </span> {bookDetail.yearOfPublishing}
        </Typography>
                <Typography color="gray" className="font-normal text-[#131313]">
  <span className="text-[#131313B2]">    Rating: </span> {bookDetail.rating}
                </Typography>
                <div className="items-center flex-shrink-0 hidden lg:flex gap-4">
			<button onClick={()=>handleBook(bookDetail)} className="self-center px-8 py-3  text-[#131313] rounded border border-solid border-[#1313134D]">Read</button>
			<button className="self-center px-8 py-3 font-semibold rounded bg-[#59C6D2] text-white">Wishlist</button>
		</div>
      </CardBody>
    </Card>
    );
};

export default BookDetails;