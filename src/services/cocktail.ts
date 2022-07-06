import axios from 'axios';
import { ICocktail } from '../interfaces/cocktail';

const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

async function getCocktails(): Promise<Array<ICocktail>> {
  const response = await axios.get(endpoint);
  return response.data?.drinks;
}

export {
  getCocktails
}
