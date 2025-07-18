import { MessageCircle, ThumbsUp } from "lucide-react";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PopularBlogs = () => {
  const blogs = [
    {
      title: "Ecommerce Platform",
      author: "Jordan",
      likes: 12,
      comments: 4,
    },
    {
      title: "Waste Management",
      author: "John",
      likes: 14,
      comments: 7,
    },
    {
      title: "Logo Design",
      author: "Alex",
      likes: 15,
      comments: 2,
    },
  ];

  return (
    <><ToastContainer
    theme="dark" // Use light theme
  />
    <div className="p-5 mx-5 mt-[2rem] border w-[23rem] rounded">
      <h2 className="text-xl font-bold mb-5">Projects Reviews</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold">{blog.title}</span>
              <button
                onClick={() =>
                  toast.warn("Please log in first to add comment.", {
                    position: "top-right",
                    autoClose:4000,
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
                Comment
              </button>
            </div>
            <span className="text-gray-500">
              Published by {blog.author}
              <div className="flex items-center mt-2">
                <MessageCircle size={16} />
                <span className="text-gray-500 mr-5 ml-1">{blog.likes}</span>

                <ThumbsUp size={16} />
                <span className="text-gray-500 mr-2 ml-2">{blog.comments}</span>
              </div>
            </span>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default PopularBlogs;
