import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import PostFaveButton from '../PostFaveButton';
import '@testing-library/jest-dom/extend-expect';

it('it renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostFaveButton />, div);
});

it('renders the button correctly', () => {
  const { getByTestId } = render(<PostFaveButton />);
  expect(getByTestId('post-comment-test')).toBeTruthy();
});

it('matches a snapshot', () => {
  const tree = renderer.create(<PostFaveButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
