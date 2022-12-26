import styled from "styled-components";
import { ICustomTextStyles } from "../../interfaces/styles.interface";

export const StyledText = styled.div<ICustomTextStyles>`
  display: flex;
  gap: ${({ gap }) => (typeof gap == "number" ? `${gap}px` : gap || "13.5px")};
  font-weight: 600;
  font-size: ${({ fontSize }) =>
    typeof fontSize == "number" ? `${fontSize}px` : fontSize || "14px"};
  line-height: 23px;
  color: var(--grey-1);
  text-decoration: ${({ textDecoration }) => textDecoration || "none"};

  .message__content {
    width: ${({ width }) =>
      typeof width == "number" ? `${width / 2}ch` : width};
  }
`;
