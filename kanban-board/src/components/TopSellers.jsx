import React, { useEffect, useState } from "react";
import tm1 from "../assets/tm1.jpg";
import tm2 from "../assets/tm2.jpg";
import tm3 from "../assets/tm3.jpg";
import tm4 from "../assets/tm4.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TopSeller = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const authorsData = [
      {
        name: "John Doe",
        image: tm1,
      },
      {
        name: "Jane Smith",
        image: tm2,
      },
      {
        name: "Alice Johnson",
        image: tm3,
      },
      {
        name: "Max Smith",
        image: tm4,
      },
    ];

    setAuthors(authorsData);
  }, []);

  return (
    <>
      <ToastContainer
        theme="dark" // Use light theme
      />
      <div className="p-5 mx-5 mt-[2rem] border w-[23rem] rounded ">
        <h2 className="text-xl font-bold mb-5">Add Team Members</h2>

        <ul>
          {authors.map((author, index) => (
            <li key={index} className="flex items-center justify-between mb-4">
              <section className="flex items-center">
                <img
                  src={author.image}
                  alt="Author"
                  className="w-[60px] h-[60px] rounded-full object-cover"
                />
                <span className="ml-4 text-sm font-medium">{author.name}</span>
              </section>
              <button
                onClick={() =>
                  toast.warn("Please log in first to add team members.", {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    style: {
                      backgroundColor: "#1e90ff",
                      color: "#fff",
                    },
                  })
                }
                className="py-1 px-3 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition"
              >
                Connect
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TopSeller;
