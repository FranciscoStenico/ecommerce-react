import { ICustomTextProps } from "../../interfaces/components.interface";
import { StyledText } from "./styles";

const CustomMessage = ({ children, Icon, noLimit }: ICustomTextProps) => {
  const customWidth = typeof children === "string" ? children.length : "unset";
  return (
    <StyledText width={noLimit ? "unset" : customWidth}>
      {Icon}
      <p className="information__text">{children}</p>
    </StyledText>
  );
};

export default CustomMessage;
