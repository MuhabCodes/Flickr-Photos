import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import ShareBtn from '../Share';
import '@testing-library/jest-dom/extend-expect';

it('it renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShareBtn />, div);
});

it('renders the button correctly', () => {
  const { getByTestId } = render(<ShareBtn />);
  expect(getByTestId('share-test')).toBeTruthy();
});

it('matches a snapshot', () => {
  const tree = renderer.create(<ShareBtn />).toJSON();
  expect(tree).toMatchSnapshot();
});
