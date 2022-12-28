import styled from "styled-components";
import { ICarouselStyles } from "../../interfaces/styles.interface";

export const StyledCarousel = styled.div<ICarouselStyles>`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0 151px 65px;
  padding: 0 65px;
  align-items: center;
  justify-content: center;
  align-self: center;
  position: relative;
  max-width: 1440px;

  .arrow__button {
    position: absolute;
    background-color: transparent;
    border: none;

    svg {
      color: var(--grey-1-fade);
      transition: 200ms ease-in-out;
      cursor: pointer;

      &:hover {
        color: var(--grey-1);
      }
    }
  }

  .arrow__button--backward {
    left: -5.5%;
  }

  .arrow__button--foward {
    right: -5.5%;
  }

  .carousel__more {
    position: absolute;
    top: 30px;
    right: 65px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .carousel__title {
    font-size: 46px;
    font-family: "Oswald";
    font-weight: 300;
    margin-bottom: 10px;
  }

  .carousel__content {
    display: flex;
    align-items: center;
    gap: 25px;
    width: 100%;
    overflow: hidden;
  }

  .carousel__pagination {
    display: flex;
    position: relative;
    justify-content: center;
    gap: 30px;

    svg {
      color: var(--brand-1);
    }

    &::before {
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 20px;
      background-color: var(--brand-1);
      box-sizing: border-box;
      position: absolute;
      left: ${({ axis }) => `${axis}%`};
    }
  }
`;
