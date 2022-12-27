import { StyledHighlight } from "./styles";
import {
  ICardProps,
  ICurrencyProps,
} from "../../interfaces/components.interface";
import Button from "../Button";
import RatingStars from "../RatingStar";
import { toCurrency } from "../../utils/toCurrency";

const HighlightCard = ({ item }: ICardProps) => {
  const customSize = item.name.length < 30 && (item.name.length / 2);
  const installmentPrice = toCurrency(item.price / 2);

  const Currency = ({ value }: ICurrencyProps) => {
    const currency = toCurrency(value)

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
    <StyledHighlight background={item.image || ""} width={customSize}>
      <section className="card__details">
        <h3 className="details__title">{item.name}</h3>
        <RatingStars rating={item.rating} />
        <div className="details__value-data">
          <Currency value={item.price} />
          <p className="installment-infos">em até 2x de {installmentPrice}</p>
        </div>
      </section>
      <Button>COMPRAR</Button>
    </StyledHighlight>
  );
};

export default HighlightCard;
