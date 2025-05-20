import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'src/theme/theme-provider';
import { MemoryRouter } from 'react-router-dom';
import { RefTableHead } from './reference-table-head';

const meta: Meta<typeof RefTableHead> = {
  title: 'sections/Reference/referenceTableHead',
  component: RefTableHead,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orderBy: {
      control: 'text',
      description: 'Column to order by',
    },
    rowCount: {
      control: 'number',
      description: 'Total number of rows',
    },
    numSelected: {
      control: 'number',
      description: 'Number of selected rows',
    },
    order: {
      control: 'radio',
      options: ['asc', 'desc'],
      description: 'Order direction',
    },
    onSort: { action: 'sorted' },
    onSelectAllRows: { action: 'select all rows' },
    headLabel: {
      control: 'object',
      description: 'Labels for table head',
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
type Story = StoryObj<typeof RefTableHead>;

export const Default: Story = {
  args: {
    orderBy: 'name',
    rowCount: 5,
    numSelected: 0,
    order: 'asc',
    headLabel: [
      { id: 'name', label: 'Name', align: 'left' },
      { id: 'age', label: 'Age', align: 'right' },
    ],
  },
};

export const AllSelected: Story = {
  args: {
    ...Default.args,
    numSelected: 5,
  },
};

export const SomeSelected: Story = {
  args: {
    ...Default.args,
    numSelected: 2,
  },
};
export const MultipleColumns: Story = {
  args: {
    orderBy: 'name',
    rowCount: 5,
    numSelected: 0,
    order: 'asc',
    headLabel: [
      { id: 'name', label: 'Name', align: 'left' },
      { id: 'age', label: 'Age', align: 'right' },
      { id: 'role', label: 'Role', align: 'left' },
      { id: 'status', label: 'Status', align: 'center' },
      { id: 'company', label: 'Company', align: 'left' },
      { id: 'verified', label: 'Verified', align: 'center' },
    ],
    onSelectAllRows: (checked: boolean) => {
      console.log(`All rows ${checked ? 'selected' : 'deselected'}`);
    },
  },
};
