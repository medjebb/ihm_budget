import { Meta, StoryObj } from '@storybook/react/*';
import { ThemeProvider } from 'src/theme/theme-provider';
import { ReferenceDialogActions } from './referenceDialogActions';

const meta: Meta<typeof ReferenceDialogActions> = {
  title: 'sections/Reference/ReferenceDialogActions',
  component: ReferenceDialogActions,
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
type Story = StoryObj<typeof ReferenceDialogActions>;

export const InFirstPage: Story = {
  args: {
    activeStep: 0,
    handleBack: () => console.log('Back button clicked'),
    handleNext: () => console.log('Next button clicked'),
    onCreate: () => console.log('Create button clicked'),
    numberPages: 3,
  },
};
export const InTheMidletPage: Story = {
  args: {
    activeStep: 1,
    handleBack: () => console.log('Back button clicked'),
    handleNext: () => console.log('Next button clicked'),
    onCreate: () => console.log('Create button clicked'),
    numberPages: 3,
  },
};

export const inTheLastPage: Story = {
  args: {
    activeStep: 2,
    handleBack: () => console.log('Back button clicked'),
    handleNext: () => console.log('Next button clicked'),
    onCreate: () => console.log('Create button clicked'),
    numberPages: 3,
  },
};
