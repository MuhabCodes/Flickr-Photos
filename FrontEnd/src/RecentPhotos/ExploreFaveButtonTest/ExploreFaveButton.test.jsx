import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import FaveButton from '../ExploreFaveButton';
import '@testing-library/jest-dom/extend-expect';

it('it renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FaveButton />, div);
});

it('renders the button correctly', () => {
  const { getByTestId } = render(<FaveButton />);
  expect(getByTestId('fave-test')).toBeTruthy();
});

it('matches a snapshot', () => {
  const tree = renderer.create(<FaveButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
