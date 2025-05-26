import { useContext } from 'react';
import './about.css'
import { GiSkills } from "react-icons/gi"
import { MdCastForEducation } from "react-icons/md";
import Contect from '../contect/contect';
import { Context } from '../../context/context';
let About = ()=>{
  let {mode} = useContext(Context)
     return <> {mode=="dark"? <div className='about-section' id='about'>
           <p style={{color:"white",fontSize:"35px",textAlign:"center"}}>About me</p>
           <div className='pic-about'>
               <img src="https://media.licdn.com/dms/image/v2/D4D03AQE-4chE9AUJSg/profile-displayphoto-shrink_800_800/B4DZZCmfrwGwAc-/0/1744874113781?e=1753315200&v=beta&t=nmE_bnRCgltXMBO7VP06Ij0fEC0D-iQzXDM8fXsmSjI" height={200} width={200} alt="" className='picture'/>
               <div className='about'>
                          <div className='about-pera'>
                      <p> I am an Frontend Developer</p>
                      <p> with a strong love for building beautuful,</p> 
                      <p>user-freindly web interfaces.I specialize in HTML, CSS, Javascript, and React.js. </p>
                      </div>
                      <div className='programing-section'>
                          <div className='programing' style={{color:"white"}}>
                                 <p>HTML</p>
                                 <p>CSS</p>
                             <p>Javascript</p>
                                 <p>React JS</p>

                                 
                          </div>
                          <div className='graph'>
                                 <div className='div1'></div>
                                  <div className='div2'></div>
                                   <div className='div3'></div>
                                   <div className='div4'></div>
                          </div>
                      </div>
                       <div className='skill-container'>
                              <div className='skill'>
                                  <GiSkills/>
                                <p style={{fontSize:"20px",fontWeight:"bolder"}}>Skills</p>
                                <p>HTML,CSS,Javascript,React.js</p>
                              </div>
                              <div className='skill'>
                                  <img src="https://i.pinimg.com/originals/20/4c/fd/204cfda4301da1732423e41e57ac2945.png" width={20} height={20} alt="" />
                                <p style={{fontSize:"20px",fontWeight:"bolder"}}>Education</p>
                                <p>Self-taught developer, learning coding through Youtube</p>
                              </div>
                              <div className='skill'>
                                  <img src="https://cdn-icons-png.flaticon.com/512/9785/9785470.png"width={30} height={30}  alt="" />
                                <p style={{fontSize:"20px",fontWeight:"bolder"}}>Projects</p>
                                <p>Built more then 5 projects</p>
                              </div>
                      </div>
                      <div className='tools-container'>
                            <p>Tools I Used</p>
                             <div className='tools-section'>
                                    <div className='tool'>
                                      <img src="https://static-00.iconduck.com/assets.00/visual-studio-code-icon-1024x1018-qwdvzpo8.png" width={20} height={20}  alt="" />
                                    </div>
                                    <div className='tool'>
                                      <img src="https://static-00.iconduck.com/assets.00/github-icon-2048x2048-dpporae2.png" width={20} height={20}  alt="" />
                                    </div>
                                    <div className='tool'>
                                      <img src="https://imagepng.org/wp-content/uploads/2019/08/google-chrome-icon-1.png" width={20} height={20}  alt="" />
                                    </div>
                                    <div className='tool'>
                                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width={20} height={20}  alt="" />
                                    </div>
                             </div>
                      </div>
                      
               </div>
              
           </div>

     </div>: <div className='about-section' id='about'>
           <p style={{color:"black",fontSize:"35px",textAlign:"center"}}>About me</p>
           <div className='pic-about'>
               <img src="https://media.licdn.com/dms/image/v2/D4D03AQE-4chE9AUJSg/profile-displayphoto-shrink_800_800/B4DZZCmfrwGwAc-/0/1744874113781?e=1753315200&v=beta&t=nmE_bnRCgltXMBO7VP06Ij0fEC0D-iQzXDM8fXsmSjI" height={200} width={200} alt="" className='picture'/>
               <div className='about'>
                          <div className='about-pera' style={{color:"black"}}>
                      <p> I am an Frontend Developer</p>
                      <p> with a strong love for building beautuful,</p> 
                      <p>user-freindly web interfaces.I specialize in HTML, CSS, Javascript, and React.js. </p>
                      </div>
                      <div className='programing-section'>
                          <div className='programing' style={{color:"black"}}>
                                 <p>HTML</p>
                                 <p>CSS</p>
                             <p>Javascript</p>
                                 <p>React JS</p>

                                 
                          </div>
                          <div className='graph'>
                                 <div className='div1'></div>
                                  <div className='div2'></div>
                                   <div className='div3'></div>
                                   <div className='div4'></div>
                          </div>
                      </div>
                       <div className='skill-container'>
                              <div className='skill-light'>
                                  <GiSkills style={{color:"black"}}/>
                                <p style={{fontSize:"20px",fontWeight:"bolder",color:"black"}}>Skills</p>
                                <p style={{color:"black"}}>HTML,CSS,Javascript,React.js</p>
                              </div>
                              <div className='skill-light'>
                                  <img src="https://i.pinimg.com/originals/20/4c/fd/204cfda4301da1732423e41e57ac2945.png" width={20} height={20} alt="" />
                                <p style={{fontSize:"20px",fontWeight:"bolder",color:"black"}}>Education</p>
                                <p style={{color:"black"}}>Self-taught developer, learning coding through Youtube</p>
                              </div>
                              <div className='skill-light'>
                                  <img src="https://cdn-icons-png.flaticon.com/512/9785/9785470.png"width={30} height={30}  alt="" />
                                <p style={{fontSize:"20px",fontWeight:"bolder",color:"black"}}>Projects</p>
                                <p style={{color:"black"}}>Built more then 5 projects</p>
                              </div>
                      </div>
                      <div className='tools-container'>
                            <p style={{color:"black"}}>Tools I Used</p>
                             <div className='tools-section'>
                                    <div className='tool-light'>
                                      <img src="https://static-00.iconduck.com/assets.00/visual-studio-code-icon-1024x1018-qwdvzpo8.png" width={20} height={20}  alt="" />
                                    </div>
                                    <div className='tool-light'>
                                      <img src="https://static-00.iconduck.com/assets.00/github-icon-2048x2048-dpporae2.png" width={20} height={20}  alt="" />
                                    </div>
                                    <div className='tool-light'>
                                      <img src="https://imagepng.org/wp-content/uploads/2019/08/google-chrome-icon-1.png" width={20} height={20}  alt="" />
                                    </div>
                                    <div className='tool-light'>
                                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width={20} height={20}  alt="" />
                                    </div>
                             </div>
                      </div>
                      
               </div>
              
           </div>

     </div>}</>
}
export default About