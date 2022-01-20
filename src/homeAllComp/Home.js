import React from 'react';
import NavBar from './NavBar';
import './home.css';


 function Home(props) {
    return (
        <div className="homeMain">
            <div className="navAndSearchBoxHolder">
            <NavBar/> 
            </div>
           
        </div>
    );
}

export default Home;


