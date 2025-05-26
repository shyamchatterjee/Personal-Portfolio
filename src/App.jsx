
import { useContext } from 'react'
import './App.css'
import About from './component/about/about'
import Contect from './component/contect/contect'
import Home from './component/home/home'
import Navbar from './component/navbar/navbar'
import Service from './component/service/service'
import Work from './component/work/work'
import { Context } from './context/context'
let App = ()=>{
     let {mode,setMode} = useContext(Context)
       return <> <div className={mode=="dark"?"body":"body-light"}>
       {mode=="dark"?<div className='container'>
           <Navbar/>
             <Home/>
             <About/>
             <Service/>
             <Work/>
       <Contect/>
       </div>:<div className='container' style={{backgroundColor:"white",color:"black"}}>
           <Navbar/>
             <Home/>
             <About/>
             <Service/>
             <Work/>
       <Contect/>
       </div>}
       </div>
       </>
}
export default App