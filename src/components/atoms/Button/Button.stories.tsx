import type { Meta, StoryObj } from '@storybook/react';
import  Button from "./Button";
import { Chevron } from '../../../assets/icons';



const meta: Meta<typeof Button> = {
  component: Button,
  title: "Back Button",

  argTypes:{
    size:{
      control: {
        type: 'inline-radio',
      },
      option : ['sm' ,'md', 'lg']
    },
    color: {
      control:{
        type: 'inline-radio',
      },
      option: ['primary', 'secondary']
    }
    
  }

};

export default meta;

type Story = StoryObj<typeof Button>;

// export const Large: Story = {
//   render: () => <Button color='primary'size="lg" icon={<Chevron />}>back</Button>,
 
// };

// export const Medium: Story = {
//   render: () => <Button color='primary' size='md' icon={<Chevron />}>back</Button>,
  
// };

// export const Small: Story = {
//   render : () => <Button color='primary' size='sm' icon={<Chevron />}></Button>,
  
// }


export const ButtonVariant: Story = {
  args: {
    color: 'primary',
    size: 'lg',
    icon: <Chevron />  ,
    children:'Button'
    
    
  }
};

// export const Medium: Story = {
//   args: {
//     color: 'primary',
//     size: 'md',
//     children: 'Buttton Medium'
//   }
// };

// export const Small: Story = {
//   args: {
//     color:'primary',
//     size: 'sm',
//     children: 'Button Small'
//   }
// }




// This is how to write story in older version
// const Template: Story = (args)=>  <Button {...args}>Back</Button>


// export const Back  = Template.bind({});
// Back.args= {
//   size: 'lg',
//   color: 'primary'
// }
