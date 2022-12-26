import { useState } from "react";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import {
  ICardProps,
  ICurrencyProps,
} from "../../interfaces/components.interface";
import Button from "../Button";
import RatingStars from "../RatingStar";
import { StyledCard } from "./styles";

const ProductCard = ({ item }: ICardProps) => {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  const Currency = ({ value }: ICurrencyProps) => {
    const currency = value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    const intSlice = currency.slice(0, -2);
    const floatSlice = currency.slice(-2);

    return (
      <h4 className="card__price">
        {intSlice}
        <span className="price_float-field" style={{ color: "red" }}>
          {floatSlice}
        </span>
      </h4>
    );
  };

  return (
    <StyledCard>
      {item.sale && <span className="card__sale-tag">{item.sale * 100}</span>}
      <figure className="card__image">
        {favorite ? (
          <RiHeart3Fill onClick={handleFavorite} color="var(--red)" />
        ) : (
          <RiHeart3Line onClick={handleFavorite} />
        )}
        <img src={item.image} alt={item.name} />
      </figure>
      <h3 className="card__title">{item.name}</h3>
      <RatingStars rating={item.rating} />
      <Currency value={item.price} />
      <Button>COMPRAR</Button>
    </StyledCard>
  );
};

export default ProductCard;
