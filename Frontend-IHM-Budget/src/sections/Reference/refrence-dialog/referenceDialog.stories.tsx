import { Meta, StoryObj } from '@storybook/react/*';
import { ThemeProvider } from 'src/theme/theme-provider';
import { DialogReference } from './reference-dialog';

const meta: Meta<typeof DialogReference> = {
  title: 'sections/Reference/DialogReference',
  component: DialogReference,
  argTypes: {},
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DialogReference>;

export const Default: Story = {
  args: {},
};
