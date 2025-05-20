import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'src/theme/theme-provider';
import { _dialogFormReferenceFieldsMockData } from 'src/_mock';
import { DialogFormReference } from './dialogFormReference';
import { DialogFormReferenceFields } from '../utils';

const meta: Meta<typeof DialogFormReference> = {
  title: 'sections/Reference/DialogFormReference',
  component: DialogFormReference,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'This component is used to display a dialog form for references.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the dialog',
    },
    openDialog: {
      control: 'boolean',
      description: 'Whether the dialog is open',
    },
    handleCloseDialog: {
      action: 'close dialog',
      description: 'Function to close the dialog',
    },
    handleSubmit: {
      action: 'submit form',
      description: 'Function to handle form submission',
    },
    dialogFormReferenceFields: {
      control: 'object',
      description: 'Fields for the dialog form',
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
type Story = StoryObj<typeof DialogFormReference>;

// const Template = (args: any) => {
//   const [openDialog, setOpenDialog] = useState(args.openDialog);

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//     args.handleCloseDialog();
//   };

//   return (
//     <DialogFormReference {...args} openDialog={openDialog} handleCloseDialog={handleCloseDialog} />
//   );
// };

export const Default: Story = {
  args: {
    openDialog: true,
    handleCloseDialog: () => {},
    handleSubmit: () => {},
    title: 'New Reference',
    dialogFormReferenceFields: _dialogFormReferenceFieldsMockData as DialogFormReferenceFields,
  },
};

// export const EmptyForm: Story = {
//   render: Template,
//   args: {
//     title: 'Empty Form',
//     openDialog: true,
//     dialogFormReferenceFields: {
//       year: [],
//       costCenter: [],
//       department: [],
//       activity: [],
//       subActivity: [],
//       catPlan: '',
//       client: [],
//       budgetType: '',
//       businessLine: [],
//       syntheticMapping: [],
//       billingKey: [],
//       businessResponsible: '',
//       comexMember: '',
//       active: false,
//     } as DialogFormReferenceFields,
//   },
// };

// export const FilledForm: Story = {
//   render: Template,
//   args: {
//     title: 'Filled Form',
//     openDialog: true,
//     dialogFormReferenceFields: _dialogFormReferenceFieldsMockData as DialogFormReferenceFields,
//   },
// };
