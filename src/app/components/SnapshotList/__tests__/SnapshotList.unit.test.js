import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {getQueriesForElement, getByText} from '@testing-library/dom';
<<<<<<< HEAD
import {render, fireEvent} from '@testing-library/react';
import SnapshotList from '../SnapshotList';
=======

import {render, fireEvent} from '@testing-library/react';

import SnapshotList from '../SnapshotList';

>>>>>>> 4be5cc86ae800c3ad121ee1075d8467a00d562ed
it('Checks if SnapshotList Renders', () => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  const {getByPlaceholderText, debug} = render(
    <SnapshotList snapshotHistory={[]} />,
  );
});
