import { ICocktail } from '../interfaces/cocktail';

const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

async function getCocktails(): Promise<Array<ICocktail>> {
  const response = await fetch(endpoint);
  const cocktailsResponse = await response.json();
  return cocktailsResponse.drinks;
}

export {
  getCocktails
}
