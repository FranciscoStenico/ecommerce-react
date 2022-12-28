import styled from "styled-components";
import { IHomepageStyles } from "../../interfaces/styles.interface";

export const StyledHomepage = styled.section<IHomepageStyles>`
  display: flex;
  flex-direction: column;

  .home__showcase {
    display: flex;
    height: 790px;
    overflow: hidden;
    color: var(--white-1);
  }

  .home__showcase--1 {
    justify-content: space-between;
    align-items: center;
    padding: 0 96px 0 65px;

    background-image: url(${({ src: { showcase1 } }) => showcase1});
    background-repeat: no-repeat;
    background-position-x: 90%;
    background-color: var(--brand-3);

    .showcase-1__actions {
      display: flex;
      flex-direction: column;
      gap: 27px;
      margin-bottom: 5%;
    }

    position: relative;

    .arrow {
      position: absolute;
      color: var(--white-3);
      transition: 200ms ease-in-out;
      cursor: pointer;

      &:hover {
        color: var(--white-1);
      }
    }

    .arrow--backward {
      left: 30px;
    }

    .arrow--foward {
      right: 30px;
    }
  }

  .home__buyer-advantages {
    display: flex;
    justify-content: space-between;
    margin: 20px 0 96px;
    padding: 35px 151px;
    background-color: var(--grey-100);
  }

  .brand__departments {
    display: flex;
    flex-direction: column;
    gap: 50px;
    font-family: "Oswald";

    .departments__title {
      font-size: 46px;
      text-align: center;
      font-weight: 300;
    }

    .departments__list {
      display: flex;
      justify-content: center;
      gap: 25px;
      margin-bottom: 130px;
    }
  }

  .home__showcase--2 {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 32px;
    padding: 0 150px;
    margin: 96px 0;

    background-image: url(${({ src: { showcase2 } }) => showcase2});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .showcase__description {
      width: 538px;
      line-height: 137.69%;
    }
  }

  .showcase__description {
    font-family: "Roboto";
    font-size: 24px;
    font-weight: 400;
  }

  .home__showcase--3 {
    display: grid;
    grid-template-columns: 53.7% 46.3%;
    margin-bottom: 96px;

    .showcase__background {
      display: grid;
      place-items: center;
      position: relative;

      background-image: url(${({ src: { showcase3 } }) => showcase3});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;

      .showcase__product {
        position: absolute;
      }

      #sc3-p1 {
        z-index: 1;
        margin: 0 270px 60px 0;
      }

      #sc3-p2 {
        margin-left: 270px;
      }
    }

    .showcase__info--3 {
      color: var(--black);
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 32px;
      padding: 0 75px;

      .showcase__description {
        width: 441px;
      }
    }

    button {
      background-color: var(--black);
      color: var(--white-1);

      &:hover {
        background-color: inherit;
        color: var(--black);
      }
    }
  }

  #different-background {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 100%;
    background-color: var(--grey-2);
    margin-bottom: 118px;

    & > div {
      padding-top: 105px;
      .card__image {
        background-color: var(--grey-200);
      }
    }
  }
`;
