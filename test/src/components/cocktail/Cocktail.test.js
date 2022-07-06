import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Cocktail from '../../../../src/components/cocktail/Cocktail';
import { cocktailsMock } from '../../../__mocks__/cocktails';

describe('Testing Cocktail component...', () => {
  it('Rendering component...', () => {
    const cocktail = cocktailsMock.data.drinks[0];
    const cocktailComponent =
    <Cocktail
      strDrinkThumb={ cocktail.strDrinkThumb }
      strDrink={ cocktail.strDrink }
      strInstructions={ cocktail.strInstructions }
    />

    const renderedCocktailComponent = render(cocktailComponent);
    expect(renderedCocktailComponent.container).toHaveTextContent(cocktail.strDrink);
    const cocktailImg = renderedCocktailComponent.getByAltText(`${cocktail.strDrink}.img`);
    expect(cocktailImg.src).toBe(cocktail.strDrinkThumb);
    expect(renderedCocktailComponent.container).toHaveTextContent(cocktail.strInstructions);
  })
})
