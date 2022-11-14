import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Card from '../component/Card';


const Acceuil = () => {
    const [meals, setMeals] = useState([]);
    const [choice, setChoice] = useState("");




    const API = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    useEffect(() => {
        console.log("alert1");
        axios.get(API + choice).then((res) => setMeals(res.data.meals))
    },  [choice])  //premierement il lit le usestate,ensuite il saute le useeefect et lit le reste du js(console.log..)ensuite il lit le return donc a vide car meals  n'est qu'un array vide,ensuite il lit le useeffect et fait l'appel API puis le js puis le return puis     il rejoue le useeffect a l'infini si l'on ne met pas un array vide[ ]en deuxieme argument.dans notre cas ou je veux aussi qu'il rappelle useeffect si la variable choice a ete modifie,je dois mettre dans le array le nom de la variable afin qu'il rejoue la requette axios

    console.log("alert2");

    return (
        <div className='container'>
            <h1>React Cook</h1>
            <input type="text"
                placeholder="tapez le nom d'un plat"
                onChange={(e) => setChoice(e.target.value)}
            />

            <div className='meals-container'>


                {meals
                .slice(0,24)
                .map((meal) =>
                    <Card key={meal.idMeal} meals={meal} />
                )}

            </div>


        </div>
    );
};

export default Acceuil;