import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import {  useParams } from "react-router-dom";
import { saveBooks } from "../Utils";
import useBooksData from "../Hooks/useBooksData";
import { useEffect, useState } from "react";

const BookDetails = () => {
  // const bookDetailS = useLoaderData();
  const { data } = useBooksData();
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
//   console.log(id, singleData);
 
    
  useEffect(() => {
  const singleData = data.find((item) => item.bookId == id);
  setSingleData(singleData);
}, [data, id]);

  const { image, bookName, author, category, review,tags,publisher,yearOfPublishing,rating,totalPages  } =
    singleData || {};
  
    const handleSaveToRead = () => {
        saveBooks(singleData, "Read");
    };

    const handleSaveToWishlist = () => {
        saveBooks(singleData, "Wishlist");
    };
    return (
         <Card className="w-full flex-col items-center md:flex-row my-[50px] gap-4">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0  w-1/2 lg:w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={image}
          className="h-full w-full object-cover bg-[#1313130D] p-12"
        />
      </CardHeader>
      <CardBody className="space-y-2">
        <Typography variant="h4" color="blue-gray" className="mb-2">
      {bookName}
                </Typography>
                
        <Typography color="gray" className="font-normal border-b border-dashed p-2 w-full">
          By: {author}
        </Typography>
        <Typography color="gray" className="font-normal border-b border-dashed p-2">
        {category}
        </Typography>
        
        <Typography color="gray" className="font-normal text-[#131313B2]">
        <span className="text-[#131313] font-bold">Review: </span>    {review}
        </Typography>
             <div className="font-normal border-b border-dashed p-2">
  <div className="flex gap-3 items-center">
    <span className="text-gray-800 font-bold">Tag: </span>
    {tags && tags.map((tag, index) => ( 
      <p className="text-green-500 bg-green-100 rounded-full p-2 px-6" key={index}>#{tag}</p>
    ))}
  </div>
</div>
                <Typography color="gray" className="font-normal text-[#131313]">
  <span className="text-[#131313B2]">    Number of Pages: </span> {totalPages}
        </Typography>
                <Typography color="gray" className="font-normal text-[#131313]">
  <span className="text-[#131313B2]">    Publisher: </span> {publisher}
        </Typography>
                <Typography color="gray" className="font-normal text-[#131313]">
  <span className="text-[#131313B2]">    Year of Publishing: </span> {yearOfPublishing}
        </Typography>
                <Typography color="gray" className="font-normal text-[#131313]">
  <span className="text-[#131313B2]">    Rating: </span> {rating}
                </Typography>
              <div className="items-center flex-shrink-0 hidden lg:flex gap-4">
                    <button onClick={handleSaveToRead} className="self-center px-8 py-3 text-[#131313] rounded border border-solid border-[#1313134D]">Read</button>
                    <button onClick={handleSaveToWishlist} className="self-center px-8 py-3 font-semibold rounded bg-[#59C6D2] text-white">Wishlist</button>
                </div>
      </CardBody>
    </Card>
    );
};

export default BookDetails;