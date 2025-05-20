import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'src/theme/theme-provider';
import { SignInView } from './sign-in-view';

jest.mock('src/routes/hooks', () => {
  const push = jest.fn();
  return {
    useRouter: () => ({ push }),
  };
});

const renderComponent = () =>
  render(
    <ThemeProvider>
      <MemoryRouter>
        <SignInView />
      </MemoryRouter>
    </ThemeProvider>
  );

describe('SignInView', () => {
  it('renders the sign-in form', () => {
    const { asFragment } = renderComponent();
    expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('toggles password visibility', () => {
    renderComponent();
    const toggleButton = screen.getByTestId('toggle-password-visibility');
    const passwordInput = screen.getByLabelText(/password/i);

    expect(passwordInput).toHaveAttribute('type', 'password');

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'text');

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('navigates to home on sign-in', () => {
    // eslint-disable-next-line global-require
    const { push } = require('src/routes/hooks').useRouter();
    renderComponent();
    const signInButton = screen.getByRole('button', { name: /sign in/i });

    fireEvent.click(signInButton);
    expect(push).toHaveBeenCalledWith('/');
  });
});
