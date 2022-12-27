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

  .home__showcase-2 {
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
      font-family: 'Roboto';
      font-size: 24px;
      font-weight: 400;
      width: 538px;
      line-height: 137.69%;
    }
  }
`;
