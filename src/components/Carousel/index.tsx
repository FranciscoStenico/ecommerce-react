import { RiEyeLine } from "react-icons/ri";
import CustomMessage from "../CustomMessage";
import { ICustomCarousel } from "../../interfaces/components.interface";
import { StyledCarousel } from "./styles";
import products from "../../database";
import ProductCard from "../ProductCard";

const Carousel = ({ title, filter }: ICustomCarousel) => {
  const filteredProducts = products.filter(
    (product) => product.department === filter
  );

  const firstRow = filteredProducts.slice(0, 4);
  const secondRow = filteredProducts.length > 4 && filteredProducts.slice(4);

  return (
    <StyledCarousel>
      {title && <h2 className="carousel__title">{title}</h2>}
      <CustomMessage
        Icon={<RiEyeLine />}
        fontSize={12}
        gap={8}
        textDecoration="underline"
      >
        Ver todos
      </CustomMessage>
      <ul className="carousel__content">
        {firstRow.map((product) => {
          return <ProductCard key={product.id} item={product} />;
        })}
      </ul>
      {secondRow && (
        <ul className="carousel__content">
          {secondRow.map((product) => {
            return <ProductCard key={product.id} item={product} />;
          })}
        </ul>
      )}
    </StyledCarousel>
  );
};

export default Carousel;
