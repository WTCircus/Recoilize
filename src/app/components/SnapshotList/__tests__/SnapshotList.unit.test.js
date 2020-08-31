import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {getQueriesForElement, getByText} from '@testing-library/dom';

import SnapshotsList from '../SnapshotList';

it('Component Renders', () => {
  const {getByPlaceholderText, debug, getByText} = render(<SnapshotsList {[]}/>);

  debug();
});
