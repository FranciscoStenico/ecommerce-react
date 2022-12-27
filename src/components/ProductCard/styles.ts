import styled from "styled-components";
import { IProductCardStyles } from "../../interfaces/styles.interface";

export const StyledCard = styled.li<IProductCardStyles>`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 266px;
  gap: 16px;

  .card__sale-tag {
    position: absolute;
    top: 20px;
    left: -7px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    width: 42px;
    background-color: var(--brand-2);
    color: var(--white-1);
    font-family: "Open Sans";
    font-weight: 700;
    font-size: 14px;
  }

  .card__image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 311px;
    background-color: var(--gray-600);
    border: var(--card-content-border);

    svg {
      position: absolute;
      right: 1rem;
      top: 1rem;
      cursor: pointer;
    }
  }

  .card__details {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .card__title {
      font-family: "Oswald";
      font-weight: 400;
      font-size: 17px;
      line-height: 23px;
      width: ${({ width }) => width};
    }
  }

  .card__previous-price {
    text-decoration: line-through;
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    color: var(--grey-3);
  }

  .card__price {
    position: relative;
    width: fit-content;
    display: flex;
    font-family: "Inter", sans-serif;
    font-size: 22px;
    font-weight: 700;

    .price_float-field {
      position: absolute;
      right: -14px;
      font-size: 14px;
    }
  }
`;
