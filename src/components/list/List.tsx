import React, { useState, useEffect } from 'react';
import { ICocktail } from '../../interfaces/cocktail';
import { getCocktails } from '../../services/cocktail';
import Cocktail from '../cocktail/Cocktail';

interface ListState {
  cocktails: Array<ICocktail>
}

const List: React.FunctionComponent = () => {
  const [ cocktails, setCocktails ] = useState<ListState['cocktails']>([]);

  useEffect(() => {
    (async () => {
      try {
        const cocktails = await getCocktails();
        setCocktails(cocktails);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div>
      { cocktails.map((cocktail, i) => {
        return (
          <Cocktail
            key={ `cocktail${i}` }
            strDrinkThumb={ cocktail.strDrinkThumb }
            strDrink={ cocktail.strDrink }
            strInstructions={ cocktail.strInstructions }
          />
        )
      })}
    </div>
  );
};

export default List;
