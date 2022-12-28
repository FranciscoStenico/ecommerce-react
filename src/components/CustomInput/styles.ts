import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-self: center;
  height: 37px;
  width: 40%;
  padding: 0 2.7%;
  margin: 0 4.3%;
  border-radius: 100rem;
  background-color: var(--grey);

  .input__text-field {
    display: flex;
    outline: none;
    border: none;
    background-color: inherit;
    text-overflow: ellipsis;
    width: 95%;

    &::placeholder {
      font-size: 12px;
      font-weight: 600;
      color: var(--grey-1);
      transition: 200ms ease-in-out;
    }

    &:focus::placeholder {
      color: transparent;
    }
  }
`;
