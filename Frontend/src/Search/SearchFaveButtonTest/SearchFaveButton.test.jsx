import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import FaveButtonSearch from '../SearchFaveButton';
import '@testing-library/jest-dom/extend-expect';

it('it renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FaveButtonSearch />, div);
});

it('renders the button correctly', () => {
  const { getByTestId } = render(<FaveButtonSearch />);
  expect(getByTestId('fave-test-search')).toBeTruthy();
});

it('matches a snapshot', () => {
  const tree = renderer.create(<FaveButtonSearch />).toJSON();
  expect(tree).toMatchSnapshot();
});
