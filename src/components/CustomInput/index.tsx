import { BiSearch } from "react-icons/bi";
import { StyledInput } from "./styles";

const CustomInput = () => {
  return (
    <StyledInput>
      <input
        type="text"
        className="input__text-field"
        placeholder="Busque aqui o produto de seu interesse"
      />
      <BiSearch color="var(--black)" size={17.77} />
    </StyledInput>
  );
};

export default CustomInput;
