import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import SearchButton from '../SearchButton';
import '@testing-library/jest-dom/extend-expect';

it('it renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchButton />, div);
});

it('renders the button correctly', () => {
  const { getByTestId } = render(<SearchButton />);
  expect(getByTestId('search-button-test')).toBeTruthy();
});

it('matches a snapshot', () => {
  const tree = renderer.create(<SearchButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
