// import React, { useEffect, useState } from 'react';
// import { useFilter } from '../FilterContext/FilterContext';
// import { produc } from '../constants';

// const Sidebar = () => {
//     const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } = useFilter();
//     const [categories, setCategories] = useState([]);

  

//     // Extract unique categories
//     useEffect(() => {
//         const uniqueCategories = Array.from(
//             new Set(produc.map((product) => product.category))
//         );
//         setCategories(uniqueCategories);
//     }, []);

//     const handleRadioChangeCategories = (category) => {
//         setSelectedCategory(category);
//     };

//     const handleResetFilters = () => {
//         setSearchQuery('');
//         setSelectedCategory('');
//     };

//     return (
//         <div className='w-64 p-5 h-screen'>
         
//             <section>
//                 <input
//                     type='text'
//                     className='border-2 rounded px-2 py-3 w-full  sm:mb-0'
//                     placeholder='Search Project'
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//                 <div className='mb-6 mt-5'>
//                     <h2 className='text-xl font-semibold mb-4 text-blue-400'>Categories</h2>
//                 </div>
//                 <section>
//                     {categories.map((category, index) => (
//                         <label key={index} className='block mb-5'>
//                             <input
//                                 type='radio'
//                                 name='category'
//                                 value={category}
//                                 onChange={() => handleRadioChangeCategories(category)}
//                                 className='mr-2 w-[16px] h-[16px]'
//                                 checked={selectedCategory === category}
//                             />
//                             {category.toUpperCase()}
//                         </label>
//                     ))}
//                     <button
//                         onClick={handleResetFilters}
//                         className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md w-full mt-3"
//                     >
//                         Reset Filters
//                     </button>
//                 </section>
//             </section>
//         </div>
//     );
// };

// export default Sidebar;

import React, { useEffect, useState } from 'react';
import { useFilter } from '../FilterContext/FilterContext';
import { produc } from '../constants';

const Sidebar = () => {
    const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } = useFilter();
    const [categories, setCategories] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

    // Extract unique categories
    useEffect(() => {
        const uniqueCategories = Array.from(
            new Set(produc.map((product) => product.category))
        );
        setCategories(uniqueCategories);
    }, []);

    const handleRadioChangeCategories = (category) => {
        setSelectedCategory(category);
    };

    const handleResetFilters = () => {
        setSearchQuery('');
        setSelectedCategory('');
    };

    return (
        <>
            {/* Hamburger Menu */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="sm:hidden fixed top-14 left-5 z-50 bg-blue-600 text-white p-2 rounded-full shadow-lg"
            >
                {isSidebarOpen ? 'X' : '☰'}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed sm:static top-0 left-0 w-64 sm:w-64 p-5 h-full sm:h-screen  sm:bg-transparent shadow-lg sm:shadow-none transform ${
                    isSidebarOpen || window.innerWidth >= 640 ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out z-40`}
            >
                <section>
                    <input
                        type="text"
                        className="border-2 rounded px-2 py-3 w-full sm:mb-0"
                        placeholder="Search Project"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="mb-6 mt-8">
                        <h2 className="text-xl font-semibold mb-2 text-blue-400">Categories</h2>
                    </div>
                    <section>
                        {categories.map((category, index) => (
                            <label key={index} className="block mb-5">
                                <input
                                    type="radio"
                                    name="category"
                                    value={category}
                                    onChange={() => handleRadioChangeCategories(category)}
                                    className="mr-2 w-[16px] h-[16px]"
                                    checked={selectedCategory === category}
                                />
                                {category.toUpperCase()}
                            </label>
                        ))}
                        <button
                            onClick={handleResetFilters}
                            className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md w-full mt-3"
                        >
                            Reset Filters
                        </button>
                    </section>
                </section>
            </div>

            {/* Overlay for small screens when sidebar is open */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30 sm:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Sidebar;

