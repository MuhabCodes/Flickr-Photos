import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import PostCommentButton from '../PostCommentButton';
import '@testing-library/jest-dom/extend-expect';

it('it renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostCommentButton />, div);
});

it('renders the button correctly', () => {
  const { getByTestId } = render(<PostCommentButton />);
  expect(getByTestId('post-comment-test')).toBeTruthy();
});

it('matches a snapshot', () => {
  const tree = renderer.create(<PostCommentButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
