import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import App from '../App';
import AdminLayout from '../component/layout/AdminLayout';


const router = createBrowserRouter([
      {
           path:"/" ,
         element: <App/>,
         children:[
            {
                index:true ,
                element:<Home/>
            },
            {
                path:"about" ,
                element:<About/>
            }
         ]
    },
    {
        path:'admin',
        element:<AdminLayout/>,
        children:[
            {
             index:true ,
             element:<p>this is admin layout</p>
            },
          
            
        ]
    }
])


export default router;