import React from 'react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Finder from '../../../../src/components/finder/Finder';
import { getCocktails } from '../../../../src/services/cocktail';
import { cocktailsMock } from '../../../__mocks__/cocktails';

jest.mock('../../../../src/services/cocktail');

describe('Testing Finder component...', () => {
  it('Rendering component...', async () => {
    const mockedCocktails = cocktailsMock.data.drinks;
    const mockedCocktail = mockedCocktails[0];
    getCocktails.mockResolvedValueOnce(mockedCocktails);
    let renderedFinderComponent;
    const setCocktailsMock = jest.fn();
    await act(async () => {
      renderedFinderComponent = render(<Finder setCocktails={ setCocktailsMock }/>);
    });

    const inputElement = renderedFinderComponent.queryByText((content, element) => {
      return element.tagName.toLowerCase() === 'input';
    });

    await act(async () => {
      fireEvent.change(inputElement, { target: { value: 'ab' } });
    });

    expect(getCocktails).toHaveBeenCalledTimes(1);
    expect(getCocktails).toHaveBeenCalledWith('ab');
    expect(setCocktailsMock).toHaveBeenCalledTimes(1);
  })
})
