import { BiSearch } from "react-icons/bi";

import { InputContainer } from "./styles";

const CustomInput = () => {
  return (
    <InputContainer>
      <input
        type="text"
        className="input__text-field"
        placeholder="Busque aqui o produto de seu interesse"
      />
      <BiSearch color="var(--black)" size={17.77} />
    </InputContainer>
  );
};

export default CustomInput;
