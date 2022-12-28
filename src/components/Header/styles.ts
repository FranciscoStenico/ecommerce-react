import styled from "styled-components";

export const StyledParentHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 2;

  min-width: 100%;
  background-color: var(--background);
  box-shadow: 0px 4px 10px #0000001a;

  .header__head,
  .header__center,
  .header__navBar {
    padding: 0 10.3%;
  }

  .header__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 37.8px;
    font-size: 10px;
    background-color: var(--white-3);
    color: var(--grey-1);

    .head__contact {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    h5 {
      font-weight: 400;
      cursor: pointer;

      text-decoration: underline transparent;
      transition: text-decoration 200ms ease;

      &:hover {
        text-decoration: underline var(--black-fade);
      }
    }
  }

  .header__center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    background-color: var(--white-1);

    .center__details {
      display: flex;
      width: 40%;
      gap: 32px;
      justify-content: space-between;
    }
  }

  .header__navBar {
    display: flex;
    justify-content: space-between;
    height: 49px;
    z-index: -1;

    font-size: 14px;
    font-weight: 600;
    background-color: var(--brand-1);
    color: var(--white-1);

    .navBar__navigation {
      display: flex;
      width: 63.8%;
      justify-content: space-between;
      align-self: center;
      align-items: center;
      gap: 5.5%;
    }
  }
`;
