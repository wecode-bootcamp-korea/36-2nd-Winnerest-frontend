import React from 'react';
import styled, { css } from 'styled-components';

const sizeStyles = css`
  ${props =>
    props.size === 'large' &&
    css`
      height: 50px;
      font-size: 20px;
    `}

  ${props =>
    props.size === 'medium' &&
    css`
      height: 35px;
      font-size: 15px;
    `}

    ${props =>
    props.size === 'small' &&
    css`
      height: 25px;
      font-size: 10px;
    `}
`;

const StyledButton = styled.button`
  outline: none;
  border: none;
  border-radius: 25px;

  ${sizeStyles}

  ${position => position};
  ${width => width};
  ${height => height};
  ${left => left};
  ${right => right};

  color: ${({ theme }) => theme.style.white};
  font-weight: bold;
  cursor: pointer;

  background-color: #e60023;

  &:hover {
    background-color: #eb3450;
  }

  &:active {
    background-color: #e60023;
  }

  ${({ theme, color, hoverColor }) => {
    const selected = theme.style[color];
    const hover = theme.style[hoverColor];
    return css`
      background: ${selected};
      &:hover {
        background: ${hover};
      }
      &:active {
        background: ${selected};
      }
    `;
  }}
`;

function Button({
  children,
  position,
  height,
  hoverColor,
  color,
  width,
  size,
  right,
  left,
  ...rest
}) {
  return (
    <StyledButton
      color={color}
      hoverColor={hoverColor}
      size={size}
      width={width}
      height={height}
      left={left}
      right={right}
      position={position}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
