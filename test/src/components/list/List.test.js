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

describe('Testing App component...', () => {
  it('Rendering component...', async () => {
    const cocktails = cocktailsMock.data.drinks;
    const cocktail = cocktails[0];
    getCocktails.mockResolvedValueOnce(cocktails);
    let renderedListComponent;
    await act(async () => {
      renderedListComponent = render(<List/>);
    });

    const renderedMockCocktails = renderedListComponent.queryAllByText((content, element) => {
      return element.tagName.toLowerCase() === 'mock-cocktail';
    });

    expect(renderedMockCocktails.length).toEqual(cocktails.length);
    expect(renderedMockCocktails[0].attributes.strDrinkThumb.value).toEqual(cocktail.strDrinkThumb);
    expect(renderedMockCocktails[0].attributes.strDrink.value).toEqual(cocktail.strDrink);
    expect(renderedMockCocktails[0].attributes.strInstructions.value).toEqual(cocktail.strInstructions);
  })

  it('getCocktails request fails...', async () => {
    const cocktails = cocktailsMock.data.drinks;
    getCocktails.mockImplementation(() => { throw new Error() });
    let renderedListComponent;
    await act(async () => {
      renderedListComponent = render(<List/>);
    });

    const renderedMockCocktails = renderedListComponent.queryAllByText((content, element) => {
      return element.tagName.toLowerCase() === 'mock-cocktail';
    });

    expect(renderedMockCocktails.length).toEqual(0);
  })
})
