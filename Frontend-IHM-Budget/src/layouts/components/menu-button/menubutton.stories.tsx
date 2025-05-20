import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'src/theme/theme-provider';
import { MenuButton } from './menu-button';

const meta: Meta<typeof MenuButton> = {
  title: 'Components/MenuButton',
  component: MenuButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    sx: {
      control: 'object',
      description: 'Styles applied to the IconButton',
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
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
type Story = StoryObj<typeof MenuButton>;

export const Default: Story = {
  args: {
    sx: {},
  },
};

export const CustomSize: Story = {
  args: {
    sx: { width: 50, height: 50 },
  },
};

export const CustomColor: Story = {
  args: {
    sx: { color: 'primary.main' },
  },
};

export const DisabledState: Story = {
  args: {
    disabled: true,
  },
};
