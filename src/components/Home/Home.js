import React, { useEffect } from 'react';
import { useState } from 'react';
import Leagues from '../Leagues/Leagues';
import './Home.css';
import Image from '../../images/stadium-img.jpg';

const Home = () => {

    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(response => response.json())
            .then(data => setLeagues(data.leagues))
        //  .then(data => console.log(data.leagues))
    }, [])
    // console.log(leagues);
    return (
        <div className='home'>
            {/* <h4>this is home</h4>
            <h5>total leagues: {leagues.length}</h5> */}
            <div className="img-part">
                <img src={Image} alt="" />
                <h1 className='img-heading'><b>Sports Mania</b></h1>
            </div>
            <div className="all-leagues">
                {
                    leagues.map((league, index) => <Leagues key={index} league={league}></Leagues>)
                }
            </div>
        </div>
    );
};

export default Home;