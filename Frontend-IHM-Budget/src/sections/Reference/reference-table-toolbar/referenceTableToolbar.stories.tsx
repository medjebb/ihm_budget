import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'src/theme/theme-provider';

import { RefTableToolbar } from './reference-table-toolbar';

const meta: Meta<typeof RefTableToolbar> = {
  title: 'sections/Reference/referenceTableToolbar',
  component: RefTableToolbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    numSelected: {
      control: 'number',
      description: 'Number of selected rows',
    },
    filterSearch: {
      control: 'text',
      description: 'Filter input value',
    },
    onFilter: { action: 'filter changed' },
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
type Story = StoryObj<typeof RefTableToolbar>;

export const Default: Story = {
  args: {
    numSelected: 0,
    filterSearch: '',
  },
};

export const WithSelectedRows: Story = {
  args: {
    numSelected: 3,
    filterSearch: '',
  },
};

export const WithFilterText: Story = {
  args: {
    numSelected: 0,
    filterSearch: 'BOURHAZI AHMED',
  },
};
