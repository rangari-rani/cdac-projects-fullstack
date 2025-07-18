import { createContext, useContext, useState } from "react";

const FilterContext = createContext(undefined);

export const FilterProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    return (
        <FilterContext.Provider value={{
            searchQuery, setSearchQuery,
            selectedCategory, setSelectedCategory,
        }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (context === undefined) {
        throw new Error("useFilter must be used within a FilterProvider");
    }
    return context;
};
