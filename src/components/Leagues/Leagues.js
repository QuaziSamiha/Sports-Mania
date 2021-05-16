import React from 'react';
import './Leagues.css';

const Leagues = (props) => {

    console.log(props.league);

    const {strLeague, strSport } = props.league;
    return (
        <div className='league'>
            <h6>{strLeague}</h6>
            <p><small>{strSport}</small></p>
        </div>
    );
};

export default Leagues;