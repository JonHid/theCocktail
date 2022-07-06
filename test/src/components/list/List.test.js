import React from 'react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import List from '../../../../src/components/list/List';
import { getCocktails } from '../../../../src/services/cocktail';
import { cocktailsMock } from '../../../__mocks__/cocktails';

jest.mock('../../../../src/services/cocktail');

jest.mock('../../../../src/components/cocktail/Cocktail', () => (props) => {
  const MockCocktail = 'mock-cocktail';
  return <MockCocktail { ...props }/>;
});

describe('Testing List component...', () => {
  it('Rendering component...', async () => {
    const mockedCocktails = cocktailsMock.data.drinks;
    const mockedCocktail = mockedCocktails[0];
    getCocktails.mockResolvedValueOnce(mockedCocktails);
    let renderedListComponent;
    await act(async () => {
      renderedListComponent = render(<List cocktails={ mockedCocktails } setCocktails={ () => {} }/>);
    });

    const renderedMockCocktails = renderedListComponent.queryAllByText((content, element) => {
      return element.tagName.toLowerCase() === 'mock-cocktail';
    });

    expect(renderedMockCocktails.length).toEqual(mockedCocktails.length);
    expect(renderedMockCocktails[0].attributes.strDrinkThumb.value).toEqual(mockedCocktail.strDrinkThumb);
    expect(renderedMockCocktails[0].attributes.strDrink.value).toEqual(mockedCocktail.strDrink);
    expect(renderedMockCocktails[0].attributes.strInstructions.value).toEqual(mockedCocktail.strInstructions);
  })

  it('getCocktails request fails...', async () => {
    const mockedCocktails = cocktailsMock.data.drinks;
    getCocktails.mockImplementation(() => { throw new Error() });
    let renderedListComponent;
    await act(async () => {
      renderedListComponent = render(<List cocktails={ [] } setCocktails={ () => {} }/>);
    });

    const renderedMockCocktails = renderedListComponent.queryAllByText((content, element) => {
      return element.tagName.toLowerCase() === 'mock-cocktail';
    });

    expect(renderedMockCocktails.length).toEqual(0);
  })
})
