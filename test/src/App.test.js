import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from '../../src/App';

jest.mock('../../src/components/list/List', () => () => {
  const MockList = 'mock-list';
  return <MockList />;
});

jest.mock('../../src/components/finder/Finder', () => () => {
  const MockFinder = 'mock-finder';
  return <MockFinder />;
});

describe('Testing App component...', () => {
  it('Rendering component...', () => {
    const renderedAppComponent = render(<App/>);
    expect(renderedAppComponent.container).toContainHTML('<mock-finder />');
    expect(renderedAppComponent.container).toContainHTML('<mock-list />');
  })
})
