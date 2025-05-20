import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'src/theme/theme-provider';
import { TableEmptyRows } from './table-empty-rows';

const meta: Meta<typeof TableEmptyRows> = {
  title: 'sections/Reference/TableEmptyRows',
  component: TableEmptyRows,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    emptyRows: {
      control: 'number',
      description: 'Number of empty rows to display',
    },
    height: {
      control: 'number',
      description: 'Height of each empty row',
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
type Story = StoryObj<typeof TableEmptyRows>;

export const Default: Story = {
  args: {
    emptyRows: 3,
    height: 48,
  },
};
