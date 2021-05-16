import React, { useEffect } from 'react';
import { useState } from 'react';
import Leagues from '../Leagues/Leagues';

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
        <div>
            {/* <h4>this is home</h4>
            <h5>total leagues: {leagues.length}</h5> */}

            {
                leagues.map((league, index) => <Leagues key={index} league={league}></Leagues>)
            }
        </div>
    );
};

export default Home;