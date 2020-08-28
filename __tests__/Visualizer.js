import React from 'react';
import ReactDOM from 'react-dom';
import Visualizer from '../src/app/components/StateGraph/Visualizer';
import {filteredCurSnapMock} from '../mock/snapshot.js';
import {
  render,
  fireEvent,
  cleanup,
  waitFor,
  screen,
  findByTestId,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@babel/polyfill';

afterEach(cleanup);

it('it renders without crashing', () => {
  const {getByTestId} = render(<Visualizer />);
  expect(getByTestId('canvas')).toBeTruthy();
});

it('should match snapshot when no props are passed in', () => {
  const {asFragment} = render(<Visualizer />);
  expect(asFragment()).toMatchSnapshot();
});

it('should render Recoil Root as text', () => {
  const {getByTestId} = render(<Visualizer />);
  expect(getByTestId('canvas')).toHaveTextContent('Recoil Root');
});

it('should match snapshot when props are passed into Visualizer', () => {
  const {asFragment} = render(
    <Visualizer filteredCurSnap={filteredCurSnapMock} />,
  );
  expect(asFragment()).toMatchSnapshot();
});
