
import React, { useEffect, useState } from 'react';
import { useFilter } from '../FilterContext/FilterContext';
import { Tally3Icon } from 'lucide-react';
import ProjectCard from './ProductCard';
import { produc } from '../constants';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainContent = () => {
    const { searchQuery, selectedCategory } = useFilter();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12);

    // Update filtered products based on search and category filters
    useEffect(() => {
        const filtered = produc.filter((product) => {
            const matchesCategory = !selectedCategory || product.category === selectedCategory;
            const matchesSearchQuery = !searchQuery || product.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearchQuery;
        });

        setFilteredProducts(filtered);
    }, [selectedCategory, searchQuery]);

    // Update paginated products based on the current page
    useEffect(() => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        setProducts(filteredProducts.slice(start, end));
    }, [currentPage, filteredProducts]);

    // Calculate total pages
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <>
        <ToastContainer 
    theme="dark" // Use light theme
/>

        <section className="className='xl:w-[55rem]  lg:w-[55rem] sm:w-[40rem] xs:w-[20rem]  p-5">
            <div className="mb-5">
                {/* Add Project and Filter Buttons */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-5 gap-3">
                <button
    onClick={() =>
        toast.warn('Please log in first to add project.', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                backgroundColor: '#1e90ff',
                color: '#fff',
            },
        })
    }
                        className="cursor-pointer px-4 py-2 bg-blue-700 text-white rounded shadow-md hover:bg-blue-800 transition"
                    >
                        Add Project
                    </button>
                    {/* Filter Dropdown */}
                  
                </div>

                {/* Grid of Project Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {products.map((product) => (
                        <ProjectCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            image={product.image}
                        />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center mt-5 gap-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="border px-3 py-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500 hover:text-white transition"
                    >
                        Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`border px-3 py-2 rounded-full ${
                                currentPage === page
                                    ? 'bg-blue-800 text-white'
                                    : 'hover:bg-blue-500 hover:text-white'
                            } transition`}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="border px-3 py-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500 hover:text-white transition"
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
        </>
    );
};

export default MainContent;
