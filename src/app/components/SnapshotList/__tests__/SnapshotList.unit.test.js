import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {getQueriesForElement, getByText} from '@testing-library/dom';
import {render, fireEvent} from '@testing-library/react';
import SnapshotList from '../SnapshotList';
it('Checks if SnapshotList Renders', () => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  const {getByPlaceholderText, debug} = render(
    <SnapshotList snapshotHistory={[]} />,
  );
});
