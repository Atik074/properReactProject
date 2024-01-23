import MainLayout from "./component/layout/MainLayout"
import Button from "./ui/Button"



function App() {

  return (
    <>
       <MainLayout/>

    
        <div>
        <Button className="btn   p-4 m-16 text-2xl rounded-lg w-[500px]"  variant='outline' onClick></Button>
      
        </div>

    </>
  )
}

export default App
