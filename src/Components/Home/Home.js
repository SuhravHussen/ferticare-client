import React from 'react';
import BookBox from '../Bookbox/BookBox';
import FertilityDetails from '../FertilityDetails/FertilityDetails';
import Menu from '../Menu/Menu';
import Services from '../Services/Services';
import Treatments from '../Treatments/Treatments';
import './Home.css'
const Home = () => {

    return (
        <>
         <Menu/>
        <div className="home-container">
            <BookBox/>
            <Treatments/>
            <Services/>
            <FertilityDetails/>
        </div>
        </>
    );
};

export default Home;