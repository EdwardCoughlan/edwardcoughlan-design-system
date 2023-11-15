import type { Meta, StoryObj } from '@storybook/react';
import { ReactComponents } from './react-components';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ReactComponents> = {
  component: ReactComponents,
  title: 'ReactComponents',
};
export default meta;
type Story = StoryObj<typeof ReactComponents>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ReactComponents!/gi)).toBeTruthy();
  },
};
