import BasePage from "..";
import Button from "../../components/Button";
import CustomText from "../../components/CustomMessage";
import { StyledHomepage } from "./styles";

/* Icons */
// arrows
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
// advantages
import {
  RiBankCard2Line,
  RiTruckLine,
  RiSwapLine,
  RiDropboxFill,
} from "react-icons/ri";

/* SVG's */
import ProductProfile from "../../assets/products/dazzle-foundation.svg";
import showcase1 from "../../assets/masks/showcase1.svg";
import Carousel from "../../components/Carousel";

const HomePage = () => {
  return (
    <BasePage>
      <StyledHomepage src={{ showcase1 }}>
        <section className="home__showcase-1">
          <RiArrowLeftSLine size={80} className="arrow arrow--backward" />
          <img src={ProductProfile} alt="Nova base Dazzle da marca Hinode" />
          <div className="showcase-1__actions">
            <h2 className="actions__title showcase-title">
              Base Líquida DAZZLE
            </h2>
            <Button color="var(--white-1)" hoverColor="var(--brand-3)">
              COMPRAR
            </Button>
          </div>
          <RiArrowRightSLine size={80} className="arrow arrow--foward" />
        </section>
        <section className="home__buyer-advantages">
          <CustomText Icon={<RiBankCard2Line size={30} />}>
            Tudo em até 6x sem juros
          </CustomText>
          <CustomText Icon={<RiTruckLine size={30} />}>
            FRETE GRÁTIS nas compras acima de R$ 49,00 para todo o Brasil
          </CustomText>
          <CustomText
            Icon={
              <RiSwapLine size={30} style={{ transform: "rotate(90deg)" }} />
            }
          >
            Hinode Prime: Receba em casa todo mês com 20% OFF
          </CustomText>
          <CustomText Icon={<RiDropboxFill size={30} />}>
            Garanta mais economia com frete inteligente
          </CustomText>
        </section>
        <Carousel title="MAIS VENDIDOS" filter="most-selled" />
        <Carousel title="MAIS DESEJADOS" filter="most-desired" />
        <Carousel title="VIDA SAUDÁVEL" filter="healthy-life" />
        <Carousel title="CORPO E BANHO" filter="body&bath" />
        <Carousel filter="body&bath" inverse />
        <Carousel title="FRAGRÂNCIAS" filter="fragrances" />
        <Carousel filter="fragrances" inverse />
      </StyledHomepage>
    </BasePage>
  );
};

export default HomePage;
