import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'src/theme/theme-provider';
import { BudgetView } from './budget-view';

const meta: Meta<typeof BudgetView> = {
  title: 'Sections/Budget/Budget-View',
  component: BudgetView,
  parameters: {
    layout: 'centered',
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
type Story = StoryObj<typeof BudgetView>;

export const Default: Story = {
  args: {},
};
