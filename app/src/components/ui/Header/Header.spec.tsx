import React from 'react';
import {render} from '@testing-library/react';

import Header from './Header';

jest.mock('components/Search', () => () => <div>Search</div>);

describe('Header', () => {
  it('should render correctly', () => {
    const {container} = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
