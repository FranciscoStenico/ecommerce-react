import {RiInstagramLine, RiYoutubeLine, RiFacebookFill} from 'react-icons/ri'

import PrivacyPolice from "../../assets/utils/brand-footer.svg"
import { StyledFooter } from "./styles";

export default function Footer() {
  return (
    <StyledFooter background={PrivacyPolice}>
      <header className="footer__contact-us footer__element">
        <h2 className="contact-us__title">RECEBA NOSSAS OFERTAS E NOVIDADES</h2>
        <form className='contact-formulary'>
          <input type="text" placeholder="Digite seu nome" />
          <input type="text" placeholder="Digite seu email" />
          <button className='footer__button' type="submit">CADASTRAR</button>
        </form>
      </header>
      <main className="footer__element footer__options">
        <section className="about-us options__group">
          <h5 className="footer__title">GRUPO HINODE</h5>
          <a href='#void' className="footer__choice">A Empresa</a>
          <a href='#void' className="footer__choice">Catálogo Hinode</a>
          <a href='#void' className="footer__choice">Seja um Consultor</a>
          <a href='#void' className="footer__choice">Hinode Prime</a>
          <a href='#void' className="footer__choice">Frete Inteligente</a>
        </section>
        <section className="most-selled options__group">
          <h5 className="footer__title">MAIS VENDIDOS</h5>
          <a href='#void' className="footer__choice">Corps Lígnea Body Contour Gel Modelador</a>
          <a href='#void' className="footer__choice">Shake de Vanilla H+ HND</a>
          <a href='#void' className="footer__choice">Shake de Morango H+ HND</a>
          <a href='#void' className="footer__choice">Luva de Silicone Creme para as Mãos Hands</a>
          <a href='#void' className="footer__choice">Empire Gold</a>
          <a href='#void' className="footer__choice">Empire VIP</a>
        </section>
        <section className="frequent-questions options__group">
          <h5 className="footer__title">DÚVIDAS FREQUENTES</h5>
          <a href='#void' className="footer__choice">Fale Conosco</a>
          <a href='#void' className="footer__choice">Entrega, Trocas e Devoluções</a>
          <a href='#void' className="footer__choice">Compra e Venda</a>
          <a href='#void' className="footer__choice">Política de Privacidade</a>
          <a href='#void' className="footer__choice">Remover Consentimento</a>
        </section>
        <section className="customer-service options__group">
          <button className="footer__button">
            CENTRAL DE ATENDIMENTO
          </button>
          <div className="cs__contacts">
            <p className="customer-service__details footer__choice">
              De segunda a sexta das 9h às 21h
            </p>
            <p className="customer-service__details footer__choice">
              Capitais e regiões metropolitanas 4020-2424
            </p>
            <p className="customer-service__details footer__choice">
              Demais localidades: 0800-144-6633
            </p>
          </div>
          <div id="socialmedia-logos">
            <RiInstagramLine size={40} color="var(--blue)" />
            <RiYoutubeLine size={40} color="var(--blue)" />
            <RiFacebookFill size={40} color="var(--blue)" />
          </div>
        </section>
      </main>
      <footer className="footer__privacy-policy" />
    </StyledFooter>
  );
}
