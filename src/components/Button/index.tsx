import { IButtonProps } from "../../interfaces/components.interface";
import { CustomButton } from "./styles";

const Button = ({ children, color, hoverColor, handler }: IButtonProps) => {
  return (
    <CustomButton
      onClick={handler ? handler : () => {}}
      hoverColor={hoverColor}
      color={color}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
