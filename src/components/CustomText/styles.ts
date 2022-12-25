import styled from "styled-components";
import { ICustomTextStyles } from "../../interfaces/styles.interface";

export const StyledText = styled.div<ICustomTextStyles>`
  display: flex;
  gap: 13.5px;
  font-weight: 600;
  font-size: 14px;
  line-height: 23px;
  color: var(--grey-1);

  p {
    width: ${({ width }) => typeof width == "number" ? `${width / 2}ch` : width};
  }
`;
