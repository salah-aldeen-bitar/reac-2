import React, { Fragment } from "react";

import Header from "./header";
import './home.css';
import Data from "../../data.js";
import logo1 from "../../img/1.png"

const Home = ()=> {
const  Api = Data.map((item)=>{
    return(
        <div className="col-md-4 col-sm-12 api-item " key={item.time}>
            <div className="contan">
            <img src={item.img}  alt="vaild"></img>
            <h2>{item.title}</h2><span className="br"></span><h3>{item.old}</h3>
            <h6>done on: {item.time}</h6>
            <span>price: {item.price}</span>
            <button className="btn-1 btn-select"><a href="home">select meal</a></button>
            </div>
        </div>
    )
})
    return(
       <Fragment>
            <Header/>
            <section className="number">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>4587+</h2>
                            <h6>PHOTOS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>1287+</h2>
                            <h6>ROCETS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>1287+</h2>
                            <h6>GLOBES</h6>
                          </div>    
                        <div className="col-md-3">
                            <h2>1452+</h2>
                            <h6>SAVING</h6>
                        </div>    
                    </div>
                </div>
            </section>
    <section className="about">
        <div className="container">
            <div class="row">
                    <div className="roww col-md-6 col-12">
                           
                           
                                 <h3 className="title1">at your servies</h3>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                                   Dolorem excepturi voluptatibus necessitatibus ducimus vitae quisquam amet autem culpa reiciendis <span>delectus!</span>
                                  <br></br> Odit optio rem excepturi quisquam praesentium ad error qui nobis.
                                 </p>
                                <button className="btn-1">VISIT US</button>
                               
                                 
                           
                               
                           
                           </div>
                    <div className="row2 col-md-6 col-12 row-padding">
                        <div className="hov1"></div>
                            <img src={logo1}  alt="vaild"></img>
                        </div>
                    </div>
            
        </div>
    </section>
    <section className="meal">
        <div className="container">
            <div className="titel-meal">
               <h2>the special today</h2>
            </div>
            <div className="row">
                 {Api}
            </div>
        </div>
    </section>
        
       </Fragment>

            
     
        
    )
}
export default Home; 




