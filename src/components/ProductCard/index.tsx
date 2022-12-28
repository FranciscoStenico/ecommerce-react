import { useState } from "react";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";

import Button from "../Button";
import RatingStars from "../RatingStar";
import { ICardProps, ICurrencyProps } from "../../interfaces/components.interface";
import { toCurrency } from "../../utils/toCurrency";
import { StyledCard } from "./styles";

const ProductCard = ({ item }: ICardProps) => {
  const [favorite, setFavorite] = useState(false);
  const previousPriceCurrency =
    item.previousPrice && toCurrency(item.previousPrice);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  const customWidth = ({ name, previousPrice }: ICardProps["item"]) => {
    const { length } = name;

    return !previousPrice && length < 36 ? `${length / 2}ch` : "unset";
  };

  const Currency = ({ value }: ICurrencyProps) => {
    const currency = toCurrency(value);

    const intSlice = currency.slice(0, -2);
    const floatSlice = currency.slice(-2);

    return (
      <h4 className="card__price">
        {intSlice}
        <span className="price_float-field">{floatSlice}</span>
      </h4>
    );
  };

  return (
    <StyledCard width={customWidth(item)}>
      <figure className="card__image">
        {favorite ? (
          <RiHeart3Fill onClick={handleFavorite} color="var(--red)" size={20} />
        ) : (
          <RiHeart3Line onClick={handleFavorite} size={20} />
        )}
        <img src={item.image} alt={item.name} />
      </figure>
      {item.sale && <span className="card__sale-tag">-{item.sale * 100}%</span>}
      <section className="card__details">
        <h3 className="card__title">{item.name}</h3>
        <RatingStars rating={item.rating} />
      </section>
      <section className="card__values">
        {item.previousPrice && (
          <p className="card__previous-price">{previousPriceCurrency}</p>
        )}
        <Currency value={item.price} />
      </section>
      <Button>COMPRAR</Button>
    </StyledCard>
  );
};

export default ProductCard;
