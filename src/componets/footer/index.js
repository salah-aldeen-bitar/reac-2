import React from "react";
import './style.css';
import logo from "../../img/1.png";
const Footer = ()=>{
    return(

        <div className="footer">
           <div className="container">
           <div className="row">
                <div className="col-md-2 col-12">
                <center><img src={logo} alt="vaild"></img></center>
                </div>
                <div className="col-md-6 col-12">
                <center>
                    <i className="icon fa fa-twitter fa-2x"></i>
                    <i className="icon fa fa-youtube fa-2x"></i>
                    <i className="icon fa fa-facebook fa-2x"></i>
                    <i className="icon fa fa-telegram fa-2x"></i>
                    <i className="icon fa fa-instagram fa-2x"></i><br></br>
                    <span>DESINED BY SALAH BITAR</span><br></br>
                    <span>COPY RIGHT PROTECTED FOR 2023</span>
                    
                </center>
                   
                   
                </div>
                <div className="col-md-4 col-12">
                       <div className="letsgo">
                        <h5>LET'S GO</h5>
                        
                        <ul>
                            <li><i className="icon fa fa-user fa-lg"></i>SALAH BITAR</li>
                           
                            <li><i class="fa fa-shopping-bag" aria-hidden="true"></i>FRONT-END</li>
                           
                            <li> <i className="icon fa fa-phone fa-lg"></i>0941537951</li>
                           
                            <li> <i className="icon fa fa-facebook fa-lg"></i>salah bitar</li>
                        </ul> 
                      </div>   
                </div>
            </div>
           </div>
            
           

        </div>

    )
}

export default Footer;

