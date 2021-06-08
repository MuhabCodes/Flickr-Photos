import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import AddShowCaseButton from '../AddShowCaseButton';
import '@testing-library/jest-dom/extend-expect';

it('it renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddShowCaseButton />, div);
});

it('renders the button correctly', () => {
  const { getByTestId } = render(<AddShowCaseButton />);
  expect(getByTestId('addsc-btn')).toBeTruthy();
});

it('matches a snapshot', () => {
  const tree = renderer.create(<AddShowCaseButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
