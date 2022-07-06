import React, { useEffect } from 'react';
import { ICocktail } from '../../interfaces/cocktail';
import { getCocktails } from '../../services/cocktail';
import Cocktail from '../cocktail/Cocktail';

interface IListProps {
  cocktails: Array<ICocktail>,
  setCocktails: React.Dispatch<React.SetStateAction<Array<ICocktail>>>,
}

const List: React.FunctionComponent<IListProps> = (props) => {
  const { cocktails, setCocktails } = props;

  useEffect(() => {
    (async () => {
      try {
        const gettedCocktails = await getCocktails();
        setCocktails(gettedCocktails);
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
