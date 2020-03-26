import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
    <div className="profile-container">
        <header>
            <img src={logoImg} />
            <span>Bem vinda, APAD</span>

            <Link to="/incidents/new">Cadastrar novo caso</Link>
            <button type="button"></button>
        </header>
    </div>
}