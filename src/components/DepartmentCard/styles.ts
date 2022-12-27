import styled from "styled-components";
import { ICustomDepartmentCard } from "../../interfaces/components.interface";

export const StyledDepCard = styled.li<ICustomDepartmentCard>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 21px;
  width: 267px;
  height: 540px;
  padding: 0 32px;
  color: var(--white-1);
  color: transparent;
  background-image: var(--departments-hover-out), url(${({ src }) => src});
  transition: 500ms;
  
  &:hover {
    cursor: pointer;
    padding-bottom: 250px;
    color: var(--white-1);

    background-image: var(--departments-hover-in), url(${({ src }) => src});
  }

  .card__title {
    font-size: 32px;
    font-weight: 400;
    color: var(--white-1);
    line-height: 34px;
    letter-spacing: 2.9px;
    text-align: center;
  }

  .card__more {
    font-family: "Open Sans";
    font-weight: 400;
    text-decoration: none;
    width: fit-content;

    &:hover {
      text-decoration: underline;
    }
  }
`;
