import React from 'react'
import cl from './SearchBar.module.css'

const SearchBar = ({ pizzas, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()
    
    const handleSearchChange = (e) =>
    {
        if (!e.target.value) return setSearchResults(pizzas)


        const resultsArray = pizzas.filter(pizza => 
            {
                console.log(pizza);
                return pizza.pizzaName.toLowerCase().includes(e.target.value.toLowerCase())
                ||
                pizza.dough.toLowerCase().includes(e.target.value.toLowerCase())
                ||
                pizza.price.toLowerCase().includes(e.target.value.toLowerCase())
            })
        // console.log(resultsArray);
        setSearchResults(resultsArray)
    }

    return (
        <form className={cl.search} onSubmit={handleSubmit}>
            <input
                type="text"
                className={cl.input}
                onChange={handleSearchChange}
            />
            <button className={cl.searchBtn}>Submit</button>
        </form>
    );
};

export default SearchBar;