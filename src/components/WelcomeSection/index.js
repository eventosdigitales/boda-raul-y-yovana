import React, { Fragment, useState } from 'react';
import { string, bool, func } from 'prop-types';
import { Link } from 'gatsby';

import WeddingImg from '@assets/images/wedding-logo.png';
import CountContainer from './CountContainer';
import ScrollToDown from './ScrollToDown';
import RingsAnimation from './RingsAnimation';
import Butterflies from './Butterflies';
import Fireworks from './Fireworks';
import {
  styWrapper,
  styHero,
  styBackground,
  styButtonWrapper,
  styWeddingLogo,
  styTitleNames,
  stySubtitleBoda,
  styHeartAmpersand,
  styDivider,
} from './styles';

const DELAY_TIME = 1500;

const checkIsWeddingDay = () => {
  const bolivia = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/La_Paz' }));
  return bolivia.getFullYear() === 2026 && bolivia.getMonth() === 4 && bolivia.getDate() === 9;
};

function WelcomeSection({ guestName, isInvitation, isAnonymGuest, codeLink, onClickDetail }) {
  const isWeddingDay = checkIsWeddingDay();
  const [loading, setLoading] = useState(false);
  const [alreadyDownloadData, setAlreadyDownloadData] = useState(false);

  const handleScrollTo = () => {
    /** scroll into detail view */
    const element = document.getElementById('fh5co-couple');
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  const handleShowDetail = () => {
    if (loading) return undefined;

    try {
      const myAudio = document.getElementById('myAudio');
      myAudio.play();
    } catch {
      console.error('FAILED_TO_PLAY_MUSIC');
    }

    onClickDetail();

    if (!alreadyDownloadData) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setAlreadyDownloadData(true);
        handleScrollTo();
      }, DELAY_TIME);
    } else {
      handleScrollTo();
    }
  };

  const renderGuestSection = () => {
    if (isAnonymGuest) return <h2 className="to-dearest-name">Querido(a)s invitados!</h2>;

    return (
      <Fragment>
        <h3 className="to-dearest">To our Dearest</h3>
        <h2 className="to-dearest-name">{guestName}</h2>
      </Fragment>
    );
  };

  return (
    <div css={styHero}>
      <header
        id="fh5co-header"
        role="banner"
        className="fh5co-cover"
        css={styBackground}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <Butterflies />
        {isWeddingDay && <Fireworks />}
        <RingsAnimation />
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center">
              <img src={WeddingImg} alt="wedding-raul-yovana" css={styWeddingLogo} />
              <h4 className="sub-title" css={stySubtitleBoda}>La Boda de</h4>
              <h1 className="title" css={styTitleNames}>
                Raul <span css={styHeartAmpersand}>&amp;</span> Yovana
              </h1>
              <div css={styDivider}>
                <svg viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="10" x2="115" y2="10" stroke="url(#lineGradL)" strokeWidth="0.8" />
                  <line x1="185" y1="10" x2="300" y2="10" stroke="url(#lineGradR)" strokeWidth="0.8" />
                  <polygon points="150,2 156,10 150,18 144,10" fill="#e8c97a" opacity="0.9" />
                  <polygon points="150,2 156,10 150,8" fill="#fff8dc" opacity="0.7" />
                  <line x1="128" y1="10" x2="128" y2="4"  stroke="#e8c97a" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                  <line x1="124" y1="10" x2="132" y2="10" stroke="#e8c97a" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                  <line x1="172" y1="10" x2="172" y2="4"  stroke="#e8c97a" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                  <line x1="168" y1="10" x2="176" y2="10" stroke="#e8c97a" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                  <defs>
                    <linearGradient id="lineGradL" x1="0" y1="0" x2="115" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%"   stopColor="#e8c97a" stopOpacity="0" />
                      <stop offset="100%" stopColor="#e8c97a" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="lineGradR" x1="185" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%"   stopColor="#e8c97a" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#e8c97a" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className={isAnonymGuest ? 'margin__bottom' : ''} style={{ marginTop: '64px' }}>
                <CountContainer />
              </div>
              {renderGuestSection()}
              {isInvitation && (
                <div className="row" css={styButtonWrapper}>
                  <div className="col-md-3">
                    <Link to={`/e-ticket?${codeLink}`}>
                      <button className="btn btn-default btn-block">Lihat e-Ticket</button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <ScrollToDown loading={loading} onClick={handleShowDetail} />
          </div>
        </div>
      </header>
    </div>
  );
}

WelcomeSection.propTypes = {
  guestName: string.isRequired,
  isInvitation: bool.isRequired,
  isAnonymGuest: bool.isRequired,
  codeLink: string,
  onClickDetail: func.isRequired,
};

WelcomeSection.defaultProps = {
  codeLink: '',
};

export default WelcomeSection;
