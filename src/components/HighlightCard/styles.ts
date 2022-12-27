import styled from "styled-components";
import { IHighlightsStyles } from "../../interfaces/styles.interface";

export const StyledHighlight = styled.li<IHighlightsStyles>`
  display: flex;
  flex-direction: column;
  padding: 12px;

  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .card__details {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 222px;
    height: 184px;
    padding: 15px;

    .details__title {
      font-family: "Oswald";
      font-weight: 400;
      font-size: 1rem;
    }

    .details__value-data {
      margin-bottom: 16px;

      .card__price {
        font-family: "Aktiv Grotesk Ex";
        font-weight: 700;
        font-size: 22px;

        .price_float-field {
          font-size: 14px;
        }
      }
    }
  }

  button {
    align-self: center;
  }
`;
