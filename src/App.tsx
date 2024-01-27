import {  FormEvent, useState } from "react"
import MainLayout from "./component/layout/MainLayout"
import Button from "./ui/Button"
import Modal from "./component/Modal"



function App() {
  // for modal 
  const [modal , setModal] = useState(false)

  const handleModalClose = ()=>{
       setModal((prev => !prev))
  }

  const handleSubmit = (e:FormEvent) =>{
    e.preventDefault()
    console.log('clicked')
 
    
  }

  return (
    <>
       <MainLayout/>

        <div className="">
        <Button onClick={()=>setModal((prev)=>!prev)}  className="btn   p-4 m-16 text-2xl rounded-lg w-[500px]"  variant='outline' >Modal</Button>
        </div>

      {/* modal work */}

         <Modal isOpen={modal}  onClose={handleModalClose}>
          <Modal.Header>
          <h1>this is modal vai</h1>
                   <Modal.closeButton>  
                   </Modal.closeButton>
          </Modal.Header>

          <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="" />
            <input type="submit" value="submit" />
          </form>
       
         </Modal>
    </>
  )
}

export default App
