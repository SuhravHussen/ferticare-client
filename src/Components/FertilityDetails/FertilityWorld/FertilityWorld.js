import React from "react";
import successRate from '../../../images/successRate.webp'
import causes from '../../../images/Causes.webp'
import doctors from '../../../images/doctors.webp'
import './FertilityWorld.css'
import { Link } from "react-router-dom";
const FertilityWorld = () => {
  return (
    <div className="fertility-world-container">
      <h1>Fertility World</h1>
      <div className="world-details-container">
        <div className="single-world-details">
            <img src={successRate} alt="" />
            <div className="world-details-link"><a href="#">Success Rate</a></div>
            <p>In India, average take-home baby rates in IVF is 30-35% vs global success rate of 40%. This rate can higher or lower based on certain factors.</p>
            <div>
                <Link style={{color:'#5C2E76'}} to='/'>Read More</Link>
            </div>
        </div>

        <div className="single-world-details">
            <img src={causes} alt="" />
            <div className="world-details-link"><a href="#">Infertility causes</a></div>
            <p>Age, PCOD, lifestyle factors (alcohol, tobacco consumption) are leading causes. Both men and women can be responsible for fertility issues.</p>
            <div>
                <Link style={{color:'#5C2E76'}} to='/'>Read More</Link>
            </div>
        </div>

        <div className="single-world-details">
            <img src={doctors} alt="" />
            <div className="world-details-link"><a href="#">Doctors</a></div>
            <p>Consult with highly experienced doctors specialized in infertility treatment.</p>
            <div className="read-more">
                <Link to='/' style={{color:'#5C2E76'}}>Read More</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FertilityWorld;
