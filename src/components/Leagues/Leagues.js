import React from 'react';
import './Leagues.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Leagues = (props) => {

    // console.log(props.league);

    const { strLeague, strSport } = props.league;
    return (
        <div className='league'>
            <div className="logo-div">

            </div>
            <div className="info-div">
                <h6>{strLeague}</h6>
                <p><small>Sport Type: {strSport}</small></p>
                <button className='btn btn-info'>
                    Explore <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default Leagues;