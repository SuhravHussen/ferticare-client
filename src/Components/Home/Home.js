import React from 'react';
import BookBox from '../Bookbox/BookBox';
import Menu from '../Menu/Menu';
import Services from '../Services/Services';
import Treatments from '../Treatments/Treatments';
import './Home.css'
const Home = () => {
    return (
        <div className="home-container">
            <Menu/>
            <BookBox/>
            <Treatments/>
            <Services/>
        </div>
    );
};

export default Home;