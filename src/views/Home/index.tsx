import BasePage from "..";
import Button from "../../components/Button";
import CustomText from "../../components/CustomMessage";
import Carousel from "../../components/Carousel";
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
import showcase2 from "../../assets/masks/showcase2.svg";
// import showcase3 from "../../assets/masks/showcase3.svg";
// import showcase3p1 from "../../assets/masks/showcase3-p1.svg";
// import showcase3p2 from "../../assets/masks/showcase3-p2.svg";
import department1 from "../../assets/masks/department1.svg";
import department2 from "../../assets/masks/department2.svg";
import department3 from "../../assets/masks/department3.svg";
import department4 from "../../assets/masks/department4.svg";
import DepartmentCard from "../../components/DepartmentCard";
import { CustomButton } from "../../components/Button/styles";

const HomePage = () => {
  const bgOptions = {
    showcase1,
    showcase2,
  };

  return (
    <BasePage>
      <StyledHomepage src={bgOptions}>
        <section className="home__showcase home__showcase--1">
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
        <section className="brand__departments">
          <h2 className="departments__title">ISSO PODE SER DO SEU INTERESSE</h2>
          <ul className="departments__list">
            <DepartmentCard src={department1}>MAQUIAGENS</DepartmentCard>
            <DepartmentCard src={department2}>FRAGRÂNCIAS</DepartmentCard>
            <DepartmentCard src={department3}>
              ENERGIA & PERFORMANCE
            </DepartmentCard>
            <DepartmentCard src={department4}>CORPO & BANHO</DepartmentCard>
          </ul>
        </section>
        <Carousel title="MAIS DESEJADOS" filter="most-desired" />
        <Carousel title="VIDA SAUDÁVEL" filter="healthy-life" />
        <section className="home__showcase home__showcase-2">
          <h2 className="showcase-title">Corpo e Banho</h2>
          <p className="showcase__description">
            Confira nossa linha de produtos para o corpo. Hidratantes, loções e
            desodorantes para os cuidados com seu corpo.
          </p>
          <CustomButton color="var(--white-1)" hoverColor="var(--grey-1)">
            CONHEÇA NOSSOS PRODUTOS
          </CustomButton>
        </section>
        <Carousel title="CORPO E BANHO" filter="body&bath" />
        <Carousel filter="body&bath" inverse />
        <Carousel title="FRAGRÂNCIAS" filter="fragrances" />
        <Carousel filter="fragrances" inverse />
        <Carousel title="ACABARAM DE CHEGAR" filter="arrived-now" />
      </StyledHomepage>
    </BasePage>
  );
};

export default HomePage;
