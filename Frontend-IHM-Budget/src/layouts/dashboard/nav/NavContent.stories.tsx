import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'src/theme/theme-provider';
import { MemoryRouter } from 'react-router-dom';
import { NavContent } from './nav';
import { navData } from './config-nav';

const meta: Meta<typeof NavContent> = {
  component: NavContent,
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
type Story = StoryObj<typeof NavContent>;
export const WithNoData: Story = {
  args: {
    data: [],
  },
};
export const WithData: Story = {
  args: {
    data: navData,
  },
};
