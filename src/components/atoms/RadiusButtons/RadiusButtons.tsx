import { tv, type VariantProps } from "tailwind-variants";

export const button = tv(
    {
        base: 'rounded-none bg-base text-white border-0 py-3 px-10 flex flex-row gap-2 items-center justify-center',
        variants: {
          color: {
            primary: '  bg-primary  rounded-md py-3 px-10  border-0 font-inter flex flex-row gap-2 items-center  justify-center ',
            secondary: ' bg-secondary  rounded-md py-3 px-10  border-0 font-inter flex flex-row gap-2 items-center justify-center',
            dark: 'bg-dark py-3 px-10  rounded-md border-0  flex flex-row gap-2  font-inter items-center justify-center'
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

interface ButtonProps extends VariantProps<typeof button> {
children: React.ReactNode,
onclick: ()=> void

}


const Button = ({size, color, onclick, children, fullWidth}: ButtonProps)=> <button onClick={onclick} className={button({size, color, fullWidth}) }>{children}</button>;
export default Button