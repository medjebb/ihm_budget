import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'src/theme/theme-provider';
import { MemoryRouter } from 'react-router-dom';
import { ReferenceType } from 'src/model/reference';
import { RefTableRow } from './reference-table-row';

const meta: Meta<typeof RefTableRow> = {
  title: 'sections/Reference/referenceTableRow',
  component: RefTableRow,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    row: {
      control: 'object',
      description: 'Reference data for the row',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the row is selected',
    },
    onSelectRow: { action: 'select row' },
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
type Story = StoryObj<typeof RefTableRow>;

const sampleRef: ReferenceType = {
  year: 2025,
  costCenter: 'IT',
  department: 'Engineering',
  activity: 'Development',
  subActivity: 'Frontend',
  catPlan: 'Plan A',
  client: 'Tech Corp',
  budgetType: 'Operational',
  businessLine: 'Software',
  syntheticMapping: 'Mapping A',
  billingKey: '12345',
  businessResponsible: 'John Doe',
  comexMember: 'Jane Smith',
  active: true,
};

export const Default: Story = {
  args: {
    row: sampleRef,
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    row: sampleRef,
    selected: true,
  },
};

export const BannedUser: Story = {
  args: {
    row: { ...sampleRef, active: false },
    selected: false,
  },
};

export const UnverifiedUser: Story = {
  args: {
    row: { ...sampleRef, client: 'Unverified Client' },
    selected: false,
  },
};
