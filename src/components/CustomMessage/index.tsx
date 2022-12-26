import { ICustomTextProps } from "../../interfaces/components.interface";
import { StyledText } from "./styles";

const CustomMessage = ({ 
  children, Icon, gap, fontSize, textDecoration, noLimit 
}: ICustomTextProps) => {
  
  const customWidth = typeof children === "string" ? children.length : "unset";

  return (
    <StyledText
      width={noLimit ? "unset" : customWidth}
      gap={gap}
      fontSize={fontSize}
      textDecoration={textDecoration}
    >
      {Icon}
      <p className="message__content">{children}</p>
    </StyledText>
  );
};

export default CustomMessage;
