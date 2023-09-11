import type { Meta, StoryObj} from "@storybook/react";
import { RadiusButtons } from "../../atoms";

// Define meta
const meta: Meta <typeof RadiusButtons> = {
     component: RadiusButtons,
     title: 'TailGridButtons/RadiusButton',
     tags: ['autodocs'],
     argTypes:{
        size:{
            control: { type: 'select'},
            options: ['sm', 'md', 'lg']
        },
        color: {
            control: { type: 'select'},
            options: ['primary', 'secondary', 'dark']
        },
        fullWidth:{
            control: { type: 'boolean'},
          
        }
     }

}

// export meta
export default meta


// Create stories
type Story = StoryObj<typeof RadiusButtons>;

export const Button:Story = {
    args: {
        children: 'Button',
        color:'dark',
        fullWidth: false,
        onclick: () =>  alert('You cliked me'),
        size:'sm',
      
    }
}