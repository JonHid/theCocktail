import axios from 'axios';
import { getCocktails, endpoint } from '../../../src/services/cocktail';
import { cocktailsMock } from '../../__mocks__/cocktails';

jest.mock('axios');

describe('Testing cocktail service...', () => {
  it('Testing getCocktails function without params...', async () => {
    axios.get.mockResolvedValueOnce(cocktailsMock);
    const cocktails = await getCocktails();
    expect(axios.get).toBeCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(endpoint);
    expect(cocktailsMock.data.drinks[0].idDrink).toEqual(cocktails[0].idDrink);
    expect(cocktailsMock.data.drinks.length).toEqual(cocktails.length);
  })

  it('Testing getCocktails function with params...', async () => {
    axios.get.mockResolvedValueOnce(cocktailsMock);
    await getCocktails('ab');
    expect(axios.get).toHaveBeenCalledWith(`${endpoint}ab`);
  })

  it('Testing getCocktails function without cocktails at response...', async () => {
    axios.get.mockResolvedValueOnce({});
    const cocktails = await getCocktails();
    expect(cocktails.length).toEqual(0);
  })
})
