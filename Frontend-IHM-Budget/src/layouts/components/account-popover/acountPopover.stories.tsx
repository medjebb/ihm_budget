  import type { Meta, StoryObj } from '@storybook/react';
  import HomeIcon from '@mui/icons-material/Home';
  import SettingsIcon from '@mui/icons-material/Settings';
  import PersonIcon from '@mui/icons-material/Person';
  import NotificationsIcon from '@mui/icons-material/Notifications';
  import { MemoryRouter } from 'react-router-dom';
  import { ThemeProvider } from 'src/theme/theme-provider';

  import { AccountPopover } from './account-popover';

  const meta: Meta<typeof AccountPopover> = {
    title: 'Components/AccountPopover',
    component: AccountPopover,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
      data: {
        control: 'object',
        description: 'Menu items for the popover',
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
  type Story = StoryObj<typeof AccountPopover>;

  export const Default: Story = {
    args: {
      data: [
        {
          label: 'Home',
          href: '/home',
          icon: <HomeIcon />,
        },
        {
          label: 'Profile',
          href: '/profile',
          icon: <PersonIcon />,
        },
        {
          label: 'Settings',
          href: '/settings',
          icon: <SettingsIcon />,
        },
      ],
    },
  };

  export const CustomSize: Story = {
    args: {
      ...Default.args,
      sx: { width: 50, height: 50 },
    },
  };

  export const WithAdditionalInfo: Story = {
    args: {
      data: [
        {
          label: 'Home',
          href: '/home',
          icon: <HomeIcon />,
          info: <span style={{ color: 'green' }}>New</span>,
        },
        {
          label: 'Notifications',
          href: '/notifications',
          icon: <NotificationsIcon />,
          info: <span style={{ color: 'red' }}>2 updates</span>,
        },
      ],
    },
  };

  export const EmptyMenu: Story = {
    args: {
      data: [],
    },
  };

  // export const LongMenuItems: Story = {
  //   args: {
  //     data: [
  //       {
  //         label: 'Very Long Menu Item 1',
  //         href: '/long-item-1',
  //         icon: <HomeIcon />,
  //       },
  //       {
  //         label: 'Another Very Long Menu Item',
  //         href: '/long-item-2',
  //         icon: <SettingsIcon />,
  //       },
  //     ],
  //   },
  // };

  export const DisabledState: Story = {
    args: {
      disabled: true,
    },
  };
