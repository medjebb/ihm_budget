import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'src/theme/theme-provider';
import { TableNoData } from './table-no-data';

const meta: Meta<typeof TableNoData> = {
  title: 'sections/Reference/TableNoData',
  component: TableNoData,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    searchQuery: {
      control: 'text',
      description: 'Search query that returned no results',
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableNoData>;

export const Default: Story = {
  args: {
    searchQuery: 'example',
  },
};

export const NoQuery: Story = {
  args: {
    searchQuery: '',
  },
};

export const LongQuery: Story = {
  args: {
    searchQuery: 'a very long search query that returned no results',
  },
};
