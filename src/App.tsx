import React, { useState } from 'react';
import { ICocktail } from './interfaces/cocktail';
import Finder from './components/finder/Finder';
import List from './components/list/List';
import './App.css';

const App: React.FunctionComponent = () => {
  const [ cocktails, setCocktails ] = useState<Array<ICocktail>>([]);

  return (
    <div>
      <Finder setCocktails={ setCocktails }/>
      <List cocktails={ cocktails } setCocktails={ setCocktails }/>
    </div>
  )
};

export default App;
