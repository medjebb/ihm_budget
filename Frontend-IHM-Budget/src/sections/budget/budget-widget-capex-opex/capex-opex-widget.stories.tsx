import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'src/theme/theme-provider';
import { CapexOpexWidget } from './capex-opex-widget';

const meta: Meta<typeof CapexOpexWidget> = {
  title: 'Sections/Budget/Capex-opex-widget',
  component: CapexOpexWidget,
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
type Story = StoryObj<typeof CapexOpexWidget>;

export const Default: Story = {
  args: {
    title: 'Capex',
    total: 50000,
    currency: 'USD',
    color: 'primary',
  },
};
