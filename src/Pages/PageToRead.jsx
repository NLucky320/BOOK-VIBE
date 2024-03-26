import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useLocalStorage from "../Hooks/useLocalStorageData";
import { getBooks } from "../Utils";

const PageToRead = () => {
  const savedBooks = getBooks();
  if (!savedBooks || savedBooks.length === 0) {
    return <div>No books to display</div>;
  }
  const { localData } = useLocalStorage();
  // console.log(localData)
  // Filter only books from the "Read" section
  const readBooks = savedBooks.filter((book) => book.section === "Read");
  // Extract page numbers from read books
  const data = readBooks.map((book, index) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  const colors = ["#0085F6", "#00C29C", "#FBB929", "#FC8042", "#FB0100", "violet"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="h-[500px] w-full m-4 mx-auto mt-[140px] p-4 border-black border border-solid bg-[#13131308] ">

          <ResponsiveContainer>
              <BarChart  
              
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
          <Legend></Legend>
          <Bar
            dataKey="pages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
    
          </ResponsiveContainer>
    </div>
  );
};

export default PageToRead;
