import type { Meta, StoryObj } from '@storybook/react';
import { ReactTypography } from './react-typography';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ReactTypography> = {
  component: ReactTypography,
  title: 'ReactTypography',
};
export default meta;
type Story = StoryObj<typeof ReactTypography>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ReactTypography!/gi)).toBeTruthy();
  },
};
