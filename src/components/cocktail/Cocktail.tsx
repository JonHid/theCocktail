import React, { useState, useEffect } from 'react';
import { ICocktail } from '../../interfaces/cocktail';
import './Cocktail.css';

const Cocktail: React.FunctionComponent<ICocktail> = (props: ICocktail) => {
  const { strDrink, strDrinkThumb, strInstructions } = props;
  const [ like, setLike ] = useState<boolean>(false);

  useEffect(() => {
    setLike(false);
  }, [strDrink]);

  function clickHandler(e: React.MouseEvent<HTMLElement>) {
    setLike(!like);
  }

  return (
    <div className='cocktailContainer'>
      <div className='cocktailHeader'>
        { strDrink }
        <div className={`iconContainer ${ like ? 'like' : '' }`} onClick={ clickHandler }>
          <i className='material-icons'>favorite</i>
        </div>
      </div>
      <div className='cocktailBody'>
        <img className='cocktailImg' src={ strDrinkThumb } alt={ `${ strDrink }.img` } />
        <div className='cocktailDescription' >{ strInstructions }</div>
      </div>
    </div>
  )
};

export default Cocktail;
