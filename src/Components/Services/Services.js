import React from 'react';
import './Services.css'
import doctor from '../../images/doctor.jpg'
import Fertility from '../../images/fertility.png'
import opinion from '../../images/opinion.png' 
const Services = () => {
    return (
        <div className="service-container">
         <h1>OUR SERVICES</h1>
         <h6>We wIll assist you to find the right treatment to turn your dream into reality</h6>
         <div className="services">
                <div className="single-service">
                            <img src={doctor} alt="" />
                            <h3>Doctor Consultation</h3>
                            <p>Consult with a fertility doctor for a telephonic or face to face consultationn</p>

                </div>

                <div className="single-service">
                            <img src={Fertility} alt="" />
                            <h3><span>Fertility </span>  Companion</h3>
                            <p>Talk to our care manager who will help you find answer to your questions</p>

                </div>

                <div className="single-service">
                            <img src={opinion} alt="" />
                            <h3>Second Opinion Report</h3>
                            <p>Get written advice from best doctors before or during your treatment</p>

                </div>

         </div>
        </div>
    );
};

export default Services;<h1>d</h1>