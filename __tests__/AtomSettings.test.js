import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {
  render,
  fireEvent,
  screen,
  getQueriesForElement,
  getByText,
} from '@testing-library/react';
const {Multiselect} = require('multiselect-react-dropdown');

// Import
import AtomSettings from '../src/app/components/Settings/AtomSettings';
import {debug} from 'webpack';

// Check if render without crashing
it('renders Atom Settings without crashing', () => {
  const root = document.createElement('div');
  ReactDOM.render(<AtomSettings />, root);
});

it('renders Multiselect component without crashing', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Multiselect />, root);
});

// it('testy', () => {
//   const {getByPlaceholderText, debug} = render(
//     <AtomSettings
//       snapshotHistory={[{}]}
//       selected={[{name: 'hello'}, {name: 'bye'}]}
//       setSeleted={jest.fn()}
//     />,
//   );
//   debug();
// });

//
//
// ! SUM is working test. TO BE REMOVED
const sum = require('./../src/app/components/Settings/AtomSettings');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
