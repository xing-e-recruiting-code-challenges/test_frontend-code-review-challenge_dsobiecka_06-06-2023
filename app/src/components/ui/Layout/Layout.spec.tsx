import React from 'react';
import {render, screen} from '@testing-library/react';
import {Outlet} from 'react-router-dom';

import Layout from './Layout';

jest.mock('components/ui/Header', () => () => <div>Header</div>);
jest.mock('components/ui/Footer', () => () => <div>Footer</div>);

jest.mock('react-router-dom');

const outletMock = Outlet as jest.MockedFunction<typeof Outlet>;

describe('Layout', () => {
  beforeEach(() => {
    outletMock.mockImplementation(() => <div>Outlet</div>);
  });

  it('renders learn react link', () => {
    render(<Layout />);

    expect(screen.queryByText('Header')).toBeVisible();
    expect(screen.queryByText('Outlet')).toBeVisible();
    expect(screen.queryByText('Header')).toBeVisible();
  });
});
