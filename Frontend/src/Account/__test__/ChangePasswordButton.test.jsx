import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import ChangePasswordButton from '../ChangePasswordButton';
import '@testing-library/jest-dom/extend-expect';

it('it renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( <ChangePasswordButton />, div);
});

it('renders the button correctly', () => {
  const { getByTestId } = render( <ChangePasswordButton />);
  expect(getByTestId('post-comment-test')).toBeTruthy();
});

it('matches a snapshot', () => {
  const tree = renderer.create( <ChangePasswordButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
