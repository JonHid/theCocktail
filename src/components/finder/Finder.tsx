import React from 'react';
import { ICocktail } from '../../interfaces/cocktail';
import { getCocktails } from '../../services/cocktail';
import './Finder.css';

interface IFinderProps {
  setCocktails: React.Dispatch<React.SetStateAction<Array<ICocktail>>>,
}

const Finder: React.FunctionComponent<IFinderProps> = (props) => {
  const { setCocktails } = props;

  async function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const gettedCocktails = await getCocktails(e.target.value);
    setCocktails(gettedCocktails);
  }

  return (
    <div className="finderComponent">
      <input type="text" onChange={ changeHandler }/>
    </div>
  );
};

export default Finder;
