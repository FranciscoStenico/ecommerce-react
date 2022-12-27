import styled from "styled-components";
import { IHighlightsStyles } from "../../interfaces/styles.interface";

export const StyledHighlight = styled.li<IHighlightsStyles>`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 12px 46px 12px;
  width: 587px;
  height: 781px;
  box-sizing: border-box;

  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;

  .card__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 222px;
    height: 184px;
    padding: 18px 14px 28px;
    border-radius: 16px;
    background-color: var(--white-1);

    .details__title {
      font-family: "Oswald";
      font-weight: 400;
      font-size: 1rem;
      line-height: 23px;
      width: ${({ width }) => (width ? `${width}ch` : "unset")};
    }

    .details__value-data {
      font-family: "Inter";
      font-weight: 700;

      .card__price {
        position: relative;
        font-size: 22px;
        width: fit-content;
        line-height: 40px;
        letter-spacing: -1.21px;

        .price_float-field {
          position: absolute;
          right: -14px;
          top: -5px;
          font-size: 14px;
        }
      }

      .installment-infos {
        font-size: 11px;
        color: var(--grey-3);
      }
    }
  }

  button {
    align-self: center;
    background-color: var(--white-1);
  }
`;
