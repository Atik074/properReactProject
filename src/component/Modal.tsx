import { MouseEvent, ReactNode, createContext, useContext, useRef } from "react";
import cn from "../utils/cn";
import { createPortal } from "react-dom";

export const ModalContext = createContext<TModalContext | null>(null)

type TModalContext = {
    onClose : ()=> void ;
}

type TModal ={
        isOpen: boolean ;
        onClose : ()=> void ;
        children : ReactNode ;
}

type TCloseButton = {
    children? : ReactNode ;
}
type THeader = TCloseButton ;


const Modal = ({isOpen , onClose, children}:TModal)=>{
    const containerRef = useRef<HTMLDivElement>(null)

    const hanldleOutSideClose = (e:MouseEvent)=>{
        if(!containerRef.current?.contains(e.target as Node)){
            onClose();
        }
    }

    return createPortal(
   
<ModalContext.Provider value={{onClose}}>

  <div
       className={cn("fixed inset-0 bg-gray-500/70 z-[99]" , 
           {
         visible: isOpen }
         )}
         onClick={hanldleOutSideClose}
         >
        
        <div ref={containerRef} className="bg-green-800 w-full max-w-sm
        ">
           {children}
        </div>

    </div> 
    </ModalContext.Provider> ,
     document.getElementById("portal") as Element

    )
};

const closeButton = ({children}:TCloseButton)=>{
    const {onClose} = useContext(ModalContext) as TModalContext;

    return <button onClick={onClose}>
     {
        children ? (children) : (
            <svg
            xmlns="http://www.w3.org/2000/svg"
             fill="none" viewBox="0 0 24 24" 
             strokeWidth={4} 
             stroke="currentColor" 
             className="w-6 h-6 size-5 bg-red-700 rounded-sm text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
       </svg>

        )
     }
       
    

        
    </button>
   }

   const Header = ({children}:THeader)=>{
     return <div className="flex w-full">{children}</div>
   }


   Modal.Header = Header
 Modal.closeButton = closeButton;
export default Modal ;


