import { IButtonProps } from "../../interfaces/components.interface";
import { StyledButton } from "./styles";

const Button = ({ children, color, hoverColor, handler }: IButtonProps) => {
  return (
    <StyledButton
      onClick={handler ? handler : () => {}}
      hoverColor={hoverColor}
      color={color}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
