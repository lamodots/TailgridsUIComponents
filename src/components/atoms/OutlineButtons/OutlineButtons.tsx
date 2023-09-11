import { ReactNode } from 'react'
import {tv, type VariantProps} from 'tailwind-variants'

export const button = tv(
    {
        base: 'rounded-none text-white border border-solid border-base py-3 px-10 flex flex-row gap-2 items-center justify-center',
        variants: {
          color: {
            primary: 'rounded-md py-3 px-10  text-primary border border-solid border-primary font-inter flex flex-row gap-2 items-center  justify-center ',
            secondary: 'rounded-md py-3 px-10  text-secondary border border-solid border-secondary font-inter flex flex-row gap-2 items-center justify-center',
            dark: ' py-3 px-10  text-dark rounded-md  border border-solid border-dark  flex flex-row gap-2  font-inter items-center justify-center'
          },
          size: {
            sm: 'text-xs py-1 px-4 flex flex-row gap-2 items-center justify-center',
            md:' text-sm py-2 px-5 flex flex-row gap-2 items-center justify-center',
            lg: 'text-lg py-3 px-10 flex flex-row gap-2 items-center justify-center',
          },

          fullWidth: {
            true: 'w-full',
            false: 'py-3 px-10'
            
          }
        }
    }
)

interface ButtonProps extends VariantProps<typeof button>{
  children : ReactNode,
  onclick: ()=> void,


}
const Button = ({size,color, fullWidth, children,} : ButtonProps)=>{
    return (
        <button className={button({size,  color, fullWidth})}>{children}</button>
    )
}
export default  Button; 