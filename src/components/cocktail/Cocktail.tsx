import React from 'react';
import { ICocktail } from '../../interfaces/cocktail';

const Cocktail: React.FunctionComponent<ICocktail> = (props: ICocktail) => {
  const { strDrink, strDrinkThumb, strInstructions } = props;

  return (
    <div className='cocktailContainer'>
      <div className='cocktailName'>{ strDrink }</div>
      <img className='cocktailImg' src={ strDrinkThumb } alt={ `${ strDrink }.img` } />
      <div className='cocktailDescription' >{ strInstructions }</div>
    </div>
  )
};

export default Cocktail;