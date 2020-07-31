import React from 'react';
import { FooterBase } from './styles';
import ImgFooter from '../../assets/img/Footer.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/julianofrodrigues">
      <img className="Logo" src={ImgFooter} alt="Dev" />
      </a>
      <p>
       Criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
