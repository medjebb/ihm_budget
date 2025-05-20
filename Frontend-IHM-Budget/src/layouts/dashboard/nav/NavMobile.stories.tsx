import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'src/theme/theme-provider';
import { MemoryRouter } from 'react-router-dom';
import { NavMobile } from './nav';
import { navData } from './config-nav';

const meta: Meta<typeof NavMobile> = {
  component: NavMobile,
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
type Story = StoryObj<typeof NavMobile>;

export const WithNoData_OpenTrue: Story = {
  args: {
    data: [],
    open: true,
    onClose: () => {},
  },
};

export const WithData_OpenTrue: Story = {
  args: {
    data: navData,
    open: true,
    onClose: () => {},
  },
};

// export const WithLayoutQueryLg: Story = {
//   args: {
//     data: navData,
//   },
// };
