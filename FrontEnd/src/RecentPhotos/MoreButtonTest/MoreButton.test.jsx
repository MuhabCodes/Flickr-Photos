import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import MoreButton from '../MoreButton';
import '@testing-library/jest-dom/extend-expect';

it('it renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MoreButton />, div);
});

it('renders the button correctly', () => {
  const { getByTestId } = render(<MoreButton />);
  expect(getByTestId('more-test')).toBeTruthy();
});

it('matches a snapshot', () => {
  const tree = renderer.create(<MoreButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
