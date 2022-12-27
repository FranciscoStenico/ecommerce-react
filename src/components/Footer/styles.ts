import styled from "styled-components";
import { IFooterProps } from "../../interfaces/components.interface";

export const StyledFooter = styled.footer<IFooterProps>`
  display: grid;
  grid-template-rows: 152px 422px 350px;

  .footer__element {
    padding: 0 175px;
  }

  .footer__contact-us {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--blue);

    .contact-us__title {
      font-family: "Rubik", sans-serif;
      font-weight: 300;
      font-size: 32px;
      width: 29.2%;
      color: var(--white-1);
    }

    .contact-formulary {
      display: flex;
      gap: 18px;

      input {
        width: 237px;
        outline: none;
        border: none;
        background-color: inherit;
        border-bottom: 1px solid var(--white-1);
        color: var(--white-1);

        &::placeholder {
          font-family: inherit;
          font-size: 14px;
          color: var(--white-1);
          margin: 3px;
          transition: 200ms ease;
        }

        &:focus::placeholder {
          color: transparent;
        }
      }
    }
  }

  .footer__options {
    display: flex;
    justify-content: space-between;
    padding-top: 63px;
    background-color: var(--grey);
    font-size: 12px;
    color: var(--grey-1);

    .options__group {
      display: flex;
      flex-direction: column;

      .footer__title {
        font-weight: 600;
        margin-bottom: 30px;
      }

      .footer__choice {
        font-weight: 400;
        line-height: 22px;
        text-decoration: underline transparent;
      }

      a:hover {
        text-decoration: underline var(--grey-1);
      }
    }

    .customer-service {
      display: flex;
      flex-direction: column;
      gap: 16px;

      .customer-service__details {
        text-align: end;
      }
    }

    #socialmedia-logos {
      display: flex;
      gap: 28px;
      justify-content: flex-end;
    }
  }

  .footer__privacy-policy {
    background-image: url(${({ background }) => background});
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .footer__button {
    border: none;
    padding: 15px 30px;
    color: var(--white-1);
    background-color: var(--tile-blue);
    font-weight: 700;
  }
`;
