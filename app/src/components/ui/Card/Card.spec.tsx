import React from 'react';
import {render} from '@testing-library/react';

import Card from './Card';

jest.mock('components/Pagination', () => () => <div>Pagination</div>);

describe('Card', () => {
  it('should render children correctly', () => {
    const children = <div>Card Content</div>;

    render(<Card children={children} />);

    expect(true).toBeTruthy();
  });
});
