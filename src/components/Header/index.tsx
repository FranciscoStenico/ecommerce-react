import {
  RiUserHeartLine,
  RiUserLine,
  RiHeart3Line,
  RiShoppingBagLine,
  RiMenuFill,
} from "react-icons/ri";

import CustomAnchor from "../CustomAnchor";
import { ParentHeader } from "./styles";
import BrandLogo from "../../assets/brand-logo.svg";
import CustomInput from "../CustomInput";

const Header = () => {
  return (
    <ParentHeader>
      <header className="header__head">
        <h5 className="head__about">A Empresa</h5>
        <div className="head__contact">
          <CustomAnchor
            Icon={<RiUserHeartLine size={20} />}
            fontSize={10}
            gap={8.55}
            hoverEffect
          >
            SEJA UM CONSULTOR
          </CustomAnchor>
          <h5 className="contact__us">Fale conosco</h5>
        </div>
      </header>
      <main className="header__center">
        <img
          src={BrandLogo}
          alt="Hinode logo and name"
          width={216}
          className="center__brand-logo"
        />
        <CustomInput />
        <div className="center__details">
          <CustomAnchor
            hasProfile
            Icon={<RiUserLine size={21} />}
            gap={7}
            hoverEffect
          >
            ENTRE OU CADASTRE-SE
          </CustomAnchor>
          <CustomAnchor Icon={<RiHeart3Line repeatCount={2} size={21} />} hoverEffect>
            FAVORITOS
          </CustomAnchor>
          <CustomAnchor Icon={<RiShoppingBagLine size={21} />} hoverEffect>
            SACOLA
          </CustomAnchor>
        </div>
      </main>
      <footer className="header__navBar">
        <CustomAnchor
          Icon={<RiMenuFill size={20} color="var(--white-1)" />}
          fontSize={14}
          color="var(--whhite-1)"
        >
          Todas as categorias
        </CustomAnchor>
        <nav className="navBar__navigation">
          <a href="#void">MAQUIAGEM</a>
          <a href="#void">CORPO & BANHO</a>
          <a href="#void">VIDA SAUDÁVEL</a>
          <a href="#void">ENERGIA & PERFORMACE</a>
        </nav>
      </footer>
    </ParentHeader>
  );
};

export default Header;
