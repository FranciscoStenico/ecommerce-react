import styled from "styled-components";
import { IHomepageStyles } from "../../interfaces/styles.interface";

export const StyledHomepage = styled.section<IHomepageStyles>`
  .home__showcase-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 790px;
    padding: 0 96px 0 65px;
    overflow: hidden;

    background-image: url(${({ src: { showcase1 } }) => showcase1});
    background-repeat: no-repeat;
    background-position-x: 90%;
    background-color: var(--brand-3);
    color: var(--white-1);

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
    margin: 20px 0;
    padding: 35px 151px;
    background-color: var(--grey-100);
  }
`;
