import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import EditBioButton from '../EditBioButton';
import '@testing-library/jest-dom/extend-expect';

it('it renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditBioButton />, div);
});

it('renders the button correctly', () => {
  const { getByTestId } = render(<EditBioButton />);
  expect(getByTestId('edit-bio')).toBeTruthy();
});

it('matches a snapshot', () => {
  const tree = renderer.create(<EditBioButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
