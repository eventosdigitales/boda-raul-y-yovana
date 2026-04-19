import { css, keyframes } from '@emotion/core';
import Background from '@assets/images/slide-6.jpg';

const fadeInDown = keyframes`
  0%   { opacity: 0; transform: translateY(-24px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const btnPulse = keyframes`
  0%   { box-shadow: 0 0 0 0 rgba(201,168,76,0.55); }
  60%  { box-shadow: 0 0 0 14px rgba(201,168,76,0); }
  100% { box-shadow: 0 0 0 0 rgba(201,168,76,0); }
`;

const overlayShimmer = keyframes`
  0%   { opacity: 0.55; }
  50%  { opacity: 0.45; }
  100% { opacity: 0.55; }
`;

export const styWrapper = css`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;

  .fh5co-heading {
    animation: ${fadeInDown} 0.9s ease-out both;
  }

  .overlay {
    animation: ${overlayShimmer} 5s ease-in-out infinite;
  }

  .btn-default {
    animation: ${btnPulse} 2s ease-out 1.2s infinite;
    border-color: #c9a84c !important;
    color: #c9a84c !important;
    font-weight: 600;
    letter-spacing: 1px;
    transition: background 0.3s, color 0.3s;

    &:hover {
      background: #c9a84c !important;
      color: #fff !important;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.8) !important;
  }
`;

export const styFlex = css`
  display: flex;
  justify-content: center;
`;
