import React from 'react'
import PizzaItem from '../PizzaItem/PizzaItem';
import cl from './PizzaList.module.css'

const PizzaList = ({ searchResults }) => {

    const results = searchResults.map(pizza => <PizzaItem key={pizza.id} pizza={pizza} />)
    // console.log(`Results: ${results.length}`);

    const content = results?.length ? results : <p>No Matching pizzas</p>
    // console.log(`Content: ${content}`); 
    return (
        <div className={cl.pizzaWrapper}>
            { content }
        </div>
    );
};

export default PizzaList;