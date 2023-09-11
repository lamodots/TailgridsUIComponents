import type { Meta, StoryObj } from "@storybook/react";
import { FullRadiusButtons } from "../../atoms";

// define meta
const meta:Meta <typeof FullRadiusButtons> = {
    component: FullRadiusButtons,
    title: 'TailGridButtons/FullRadiusButtons',
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: {type: 'select'},
            options: ['sm', 'md', 'lg']
        },

        color: {
            control: {type: 'select'},
            options: ['primary', 'secondary', 'dark']
        },
        fullWidth: {
            control: {type: 'boolean'},
            
        }
    }

}

// export meta
export default meta

type Story = StoryObj<typeof FullRadiusButtons>;

// Create Story
export const Button:Story ={
    args: {
        children: 'Button',
        color: 'primary',
        fullWidth: false,
        onclick: ()=> alert('Hurray!!'),
        size: 'sm',

    }
}