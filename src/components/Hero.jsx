import { Link } from "react-router-dom";
import image from '../../src/assets/Book.jpg' 

const Hero = () => {
    return (
        <div>
  <div className="hero bg-[#0d0d0d0d] p-4 mt-[100px] md:py-[80px] rounded-[24px]">
  <div className="hero-content flex-col lg:flex-row-reverse gap-4 lg:gap-[86px]">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
    <div className="max-w-[526px]">
      <h1 className="text-5xl font-bold pb-10">Books to freshen up your bookshelf</h1>
    
     <Link to='/listedBooks' className="self-center px-8 py-3 bg-[#23BE0A] text-white rounded">View The List</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;