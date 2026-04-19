import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper, styPadrines, styLocation } from './styles';

import GroomImg from '@assets/images/novios/raul.jpg';
import BrideImg from '@assets/images/novios/yovana.jpg';

const Groom = GroomImg;
const Bride = BrideImg;

function HelloSection({ isInvitation }) {
  const finalSubtitle = isInvitation
    ? '9 de Mayo de 2026, El Alto, Bolivia'
    : 'Sábado, 9 de Mayo de 2026';

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">¡Gloria a Dios!</h2>
              <h3 className="sub-title hs">{finalSubtitle}</h3>
              <p className="info">
                Con la bendición de Dios y el amor de nuestras familias, nos complace invitarles a celebrar
                la unión de nuestras vidas en sagrado matrimonio cristiano.
              </p>
              <p className="info" style={{ fontStyle: 'italic', marginTop: '10px' }}>
                "Por eso el hombre dejará a su padre y a su madre, y se unirá a su esposa,
                y los dos llegarán a ser un solo cuerpo."
                <br />
                <strong>— Génesis 2:24</strong>
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Groom} alt="novio" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Raul</h3>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Bride} alt="novia" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Yovana</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div css={styPadrines}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <h2 className="main-font padrines-title">Padrinos &amp; Familias</h2>
              <div className="padrines-divider">
                <div className="padrines-divider-line"></div>
                <div className="padrines-divider-diamond"></div>
                <div className="padrines-divider-line-r"></div>
              </div>
              <p className="padrines-subtitle">Con gratitud y amor, reconocemos a quienes hacen posible este día</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 col-md-offset-1 col-sm-6 padrines-group">
              <p className="group-title">Padrinos de Boda</p>
              <div className="group-title-underline"></div>
              <div className="padrine-card">
                <p className="padrine-name"><span className="ring-icon">&#9854;</span>Elias Huallpa Huallpa</p>
                <p className="padrine-role">Padrino</p>
              </div>
              <div className="padrine-card">
                <p className="padrine-name"><span className="ring-icon">&#9854;</span>Miriam Alvarez Paco</p>
                <p className="padrine-role">Madrina</p>
              </div>
            </div>
            <div className="col-md-5 col-sm-6 padrines-group">
              <p className="group-title">Padrinos de Torta</p>
              <div className="group-title-underline"></div>
              <div className="padrine-card">
                <p className="padrine-name"><span className="ring-icon">&#9854;</span>Franklin Choque Chura</p>
                <p className="padrine-role">Padrino</p>
              </div>
              <div className="padrine-card">
                <p className="padrine-name"><span className="ring-icon">&#9854;</span>Maxima Estrada Alvarez</p>
                <p className="padrine-role">Madrina</p>
              </div>
            </div>
            <div className="col-md-5 col-md-offset-1 col-sm-6 padrines-group">
              <p className="group-title">Padres del Novio</p>
              <div className="group-title-underline"></div>
              <p className="group-subtitle">Raúl Gutierrez Nuñez</p>
              <div className="padrine-card">
                <p className="padrine-name"><span className="ring-icon">&#9854;</span>Enrique Gutierrez Tito</p>
                <p className="padrine-role">Padre</p>
              </div>
              <div className="padrine-card">
                <p className="padrine-name"><span className="ring-icon">&#9854;</span>Basilia Nuñez Alvarez</p>
                <p className="padrine-role">Madre</p>
              </div>
            </div>
            <div className="col-md-5 col-sm-6 padrines-group">
              <p className="group-title">Padres de la Novia</p>
              <div className="group-title-underline"></div>
              <p className="group-subtitle">Yovana Lizet Mamani Apaza</p>
              <div className="padrine-card">
                <p className="padrine-name"><span className="ring-icon">&#9854;</span>Martín Mamani Poma</p>
                <p className="padrine-role">Padre</p>
              </div>
              <div className="padrine-card">
                <p className="padrine-name"><span className="ring-icon">&#9854;</span>Lucy Apaza Chambilla</p>
                <p className="padrine-role">Madre</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div css={styLocation}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <h2 className="main-font location-title">Lugar de la Recepción</h2>
              <p className="location-name">Salón de Eventos Belleza Tropical</p>
              <p className="location-time">Hora: 15:00 PM</p>
              <p className="location-address">
                Zona Antofagasta, Av. Incahuasi N° 218,<br />
                entrada a Chijimarca — frente al local Joyita<br />
                El Alto, La Paz, Bolivia
              </p>
              <a
                href="https://www.google.com/maps?q=-16.5894468,-68.1853627&z=17&hl=es"
                target="_blank"
                rel="noreferrer"
                className="location-btn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white" style={{marginRight:'8px',flexShrink:0}}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Ver en Google Maps
              </a>
            </div>
          </div>
          <div className="row" style={{marginTop:'28px'}}>
            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://www.google.com/maps?q=-16.5894468,-68.1853627&z=17&hl=es&output=embed"
                width="100%"
                height="380"
                style={{border:'0',borderRadius:'12px'}}
                allowFullScreen
                title="Salón Belleza Tropical"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
