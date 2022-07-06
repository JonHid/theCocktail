import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Cocktail from '../../../../src/components/cocktail/Cocktail';
import { cocktailsMock } from '../../../__mocks__/cocktails';

function getIconContainer(renderedCocktailComponent) {
  return renderedCocktailComponent.queryByText((content, element) => {
    return element.classList.contains('iconContainer');
  });
}

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

  it('Toogle like button...', () => {
    const cocktail = cocktailsMock.data.drinks[0];
    const cocktailComponent =
    <Cocktail
      strDrinkThumb={ cocktail.strDrinkThumb }
      strDrink={ cocktail.strDrink }
      strInstructions={ cocktail.strInstructions }
    />

    const renderedCocktailComponent = render(cocktailComponent);

    const iconContainerElement = getIconContainer(renderedCocktailComponent);
    fireEvent.click(iconContainerElement);
    const likeElement = getIconContainer(renderedCocktailComponent);
    expect(likeElement.classList.contains('iconContainer')).toBe(true);
    expect(likeElement.classList.contains('like')).toBe(true);

    fireEvent.click(likeElement);
    const notLikeElement = getIconContainer(renderedCocktailComponent);
    expect(notLikeElement.classList.contains('like')).toBe(false);
  })
})
