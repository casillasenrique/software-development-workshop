import { render, screen } from '@testing-library/react';
import App from './App';

import {
  canVoteArrowCode,
  canVoteNoArrowCode,
} from '../resources/arrowCodeExample';
import {
  massachusettsResident,
  virginiaResident,
} from '../resources/person.type';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Can vote function', () => {
  test('can vote', () => {
    expect(canVoteArrowCode(massachusettsResident)).toBe(true);
    expect(canVoteNoArrowCode(massachusettsResident)).toBe(true);
  });

  test('cannot vote (not MA resident)', () => {
    expect(canVoteArrowCode(virginiaResident)).toBe(false);
    expect(canVoteNoArrowCode(virginiaResident)).toBe(false);
  });
});
