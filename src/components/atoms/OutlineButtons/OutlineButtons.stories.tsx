import type { Meta, StoryObj } from '@storybook/react';
import { OutlineButtons } from '../../atoms';

// define meta info
const meta: Meta<typeof OutlineButtons> = {
    component: OutlineButtons,
    title: 'TailGridButtons/OutlineButtons',
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
type Story = StoryObj<typeof OutlineButtons>;

export const Button: Story = {
  args: {
    children: 'Buton',
    color: 'dark',
    fullWidth: false,
    onclick: ()=> alert('Hello world'),
    size: 'sm',
  }
}