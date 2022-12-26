import { RiEyeLine } from "react-icons/ri";
import CustomMessage from "../CustomMessage";
import { ICustomCarousel } from "../../interfaces/components.interface";
import { StyledCarousel } from "./styles";
import RatingStars from "../RatingStar";
import Button from "../Button";

const Carousel = ({ title, items }: ICustomCarousel) => {
  return (
    <StyledCarousel>
      <h2 className="carousel__title">{title}</h2>
      <CustomMessage
        Icon={<RiEyeLine />}
        fontSize={12}
        gap={8}
        textDecoration="underline"
      >
        Ver todos
      </CustomMessage>
      <ul className="carousel__content">
        {items.map((product) => {
          return (
            <li key={product.id} className="content__card">
              <figure className="card__image">
                <img src={product.image} alt={product.name} />
              </figure>
              <h3 className="card__title">{product.name}</h3>
              <RatingStars rating={product.rating} />
              <h4 className="card__price">
                R${Math.floor(product.price)},
                <span className="price_float-field">
                  {(product.price - Math.floor(product.price)) * 100}
                </span>
              </h4>
              <Button>COMPRAR</Button>
            </li>
          );
        })}
      </ul>
    </StyledCarousel>
  );
};

export default Carousel;
