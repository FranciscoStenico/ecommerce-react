import { ICustomDepartmentCard } from "../../interfaces/components.interface";
import { StyledDepCard } from "./styles";

const DepartmentCard = ({
  src,
  children,
}: ICustomDepartmentCard) => {
  return (
    <StyledDepCard src={src}>
      <h3 className="card__title">{children}</h3>
      <span className="card__more">VER MAIS</span>
    </StyledDepCard>
  );
};

export default DepartmentCard;
