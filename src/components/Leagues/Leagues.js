import React from 'react';
import './Leagues.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const Leagues = (props) => {

    // console.log(props.league);

    const { strLeague, strSport, idLeague } = props.league;

    const history = useHistory();
    const handleClick = (id) => {
        // console.log('clicked', id);
        const url = `/leagueDetail/${id}`;
        history.push(url);
    }

    return (
        <div className="all-leagues">
            <div className='league'>
                {/* <div className="logo-div">
                </div> */}
                <div className="info-div">
                    <h6>{strLeague}</h6>
                    <p><small>Sport Type: {strSport}</small></p>
                    <button onClick={() => handleClick(idLeague)} className='btn btn-info'>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Leagues;