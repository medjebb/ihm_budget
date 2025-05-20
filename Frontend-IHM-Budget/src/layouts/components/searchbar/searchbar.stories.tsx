import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'src/theme/theme-provider';
import { MemoryRouter } from 'react-router-dom';

import { Searchbar } from './searchbar';

const meta: Meta<typeof Searchbar> = {
  title: 'Components/Searchbar',
  component: Searchbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { 
    sx: {
      control: 'object',
      description: 'Styles applied to the search bar',
    },
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
type Story = StoryObj<typeof Searchbar>;

export const Default: Story = {
  args: {
    sx: {},
  },
};

export const CustomBackground: Story = {
  args: {
    sx: { backgroundColor: 'primary.light' },
  },
};

export const WithCustomPadding: Story = {
  args: {
    sx: { px: 10 },
  },
};

export const DisabledState: Story = {
  args: {
    sx: { pointerEvents: 'none', opacity: 0.5 },
  },
};
