import { useState } from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiEyeLine,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";
import CustomMessage from "../CustomMessage";
import {
  ICarouselItems,
  ICustomCarousel,
} from "../../interfaces/components.interface";
import { StyledCarousel } from "./styles";
import products from "../../database";
import ProductCard from "../ProductCard";
import HighlightCard from "../HighlightCard";

const Carousel = ({ title, filter, inverse, highlight }: ICustomCarousel) => {
  const [currentAxis, setCurrentAxis] = useState(0);

  const filteredProducts = products.filter(
    ({ department }) => department === (filter || "highlight")
  );

  const pagination = (array: ICarouselItems[]) => {
    let pageSplitter: ICarouselItems[][] = [];
    for (let i = 0; i < array.length; i++) {
      const currentPage = Math.floor(i / 4);

      !pageSplitter[currentPage] && pageSplitter.push([]);
      pageSplitter[currentPage].push(array[i]);
    }

    return pageSplitter;
  };
  const pages = pagination(filteredProducts);

  const changePage = (switcher: "next" | "previous") => () => {
    switch (switcher) {
      case "next":
        setCurrentAxis(currentAxis === 90 ? 0 : currentAxis + 30);
        break;
      case "previous":
        setCurrentAxis(currentAxis === 0 ? 90 : currentAxis - 30);
        break;
    }
  };

  return (
    <StyledCarousel axis={currentAxis}>
      <button className="arrow__button arrow__button--backward" onClick={changePage("previous")}>
        <RiArrowLeftSLine size={80} className="arrow arrow--foward" />
      </button>
      {title && (
        <>
          <h2 className="carousel__title">{title}</h2>
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
        </>
      )}
      {highlight ? (
        <ul className="carousel__content">
          {pages[0].map((product) => {
            return <HighlightCard item={product} key={product.id} />;
          })}
        </ul>
      ) : (
        <ul className="carousel__content">
          {inverse
            ? pages[1].map((product) => {
                return <ProductCard key={product.id} item={product} />;
              })
            : pages[0].map((product) => {
                return <ProductCard key={product.id} item={product} />;
              })}
        </ul>
      )}
      <div className="carousel__pagination">
        <RiCheckboxBlankCircleLine size={20} />
        <RiCheckboxBlankCircleLine size={20} />
        <RiCheckboxBlankCircleLine size={20} />
        <RiCheckboxBlankCircleLine size={20} />
      </div>
      <button className="arrow__button arrow__button--foward" onClick={changePage("next")}>
        <RiArrowRightSLine size={80} className="arrow arrow--foward" />
      </button>
    </StyledCarousel>
  );
};

export default Carousel;
