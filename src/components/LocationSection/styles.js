import { css, keyframes } from '@emotion/core';

const fadeInUp = keyframes`
  0%   { opacity: 0; transform: translateY(32px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const mapGlow = keyframes`
  0%   { box-shadow: 0 4px 24px rgba(201,168,76,0); }
  50%  { box-shadow: 0 8px 40px rgba(201,168,76,0.35), 0 2px 16px rgba(232,201,122,0.2); }
  100% { box-shadow: 0 4px 24px rgba(201,168,76,0); }
`;

export const styWrapper = css`
  animation: ${fadeInUp} 0.9s ease-out both;

  iframe {
    border-radius: 16px;
    animation: ${mapGlow} 4s ease-in-out 1.5s infinite;
  }

  @media screen and (max-width: 400px) {
    .sub-title {
      font-size: 16px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 16px;
    }
  }
`;
