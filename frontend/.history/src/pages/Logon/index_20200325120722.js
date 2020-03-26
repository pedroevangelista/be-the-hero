import React from 'react';
import './styles.css';
import heroesImg from '../../assets/heroesImg.png'/

export default function Logon() {

    return (
        <div className="logon-container">
            <section className="form"></section>

            <img src={heroesImg} alt="heroes"></img>
        </div>
    );

}