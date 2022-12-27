import styled from "styled-components";

export const StyledCarousel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0 151px 65px;
  align-items: center;
  align-self: center;
  position: relative;
  max-width: 1440px;

  .arrow {
    position: absolute;
    top: 200px;
    color: var(--grey-1-fade);
    transition: 200ms ease-in-out;
    cursor: pointer;

    &:hover {
      color: var(--grey-1);
    }
  }

  .arrow--backward {
    left: 0;
  }

  .arrow--foward {
    right: 0;
  }

  .carousel__more {
    position: absolute;
    right: 151px;
    top: 30px;
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
    justify-content: center;
    gap: 25px;
    width: 100%;
  }

  .carousel__pagination {
    display: flex;
    justify-content: center;
    gap: 30px;

    svg {
      color: var(--brand-1);
    }
  }
`;
