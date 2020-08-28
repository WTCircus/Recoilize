const sum = require('./../src/app/components/Settings/AtomSettings');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// Import
import AtomSettings from '../src/app/components/Settings/AtomSettings';

// Check if render without crashing
