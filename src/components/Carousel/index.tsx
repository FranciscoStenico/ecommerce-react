import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiEyeLine,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";
import CustomMessage from "../CustomMessage";
import { ICustomCarousel } from "../../interfaces/components.interface";
import { StyledCarousel } from "./styles";
import products from "../../database";
import ProductCard from "../ProductCard";

const Carousel = ({ title, filter, inverse }: ICustomCarousel) => {
  const filteredProducts = products.filter(
    (product) => product.department === filter
  );

  const firstRow = filteredProducts.slice(0, 4);
  const secondRow = filteredProducts.reverse().slice(0, 4);

  return (
    <StyledCarousel>
      <RiArrowLeftSLine size={80} className="arrow arrow--backward" />
      {title && <h2 className="carousel__title">{title}</h2>}
      <CustomMessage
        Icon={<RiEyeLine />}
        fontSize={12}
        gap={8}
        textDecoration="underline"
        className="carousel__more"
        noLimit
      >
        Ver todos
      </CustomMessage>
      <ul className="carousel__content">
        {inverse ? (
          secondRow.map((product) => {
            return <ProductCard key={product.id} item={product} />;
          })
        ) : (
          firstRow.map((product) => {
            return <ProductCard key={product.id} item={product} />;
          })
        )}
      </ul>
      <div className="carousel__pagination">
        <RiCheckboxBlankCircleLine size={11} />
        <RiCheckboxBlankCircleLine size={11} />
        <RiCheckboxBlankCircleLine size={11} />
        <RiCheckboxBlankCircleLine size={11} />
      </div>
      <RiArrowRightSLine size={80} className="arrow arrow--foward" />
    </StyledCarousel>
  );
};

export default Carousel;
