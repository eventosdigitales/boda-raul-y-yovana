import React from 'react';
import { css, keyframes } from '@emotion/core';

const flapWings = keyframes`
  0%   { transform: scaleX(1); }
  50%  { transform: scaleX(0.15); }
  100% { transform: scaleX(1); }
`;

const fly1 = keyframes`
  0%   { transform: translate(-60px, 80vh) rotate(-10deg); opacity: 0; }
  5%   { opacity: 0.85; }
  40%  { transform: translate(30vw, 30vh) rotate(15deg); }
  70%  { transform: translate(65vw, 15vh) rotate(-8deg); }
  95%  { opacity: 0.7; }
  100% { transform: translate(110vw, 40vh) rotate(5deg); opacity: 0; }
`;

const fly2 = keyframes`
  0%   { transform: translate(110vw, 60vh) rotate(10deg); opacity: 0; }
  5%   { opacity: 0.8; }
  35%  { transform: translate(70vw, 20vh) rotate(-12deg); }
  65%  { transform: translate(30vw, 50vh) rotate(8deg); }
  95%  { opacity: 0.75; }
  100% { transform: translate(-60px, 25vh) rotate(-5deg); opacity: 0; }
`;

const fly3 = keyframes`
  0%   { transform: translate(20vw, 110vh) rotate(5deg); opacity: 0; }
  5%   { opacity: 0.9; }
  30%  { transform: translate(45vw, 55vh) rotate(-15deg); }
  60%  { transform: translate(75vw, 20vh) rotate(10deg); }
  90%  { transform: translate(90vw, -20px) rotate(-5deg); opacity: 0.6; }
  100% { transform: translate(100vw, -60px) rotate(0deg); opacity: 0; }
`;

const fly4 = keyframes`
  0%   { transform: translate(80vw, 110vh) rotate(-8deg); opacity: 0; }
  5%   { opacity: 0.8; }
  40%  { transform: translate(50vw, 40vh) rotate(12deg); }
  70%  { transform: translate(15vw, 20vh) rotate(-10deg); }
  95%  { opacity: 0.7; }
  100% { transform: translate(-60px, 10vh) rotate(5deg); opacity: 0; }
`;

const fly5 = keyframes`
  0%   { transform: translate(50vw, -60px) rotate(0deg); opacity: 0; }
  5%   { opacity: 0.75; }
  30%  { transform: translate(25vw, 35vh) rotate(-18deg); }
  60%  { transform: translate(60vw, 65vh) rotate(12deg); }
  90%  { transform: translate(85vw, 85vh) rotate(-8deg); opacity: 0.6; }
  100% { transform: translate(100vw, 110vh) rotate(0deg); opacity: 0; }
`;

const BUTTERFLIES = [
  { fly: fly1, duration: '14s', delay: '0s',   size: 22, color: '#e8c97a' },
  { fly: fly2, duration: '18s', delay: '3s',   size: 16, color: '#fff5cc' },
  { fly: fly3, duration: '12s', delay: '6s',   size: 26, color: '#c9a84c' },
  { fly: fly4, duration: '16s', delay: '1.5s', size: 18, color: '#e8c97a' },
  { fly: fly5, duration: '20s', delay: '9s',   size: 14, color: '#fff5cc' },
  { fly: fly1, duration: '15s', delay: '11s',  size: 20, color: '#c9a84c' },
  { fly: fly3, duration: '13s', delay: '7s',   size: 12, color: '#e8c97a' },
  { fly: fly2, duration: '17s', delay: '4s',   size: 24, color: '#fff5cc' },
];

const styContainer = css`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
`;

function ButterflyShape({ size, color, flyAnim, delay, duration }) {
  const w = size;
  const h = size * 0.75;

  const styButterfly = css`
    position: absolute;
    top: 0;
    left: 0;
    animation: ${flyAnim} ${duration} ${delay} ease-in-out infinite;
    opacity: 0;
  `;

  const styWings = css`
    animation: ${flapWings} 0.45s ease-in-out infinite;
    transform-origin: center center;
  `;

  return (
    <div css={styButterfly}>
      <svg width={w * 2} height={h * 2} viewBox={`0 0 ${w * 2} ${h * 2}`} fill="none">
        {/* Upper wings */}
        <ellipse cx={w * 0.55} cy={h * 0.7}  rx={w * 0.45} ry={h * 0.65} fill={color} opacity="0.75" css={styWings} style={{ transformOrigin: `${w}px ${h}px` }} />
        <ellipse cx={w * 1.45} cy={h * 0.7}  rx={w * 0.45} ry={h * 0.65} fill={color} opacity="0.75" css={styWings} style={{ transformOrigin: `${w}px ${h}px` }} />
        {/* Lower wings */}
        <ellipse cx={w * 0.6}  cy={h * 1.4}  rx={w * 0.35} ry={h * 0.45} fill={color} opacity="0.6"  css={styWings} style={{ transformOrigin: `${w}px ${h}px` }} />
        <ellipse cx={w * 1.4}  cy={h * 1.4}  rx={w * 0.35} ry={h * 0.45} fill={color} opacity="0.6"  css={styWings} style={{ transformOrigin: `${w}px ${h}px` }} />
        {/* Body */}
        <ellipse cx={w} cy={h} rx={w * 0.07} ry={h * 0.55} fill={color} opacity="0.9" />
      </svg>
    </div>
  );
}

function Butterflies() {
  return (
    <div css={styContainer}>
      {BUTTERFLIES.map((b, i) => (
        <ButterflyShape
          key={i}
          size={b.size}
          color={b.color}
          flyAnim={b.fly}
          delay={b.delay}
          duration={b.duration}
        />
      ))}
    </div>
  );
}

export default Butterflies;
