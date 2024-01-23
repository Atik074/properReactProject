
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react';
import cn from '../utils/cn';

type TRef = HTMLButtonElement
type  TButton = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement> & TButtonOptions

type TVariant = 'ghost' | 'btn' | 'outline'

type TButtonOptions = {
    variant : TVariant;
}

const Button = forwardRef<TRef , TButton>(({className, variant , ...rest}, ref) => {

    const getVariant = (variant:TVariant)=>{
        switch (variant) {
            case "outline":
                return "btn-outline"
                
              case 'ghost' :
                return "btn-ghost"
        
            default:
             return "btn-solid";
        }
    }


    return <button {...rest} ref={ref} className={cn(
        getVariant(variant) ,className
    )}>Click</button>
});

export default Button;