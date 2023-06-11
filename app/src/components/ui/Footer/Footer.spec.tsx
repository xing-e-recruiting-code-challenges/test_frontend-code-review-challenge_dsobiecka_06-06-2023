import React from 'react';
import {render} from '@testing-library/react';

import Footer from './Footer';

jest.mock('components/Pagination', () => () => <div>Pagination</div>);

describe('Footer', () => {
  it('should render correctly', () => {
    render(<Footer />);
  });
});
