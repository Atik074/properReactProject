import { useState } from "react"
import MainLayout from "./component/layout/MainLayout"
import Button from "./ui/Button"



function App() {
  // for modal 
  const [modal , setModal] = useState(false)

  const handleModalClose = ()=>{

  }

  return (
    <>
       <MainLayout/>

        <div>
        <Button className="btn   p-4 m-16 text-2xl rounded-lg w-[500px]"  variant='outline'  isOpen={modal} onClose={handleModalClose} ></Button>
        </div>

      {/* modal work */}

    <button className="p-4  bg-red-600 text-2xl m-10 rounded-md"    >Open Modal</button>

    </>
  )
}

export default App
