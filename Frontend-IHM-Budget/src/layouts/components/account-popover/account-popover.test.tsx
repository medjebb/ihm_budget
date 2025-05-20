import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'src/theme/theme-provider';
import { AccountPopover } from './account-popover';

jest.mock('src/routes/hooks', () => ({
  useRouter: () => ({ push: jest.fn() }),
  usePathname: () => '/',
}));

const renderComponent = (props = {}) =>
  render(
    <ThemeProvider>
      <MemoryRouter>
        <AccountPopover {...props} />
      </MemoryRouter>
    </ThemeProvider>
  );

describe('AccountPopover', () => {
  it('renders the avatar button', () => {
    const { asFragment } = renderComponent();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('opens the popover when the avatar button is clicked', () => {
    const { asFragment } = renderComponent();
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByRole('presentation')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays menu items when data is provided', () => {
    const data = [
      { label: 'Home', href: '/home', icon: <span>HomeIcon</span> },
      { label: 'Profile', href: '/profile', icon: <span>ProfileIcon</span> },
    ];
    const { asFragment } = renderComponent({ data });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
