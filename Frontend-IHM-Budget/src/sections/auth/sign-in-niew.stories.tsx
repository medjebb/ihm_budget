import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'src/theme/theme-provider';
import { MemoryRouter } from 'react-router-dom';
import { SignInView } from './sign-in-view';

const meta: Meta<typeof SignInView> = {
  title: 'Sections/Auth/SignInView',
  component: SignInView,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SignInView>;

export const Default: Story = {};
