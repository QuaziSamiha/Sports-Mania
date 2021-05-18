import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import backgroundImage from '../../images/stadium-img.jpg';
import './LeagueDetail.css';
import MaleTeam from '../../images/male.png';
import FemaleTeam from '../../images/female.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, faFacebook } from '@fortawesome/free-solid-svg-icons'

const LeagueDetail = () => {

    const { leagueId } = useParams();

    const [leagueDetail, setLeagueDetail] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`)
            .then(res => res.json())
            .then(data => setLeagueDetail(data.leagues[0]))
        // .then(data => console.log(data.leagues))
    }, [])
    console.log(leagueDetail);

    const { strDescriptionFR, strLeagueAlternate, dateFirstEvent, strCountry, strSport, strGender, strLogo } = leagueDetail;

    const gender = strGender === "Male" ? <div className='team-img'><img src={MaleTeam} alt="" /></div> : <div className='team-img'><img src={FemaleTeam} alt="" /></div>

    return (
        <div style={{ backgroundColor: ' rgb(5, 5, 58)' }}>
            {/* <h4>this is league detail {leagueId}</h4> */}
            <div className="background-img">
                <img src={backgroundImage} alt="" />
                <div className='logo'>
                    <img src={strLogo} alt="" />
                </div>
            </div>
            <div className='team-info'>
                <div className="info-div">
                    <h4><b>{strLeagueAlternate}</b></h4>
                    <p><b> Founded: {dateFirstEvent}</b></p>
                    <p><b>Country: {strCountry}</b></p>
                    <p><b>Sport Type: {strSport}</b></p>
                    <p><b>Gender: {strGender}</b></p>
                </div>
                <div>
                    {gender}
                </div>
            </div>
            <article className='league-description'>
                <p>{strDescriptionFR}</p>
            </article>
            <footer>
                {/* <FontAwesomeIcon icon={faFacebook} /> */}
            </footer>
        </div>
    );
};

export default LeagueDetail;