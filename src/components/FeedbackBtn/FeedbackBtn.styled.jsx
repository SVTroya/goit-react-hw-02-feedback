import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 60px;
  border-radius: 60px;
  background-color: ${({ $color }) => $color};
  box-shadow: 0 2px 5px 2px #b3bac2;
  transform: scale(1);

  transition: transform .2s ease-in-out,
  box-shadow .2s ease-in-out;

  &:hover, &:focus {
    transform: scale(1.03);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 1px 3px 1px #b3bac2;
  }
`;
