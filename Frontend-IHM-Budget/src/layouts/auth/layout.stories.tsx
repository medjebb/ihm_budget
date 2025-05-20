import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'src/theme/theme-provider';
import { MemoryRouter } from 'react-router-dom';
import { AuthLayout } from './layout';

const meta: Meta<typeof AuthLayout> = {
  title: 'layouts/Auth',
  component: AuthLayout,
  parameters: {
    layout: 'fullscreen',
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
type Story = StoryObj<typeof AuthLayout>;

export const Default: Story = {
  args: {
    children: <div>Content goes here</div>,
    slotProps: {
      header: {
        layoutQuery: 'md',
        slots: {
          topArea: <div>Custom Top Area</div>,
        },
      },
      main: {
        sx: { backgroundColor: 'lightgray' },
      },
    },
  },
};
