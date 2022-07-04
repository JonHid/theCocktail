import React from 'react';
import { ICocktail } from '../../interfaces/cocktail';
import './Cocktail.css';

const Cocktail: React.FunctionComponent<ICocktail> = (props: ICocktail) => {
  const { strDrink, strDrinkThumb, strInstructions } = props;

  return (
    <div className='cocktailContainer'>
      <div className='cocktailHeader'>{ strDrink }</div>
      <div className='cocktailBody'>
        <img className='cocktailImg' src={ strDrinkThumb } alt={ `${ strDrink }.img` } />
        <div className='cocktailDescription' >{ strInstructions }</div>
      </div>
    </div>
  )
};

export default Cocktail;
