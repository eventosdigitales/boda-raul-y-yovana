import { css, keyframes } from '@emotion/core';

const fadeInUp = keyframes`
  0%   { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const heartPulse = keyframes`
  0%   { transform: scale(1); }
  15%  { transform: scale(1.3); }
  30%  { transform: scale(1); }
  45%  { transform: scale(1.15); }
  60%  { transform: scale(1); }
  100% { transform: scale(1); }
`;

export const styWrapper = css`
  animation: ${fadeInUp} 0.9s ease-out both;

  .sub-title {
    color: #828282;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
  }

  .couple-wrap img {
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  .couple-wrap img:hover {
    transform: scale(1.06);
    box-shadow: 0 8px 30px rgba(201, 168, 76, 0.4);
  }

  .heart i {
    color: #c9a84c !important;
    animation: ${heartPulse} 2s ease-in-out infinite;
    display: inline-block;
  }

  @media screen and (max-width: 500px) {
    .sub-title {
      font-size: 18px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
    }
  }
`;

const cardIn = keyframes`
  0%   { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0%   { box-shadow: 0 0 0 0 rgba(201,168,76,0.5); }
  70%  { box-shadow: 0 0 0 8px rgba(201,168,76,0); }
  100% { box-shadow: 0 0 0 0 rgba(201,168,76,0); }
`;

const floatIcon = keyframes`
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-3px); }
`;

export const styPadrines = css`
  animation: ${fadeInUp} 0.9s ease-out both;
  background: linear-gradient(160deg, #fdf9f3 0%, #faf5ec 60%, #f5ede0 100%);
  padding: 64px 0 48px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  .padrines-title {
    font-size: 42px;
    color: #1a1a1a;
    margin-bottom: 8px;
    letter-spacing: 0.5px;
  }

  .padrines-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 0 auto 10px;
  }

  .padrines-divider-line {
    width: 60px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #c9a84c);
  }

  .padrines-divider-line-r {
    width: 60px;
    height: 1px;
    background: linear-gradient(90deg, #c9a84c, transparent);
  }

  .padrines-divider-diamond {
    width: 7px;
    height: 7px;
    background: #c9a84c;
    transform: rotate(45deg);
  }

  .padrines-subtitle {
    color: #9a9080;
    font-size: 15px;
    margin-bottom: 44px;
    font-style: italic;
  }

  .group-title {
    font-size: 12px;
    font-weight: 700;
    color: #c9a84c;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 6px;
  }

  .group-title-underline {
    width: 36px;
    height: 2px;
    background: linear-gradient(90deg, #c9a84c, #e8c97a);
    margin: 0 0 10px 0;
    border-radius: 2px;
  }

  .group-subtitle {
    font-size: 13px;
    color: #aaa;
    margin-bottom: 12px;
    font-style: italic;
  }

  .padrines-group {
    margin-bottom: 36px;
    animation: ${cardIn} 0.7s ease-out both;
  }

  .padrines-group:nth-child(1) { animation-delay: 0.1s; }
  .padrines-group:nth-child(2) { animation-delay: 0.2s; }
  .padrines-group:nth-child(3) { animation-delay: 0.3s; }
  .padrines-group:nth-child(4) { animation-delay: 0.4s; }

  .padrine-card {
    background: rgba(255,255,255,0.85);
    border: 1px solid rgba(201,168,76,0.2);
    border-radius: 14px;
    padding: 14px 18px;
    margin-bottom: 10px;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    backdrop-filter: blur(4px);
  }

  .padrine-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(201,168,76,0.18);
    border-color: rgba(201,168,76,0.5);
  }

  .padrine-name {
    font-size: 16px;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 3px 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .padrine-role {
    font-size: 12px;
    color: #c9a84c;
    margin: 0;
    padding-left: 32px;
    letter-spacing: 0.5px;
  }

  .ring-icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid #c9a84c;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    color: #c9a84c;
    animation: ${shimmer} 2.5s ease-in-out infinite, ${floatIcon} 3s ease-in-out infinite;
    background: rgba(201,168,76,0.06);
  }

  @media screen and (max-width: 767px) {
    padding: 44px 0 28px;

    .padrines-title {
      font-size: 30px;
    }
  }
`;

export const styLocation = css`
  animation: ${fadeInUp} 0.9s ease-out both;
  background-color: #fff;
  padding: 56px 0 48px;
  border-top: 1px solid #f0e8d6;

  .location-title {
    font-size: 36px;
    color: #000;
    margin-bottom: 12px;
  }

  .location-name {
    font-size: 18px;
    font-weight: 700;
    color: #c9a84c;
    margin-bottom: 8px;
  }

  .location-time {
    font-size: 17px;
    font-weight: 700;
    color: #c9a84c;
    margin-bottom: 10px;
    letter-spacing: 0.5px;
  }

  .location-address {
    font-size: 15px;
    color: #828282;
    line-height: 1.8;
    margin-bottom: 24px;
  }

  .location-btn {
    display: inline-flex;
    align-items: center;
    background: #c9a84c;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    padding: 10px 22px;
    border-radius: 24px;
    text-decoration: none;
    margin-bottom: 4px;
    transition: background 0.2s;

    &:hover {
      background: #b8943d;
      color: #fff;
      text-decoration: none;
    }
  }

  iframe {
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  }

  @media screen and (max-width: 767px) {
    padding: 36px 0 28px;

    .location-title {
      font-size: 26px;
    }

    iframe {
      height: 260px;
    }
  }
`;
