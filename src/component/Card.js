import React from 'react';

const Card = ({meals}) => {
    return (
       <div className="meal-card">
        <h1>{meals.strMeal}</h1>
        <p>origin :{meals.strArea}</p>
        <img src={meals.strMealThumb} alt="" />
        <p>{meals.strInstructions}</p>
       </div>
    );
};

export default Card;