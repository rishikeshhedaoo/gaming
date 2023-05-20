import React from 'react';
import './App.css';
import './nav.css';
import { Link } from "react-router-dom";


function joy(e)
{
    // document.getElementById("nav").style.backgroundImage="none";
    document.getElementById("nav").style.height ="800px";
}
function joy1()
{
    document.getElementById("nav").style.backgroundSize ="45%";
    document.getElementById("nav").style.height ="800px";
    
    
}

let jay =0;

function  menu()
{   
    if(jay==0)
    { 
        document.getElementsByClassName("navop0")[0].style.display ="flex";
        document.getElementById("nav").style.backgroundSize="0";
        jay = "1";
    }
    else
    {
        document.getElementsByClassName("navop0")[0].style.display ="none";
        document.getElementById("nav").style.backgroundSize ="45%";
        jay = "0";
    }
}

function nav(){
    return(
        <div className='nav' id='nav'>
            <div className='logo'>
                <b>LOGO</b>
            </div>
            <div className='menuop' onClick={menu}>
                ☰
            </div>
            <div className='navop'>

                <div className='navop1 '>
                    <Link className='joystick' to={"./"} onClick={joy1}>Home</Link>
                    <Link to={"./About"} onClick={joy}>About</Link>
                    <Link to={"./PortFolio"} onClick={joy} >PortFolio</Link>
                    <Link to={"./News"} onClick={joy}>News</Link>
                </div>
                <div className='navop2'>
                <Link to={"./ContactUs"} ><button type="submit" onClick={joy}> Contact Us</button></Link>
                </div>
            </div>

            <div className='navop0 '>

                <div className='navop10 '>
                    <Link className='joystick0' to={"./"} onClick={joy1}>Home</Link>
                    <Link to={"./About"} onClick={joy}>About</Link>
                    <Link to={"./PortFolio"} onClick={joy} >PortFolio</Link>
                    <Link to={"./News"} onClick={joy}>News</Link>
                </div>
                <div className='navop20'>
                <Link to={"./ContactUs"} ><button type="submit" onClick={joy}> Contact Us</button></Link>
                </div>
            </div>
        </div>
    );
}

export default nav