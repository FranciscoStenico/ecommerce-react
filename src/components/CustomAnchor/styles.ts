import styled from "styled-components";
import { IAnchorStyle } from "../../interfaces/styles.interface";

export const StyledAnchor = styled.div`
  display: flex;
  gap: ${({ flexGap }: IAnchorStyle) =>
    typeof flexGap === "number" ? `${flexGap}px` : flexGap};
  align-items: center;
  transition: 200ms ease-in-out;
  cursor: pointer;

  svg {
    color: ${({ fontSize }: IAnchorStyle) =>
      fontSize === "12px" ? "var(--grey-1)" : "var(--black)"};
    transition: 200ms ease-in-out;
  }

  &:hover {
    svg {
      color: var(--brand-1);
    }

    .interactive-data__content {
      text-decoration: ${({ hover }: IAnchorStyle) =>
        hover ? "underline var(--black-fade)" : "underline transparent"};
    }
  }

  svg {
    min-width: 21px;
  }

  .interactive-data {
    position: relative;
    color: ${({ color }: IAnchorStyle) => color};

    .data__greetings {
      position: absolute;
      top: -16px;
      font-size: 9px;
    }

    .interactive-data__content {
      display: flex;
      align-items: center;
      font-weight: 600;
      font-size: ${({ fontSize }: IAnchorStyle) =>
        fontSize === "number" ? `${fontSize}px` : fontSize};
    }
  }
`;
