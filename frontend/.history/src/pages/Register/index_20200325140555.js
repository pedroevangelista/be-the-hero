import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css'
import logoImg from '../../assets/logo.svg';

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajuda pessoas a encontrarem os casos da sua ONG.</p>

                    <Link to="/register">
                        <FiArrowLeft className="back-link" size="16" color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </section>

                <form action="">
                    <input placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="WhatsApp" />

                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" />
                    </div>
                </form>
            </div>            
        </div>
    );
    
}