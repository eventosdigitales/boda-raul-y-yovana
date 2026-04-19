import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  const renderGuestInfo = () => {
    return (
      <Fragment>
        <div className="col-md-8 col-md-offset-4">
          <WeddingInfoBox title="Ceremonia Cristiana" time="09:00 AM" date="Sábado, 9 de Mayo de 2026" />
        </div>
        <ButtonLive />
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <p style={{ fontStyle: 'italic', fontSize: '16px', color: '#888', marginBottom: '8px' }}>
                "El amor es paciente, es bondadoso... Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta."
                <br />
                <strong>— 1 Corintios 13:4,7</strong>
              </p>
              <h2 className="main-font main-font__wedding">Ceremonia y Recepción de Bodas</h2>
              <span className="sub-title sub-title__wedding">Con la gracia de Dios, se llevará a cabo el:</span>
            </div>
          </div>
          <div className="row">
            {!isInvitation && renderGuestInfo()}
            {isInvitation && (
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Ceremonia Cristiana"
                  time="09:00 AM"
                  date="Sábado, 9 de Mayo de 2026"
                  description="El Alto, La Paz, Bolivia"
                />
                <WeddingInfoBox
                  title="Recepción de Bodas"
                  time="15:00 PM"
                  date="Sábado, 9 de Mayo de 2026"
                  description="El Alto, La Paz, Bolivia"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
