import React from 'react';
import SnapshotsList from '../components/SnapshotList/SnapshotList';
import {stateSnapshot, selectedTypes} from '../../types';

interface SnapshotsContainerProps {
  // index of current snapshot rendered in devtool
  renderIndex: number;
  // length of snapshotHistory array
  snapshotHistoryLength: number;
  // setState functionality to update curRender
  setRenderIndex: React.Dispatch<React.SetStateAction<number>>;
  selected: selectedTypes[];
  filter: stateSnapshot[];
}

const SnapshotsContainer: React.FC<SnapshotsContainerProps> = ({
  renderIndex,
  snapshotHistoryLength,
  setRenderIndex,
  selected,
  filter,
}) => {
  // functionality to postMessage the selected snapshot index to background.js
  const timeTravelFunc = (index: number) => {
    // variable to store/reference connection
    const backgroundConnection = chrome.runtime.connect();
    // post the message with index in payload to the connection
    backgroundConnection.postMessage({
      action: 'snapshotTimeTravel',
      tabId: chrome.devtools.inspectedWindow.tabId,
      payload: {snapshotIndex: index},
    });
  };
  return (
    <div className="SnapshotsContainer">
      <span
        style={{
          fontSize: '14px',
          fontWeight: 'bold',
          marginTop: '10px',
          marginBottom: '10px',
        }}>
        Snapshots
      </span>
      <SnapshotsList
        renderIndex={renderIndex}
        snapshotHistoryLength={snapshotHistoryLength}
        setRenderIndex={setRenderIndex}
        timeTravelFunc={timeTravelFunc}
        selected={selected}
        filter={filter}
      />
    </div>
  );
};

export default SnapshotsContainer;
