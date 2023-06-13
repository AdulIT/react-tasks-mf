import cl from './PizzaItem.module.css'

const PizzaItem = ({ pizza }) => {
    return (
        <div className={cl.pizza}>
            <h1 className={cl.name}> { pizza.pizzaName }</h1>
            <p className={cl.info}> { pizza.dough } </p>
            <p className={cl.info}> { pizza.price } tg </p>
            <p className={cl.info}> Pizza ID: { pizza.id } </p>
        </div>
    )
}

export default PizzaItem