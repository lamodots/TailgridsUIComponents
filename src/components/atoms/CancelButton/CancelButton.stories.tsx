import type { Meta, StoryObj } from '@storybook/react';
import CancelButton from './CancelButton';


const meta: Meta<typeof CancelButton> = {
  component: CancelButton,
  title: 'Cancel Button'
};

export default meta;

export const Cancel: StoryObj<typeof CancelButton>= {
  render: () => <CancelButton color='primary'  />,
};
