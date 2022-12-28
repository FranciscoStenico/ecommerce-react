import styled from "styled-components";
import { IButtonStyle } from "../../interfaces/styles.interface";

export const StyledButton = styled.button<IButtonStyle>`
  width: 268px;
  padding: 20px 0;
  color: ${({ color }) => color || "var(--brand-4)"};
  border: 2px solid ${({ color }) => color || "var(--brand-4)"};
  background-color: transparent;

  line-height: 18px;
  font-size: 11.71px;
  font-weight: 700;
  transition: 200ms ease;

  &:hover {
    background-color: ${({ color }) => color || "var(--brand-4)"};
    color: ${({ hoverColor }) => hoverColor || "var(--white-1)"};
  }
`;
