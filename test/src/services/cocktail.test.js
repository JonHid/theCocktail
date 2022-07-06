import axios from 'axios';
import { getCocktails, endpoint } from '../../../src/services/cocktail';
import { cocktailsMock } from '../../__mocks__/cocktails';

jest.mock('axios');

describe('Testing cocktail service...', () => {
  it('Testing getCocktails function...', async () => {
    axios.get.mockResolvedValueOnce(cocktailsMock);
    const cocktails = await getCocktails();
    expect(axios.get).toBeCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(endpoint);
    expect(cocktailsMock.data.drinks[0].idDrink).toEqual(cocktails[0].idDrink);
    expect(cocktailsMock.data.drinks.length).toEqual(cocktails.length);
  })
})
