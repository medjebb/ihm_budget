import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'src/theme/theme-provider';
import { _langs } from 'src/_mock';

import { LanguagePopover } from './language-popover';

const meta: Meta<typeof LanguagePopover> = {
  title: 'Components/LanguagePopover',
  component: LanguagePopover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Language options for the popover',
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
type Story = StoryObj<typeof LanguagePopover>;

export const Default: Story = {
  args: {
    data: [..._langs],
  },
};

export const CustomSize: Story = {
  args: {
    ...Default.args,
    sx: { width: 50, height: 50 },
  },
};

export const WithAdditionalLanguages: Story = {
  args: {
    data: [
      ..._langs,
      {
        value: 'de',
        label: 'German',
        icon: '/assets/icons/flags/ic-flag-de.svg',
      },
    ],
  },
};

export const EmptyMenu: Story = {
  args: {
    data: [],
  },
};

export const DisabledState: Story = {
  args: {
    disabled: true,
  },
};
