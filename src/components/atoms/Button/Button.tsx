import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants';


 
const button = tv({
  base: " bg-white rounded-lg shadow justify-center items-center gap-2.5 flex px-16 py-12 uppercase ",
  variants: {
    color: {
      primary: "bg-white rounded-lg shadow justify-center items-center gap-2.5 flex px-16 py-12 uppercase text-black text-sm font-normal",
      secondary: "bg-black text-white",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-3 text-lg",
    },
  },
  compoundVariants: [
    {
      size: ["sm", "md"],
      class: "px-3 py-1",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
  }
});
 
 
 
interface ButtonProps extends VariantProps<typeof button>{
  children?: React.ReactNode;
  onclick?: ()=> void;
  icon?: React.ReactNode;
 
  
}
 
const Button = ( {size , color , children, icon, onclick}: ButtonProps) => {
  return <button onClick={onclick} className={button({size , color}) } >{icon}{children}</button>;
};

export default Button;