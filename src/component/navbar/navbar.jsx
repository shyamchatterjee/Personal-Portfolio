   import './navbar.css'
   import { FaBars } from "react-icons/fa6";
   import { CiLight } from "react-icons/ci";
   import { IoMdClose } from "react-icons/io";
   import AnchorLink from 'react-anchor-link-smooth-scroll'
   import { CiDark } from "react-icons/ci";
import { useContext, useState } from 'react';
import { Context } from '../../context/context';
let Navbar = ()=>{
   let [boolen,setBoolen] = useState(true)
       let clickbar = ()=>{
               setBoolen(false)
       }
       let [bool,setBool] = useState(true)
       let [page,setpage]  = useState("")
       let {mode,setMode} = useContext(Context)
       return <> {mode=="dark"?  <div className="navbar-section">
         <div className='canvas-icon'>
         <img src="https://www.pixelresort.com/wp-content/uploads/2022/12/procreate-icon.png" height={22} width={22} alt="" />
                  <p>Canvas.</p>
                  </div>
                  <div className="navbar">
                     
                <AnchorLink   href='#home'> <p  className={page=="home"?"active":""}   style={{color:"white"}}   onClick={()=>{setpage("home")}}>Home</p></AnchorLink> 
                <AnchorLink  href='#about'><p  style={{color:"white"}} className={page=="about"?"active":""}   onClick={()=>{setpage("about")}} >About me</p></AnchorLink>  
                 <AnchorLink href='#service'><p  style={{color:"white"}}  className={page=="service"?"active":""}  onClick={()=>{setpage("service")}} >Service</p></AnchorLink> 
                 <AnchorLink  href='#work'> <p  style={{color:"white"}}   className={page=="work"?"active":""}  onClick={()=>{setpage("work")}} >My Work</p></AnchorLink>
                 <AnchorLink  href='#contect'> <p  style={{color:"white"}} className={page=="contect"?"active":""}  onClick={()=>{setpage("contect")}} >Contect</p></AnchorLink>
                 </div>
                  <div className={boolen==true?"navbar-mobile":"navbar-change"}>
                     <IoMdClose className='close-icon' onClick={()=>{setBoolen(true)}} />
                  <AnchorLink   href='#home'> <p  className={page=="home"?"active":""} onClick={()=>{setpage("home")}}   style={{color:"white"}}  >Home</p></AnchorLink>
                  <AnchorLink  href='#about'> <p  style={{color:"white"}} className={page=="about"?"active":""}    onClick={()=>{setpage("about")}} >About me</p></AnchorLink>
                  <AnchorLink  href='#service'> <p  style={{color:"white"}}  className={page=="service"?"active":""}  onClick={()=>{setpage("service")}}  >Service</p></AnchorLink>
                  <AnchorLink href='#work'> <p  style={{color:"white"}} className={page=="work"?"active":""}   onClick={()=>{setpage("work")}} >My Work</p></AnchorLink>
                  <AnchorLink href='#contect'> <p  style={{color:"white"}} className={page=="contect"?"active":""} onClick={()=>{setpage("contect")}} >Contect</p></AnchorLink>
                  
                  </div>
                  <div className='button-icon'>
                 <AnchorLink href='#contect'><button className='contect-button'>Contact with me</button></AnchorLink>
                 {bool==true? <CiLight className='full-screen-icon' onClick={()=>{setBool(false),setMode("light")}} />:<CiDark className='full-screen-icon' onClick={()=>{setBool(true),setMode("dark")}}/>}
                  </div>

                      <div className='bar-mode'>
                    {bool==true? <CiLight className='mobile-screen-icon' onClick={()=>{setBool(false),setMode("light")}} />:<CiDark className='mobile-screen-icon' onClick={()=>{setBool(true),setMode("dark")}}/>}
                  <FaBars className='bar' onClick={clickbar}/>
              
               </div>



       </div>:  <div className="navbar-section">
         <div className='canvas-icon'>
         <img src="https://www.pixelresort.com/wp-content/uploads/2022/12/procreate-icon.png" height={22} width={22} alt="" />
                  <p style={{color:"black",fontWeight:"bold"}}>Canvas.</p>
                  </div>
                  <div className="navbar">
                     
                <AnchorLink   href='#home'> <p  className={page=="home"?"active":""}   style={{color:"black"}}   onClick={()=>{setpage("home")}}>Home</p></AnchorLink> 
                <AnchorLink  href='#about'><p  style={{color:"black"}} className={page=="about"?"active":""}   onClick={()=>{setpage("about")}} >About me</p></AnchorLink>  
                 <AnchorLink href='#service'><p  style={{color:"black"}}  className={page=="service"?"active":""}  onClick={()=>{setpage("service")}} >Service</p></AnchorLink> 
                 <AnchorLink  href='#work'> <p  style={{color:"black"}}   className={page=="work"?"active":""}  onClick={()=>{setpage("work")}} >My Work</p></AnchorLink>
                 <AnchorLink  href='#contect'> <p  style={{color:"black"}} className={page=="contect"?"active":""}  onClick={()=>{setpage("contect")}} >Contect</p></AnchorLink>
                 </div>
                  <div className={boolen==true?"navbar-mobile-light":"navbar-change-light"}>
                     <IoMdClose style={{color:"black"}} className='close-icon' onClick={()=>{setBoolen(true)}} />
                  <AnchorLink   href='#home'> <p  className={page=="home"?"active":""} onClick={()=>{setpage("home")}}   style={{color:"black"}}  >Home</p></AnchorLink>
                  <AnchorLink  href='#about'> <p  style={{color:"black"}} className={page=="about"?"active":""}    onClick={()=>{setpage("about")}} >About me</p></AnchorLink>
                  <AnchorLink  href='#service'> <p  style={{color:"black"}}  className={page=="service"?"active":""}  onClick={()=>{setpage("service")}}  >Service</p></AnchorLink>
                  <AnchorLink href='#work'> <p  style={{color:"black"}} className={page=="work"?"active":""}   onClick={()=>{setpage("work")}} >My Work</p></AnchorLink>
                  <AnchorLink href='#contect'> <p  style={{color:"black"}} className={page=="contect"?"active":""} onClick={()=>{setpage("contect")}} >Contect</p></AnchorLink>
                  
                  </div>
                  <div className='button-icon'>
                 <AnchorLink href='#contect'><button className='contect-button'>Contact with me</button></AnchorLink>
                 {bool==true? <CiLight  className='full-screen-icon' onClick={()=>{setBool(false),setMode("light")}} />:<CiDark style={{color:"black"}} className='full-screen-icon' onClick={()=>{setBool(true),setMode("dark")}}/>}
                  </div>

                      <div className='bar-mode'>
                    {bool==true? <CiLight className='mobile-screen-icon' onClick={()=>{setBool(false),setMode("light")}} />:<CiDark style={{color:"black"}} className='mobile-screen-icon' onClick={()=>{setBool(true),setMode("dark")}}/>}
                  <FaBars className='bar' style={{color:"black"}} onClick={clickbar}/>
              
               </div>



       </div>}</>
       
}
export default Navbar