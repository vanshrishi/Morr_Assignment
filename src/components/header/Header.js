import React from 'react'
import './header.css'
const Header =(props)=>
{
    
    return(
        <div>
            <h3> DEMO Streaming  <button className='login'>Login</button>  <button className='start'>Start your free trial</button></h3>
            <h4> Popular {props.name}</h4>
        </div>
    )
}
export default Header