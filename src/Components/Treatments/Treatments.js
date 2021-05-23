import React from 'react';
import './Treatments.css'
import ivf from '../../images/IVF.jpg'
import iui from '../../images/IUI.jpg'
import icsi from '../../images/ICSI.png'
import donor from '../../images/Donor.png'
import surrogacy from '../../images/Surrogacy.jpg'
const Treatments = () => {
  
    const treatments = [{name:'IVF',img:ivf}, {name:'IUI', img:iui}, {name:"ICSI", img: icsi} ,{name:'DONOR SPERM', img:donor} , {name:"SURROGACY", img:surrogacy}]

    return (
        <div className="treatments-container">
            <h1>Fertility Treatments</h1>
            <div className="treatments">
            {
                treatments.map(tr=>{
                    return(
                        <div className="single-treatment">
                           <img src={tr.img} alt="" />
                           <h5>{tr.name}</h5>
                        </div>
                        
                        
                        )
                })
            }
            </div>
        </div>
    );
}; 

export default Treatments;