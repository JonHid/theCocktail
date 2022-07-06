import axios from 'axios';
import { ICocktail } from '../interfaces/cocktail';

const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

async function getCocktails(cocktailName?: string): Promise<Array<ICocktail>> {
  const url = cocktailName ? endpoint + cocktailName : endpoint;
  const response = await axios.get(url);
  return response.data?.drinks || [];
}

export {
  getCocktails,
  endpoint
}
