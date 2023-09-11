import type { Meta, StoryObj } from '@storybook/react';
import { SquareButton } from '../../atoms';

// define meta info
const meta: Meta<typeof SquareButton> = {
    component: SquareButton,
    title: 'TailGridButtons/SquareButtons',
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: {
                type: 'select',
            },
            options: ['primary', 'secondary', 'dark']
        },
        size: {
            control: {
                type: 'select',
            },
            options: ['sm', 'md', 'lg']
        },
        fullWidth: {
            control:{
                type:'boolean'
            }
        }
    }

}

// export meta
export default meta

// export stroy
type Story = StoryObj<typeof SquareButton>;

export const Button: Story = {
  args: {
    children: 'Buton',
    color: 'dark',
    fullWidth: false,
    onclick: ()=> alert('Hello world'),
    size: 'sm',
  }
}