import App from './App';
import Home from './components/home/Home';
import About from './components/about/About';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


export default function Router(){
    
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            children:[
                {
                    path : 'about',
                    element:<About/>
                },
                {
                    path: '/',
                    element: <Home/>
                } 
            ]
        },
        
    ])
    return (
        <RouterProvider router = {router}/>        
    )
}
