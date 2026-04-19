import React from 'react';
import { css, keyframes } from '@emotion/core';
import useDateCountdown from '@/hooks/useDateCountdown';
import CountItem from './CountItem';
import ButtonLive from '../WeddingSection/ButtonLive';
import { styMargin } from './styles';

const shimmer = keyframes`
  0%   { background-position: -400px center; }
  100% { background-position: 400px center; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.04); opacity: 0.9; }
`;

const fadeUp = keyframes`
  0%   { opacity: 0; transform: translateY(16px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const styWeddingDayBox = css`
  animation: ${fadeUp} 1s ease-out both;
  padding: 8px 0 16px;
`;

const styWeddingDayTitle = css`
  font-family: 'Cookie', cursive;
  font-size: 52px;
  line-height: 1.2;
  background: linear-gradient(90deg, #c9a84c 0%, #e8c97a 30%, #fff5cc 50%, #e8c97a 70%, #c9a84c 100%);
  background-size: 400px 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 3s ease-in-out infinite, ${pulse} 2.5s ease-in-out infinite;
  margin: 0 0 8px 0;

  @media screen and (max-width: 500px) {
    font-size: 36px;
  }
`;

const styWeddingDaySub = css`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 2px;
  text-transform: uppercase;
  animation: ${fadeUp} 1s ease-out 0.4s both;
  opacity: 0;
`;

function CountContainer() {
  const { days, hours, minutes, seconds, timeHasRunOut, isEventOver, isWeddingDay } = useDateCountdown();

  if (isWeddingDay)
    return (
      <>
        <div css={styWeddingDayBox}>
          <p css={styWeddingDayTitle}>¡Hoy es nuestro Gran Día!</p>
          <p css={styWeddingDaySub}>9 de Mayo 2026 · Raul &amp; Yovana</p>
        </div>
        <ButtonLive />
      </>
    );

  if (timeHasRunOut)
    return (
      <>
        <div className="row">
          <div className="col-md-12" style={{ fontSize: '20px', color: '#e8c97a' }}>
            {isEventOver ? '¡La boda ya se celebró!' : '¡La boda está en curso!'}
          </div>
        </div>
        <ButtonLive />
      </>
    );

  return (
    <div className="col-md-12" css={styMargin('0 0 16px 0')}>
      <CountItem text="Días" number={days} />
      <CountItem text="Horas" number={hours} />
      <CountItem text="Minutos" number={minutes} />
      <CountItem text="Segundos" number={seconds} />
    </div>
  );
}

export default CountContainer;
