import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'src/theme/theme-provider';
import { MemoryRouter } from 'react-router-dom';
import { Breakpoint } from '@mui/material';
import { NavDesktop } from './nav';
import { navData } from './config-nav';

const meta: Meta<typeof NavDesktop> = {
  component: NavDesktop,
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

const layoutQuery: Breakpoint = 'lg';

export default meta;
type Story = StoryObj<typeof NavDesktop>;

export const WithNoData: Story = {
  args: {
    data: [],
  },
};

export const WithLayoutQueryLg: Story = {
  args: {
    data: navData,
    layoutQuery: 'lg',
  },
};
