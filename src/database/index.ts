/* showcase */
import dazzleFoundation1 from "../assets/products/dazzle-foundation.svg";
/* most-selled */
import dazzleSponge from "../assets/products/dazzle-sponge.svg";
import dazzleFoundation2 from "../assets/products/dazzle-foundation2.svg";
import sublimeCologne from "../assets/products/sublime-cologne.svg";
import facialPowder from "../assets/products/facial-powder.svg";
/* highlights */
import venixLor from "../assets/products/venyx-lor.svg";
import multvitWomen from "../assets/products/multvit-women.png";
/* most-desired */
import modelingGel from "../assets/products/modeling-gel.svg";
import vanillaShake from "../assets/products/vanilla-shake.svg";
import strawberryShake from "../assets/products/strawberry-shake.svg";
import siliconGlove from "../assets/products/silicon-glove.svg";
/* healthy-life */
import greenCoffee from "../assets/products/green-coffee.png";
import hyaluronicAcid from "../assets/products/hyaluronic-acid.svg";
import slimMax from "../assets/products/slim-max.svg";
import redfruitsTea from "../assets/products/redfruits-tea.svg";
/* body&bath */
import ligneaLegoil from "../assets/products/lignea-legoil.svg";
import bodyScrub from "../assets/products/body-scrub.svg";
import massageGel from "../assets/products/massage-gel.svg";
import wonderfulLegoil from "../assets/products/wonderful-legoil.svg";
import modelingGel1 from "../assets/products/modeling-gel1.svg";
import modelingGel2 from "../assets/products/modeling-gel2.svg";
import modelingGel3 from "../assets/products/modeling-gel3.svg";
import modelingGel4 from "../assets/products/modeling-gel4.svg";
/* fragrances */
import lattitudeExpedition from "../assets/products/lattitude-expedition.svg";
import empireVip from "../assets/products/empire-vip.svg";
import empire from "../assets/products/empire.svg";
import lattitudeStamina from "../assets/products/lattitude-stamina.svg";
import empireGold from "../assets/products/empire-gold.svg";
import lattitudeOrigini from "../assets/products/lattitude-origini.svg";
import ellaJuicy from "../assets/products/ella-juicy.svg";
import spotForher from "../assets/products/spot-forher.svg";
/* arrived-now */
import venyxCologne from "../assets/products/venyx-cologne.svg";
import dynamicRollon from "../assets/products/dynamic-rollon.svg";
import facialSoap from "../assets/products/facial-soap.svg";
import chocolateShake from "../assets/products/chocolate-shake.svg";
import { ICarouselItems } from "../interfaces/components.interface";

const products: ICarouselItems[] = [
  {
    id: 1,
    image: dazzleFoundation1,
    name: "Base Líquida DAZZLE",
    rating: 4,
    price: 89.9,
    previousPrice: null,
    sale: null,
    department: "showcase",
  },
  {
    id: 2,
    image: dazzleSponge,
    name: "Esponja 3D Dazzle",
    rating: 4,
    price: 29.9,
    previousPrice: 36.9,
    sale: null,
    department: "most-selled",
  },
  {
    id: 3,
    image: dazzleFoundation2,
    name: "Base Líquida Hyaluronic Hydra Dazzle Escuro 2 - 500g",
    rating: 4,
    price: 89.9,
    previousPrice: null,
    sale: null,
    department: "most-selled",
  },
  {
    id: 4,
    image: sublimeCologne,
    name: "Grace La Rose Sublime Deo Colônia Pocket 15ml",
    rating: 4,
    price: 39.9,
    previousPrice: null,
    sale: null,
    department: "most-selled",
  },
  {
    id: 5,
    image: facialPowder,
    name: "Pó Compacto HD Cover Claro 2 Dazzle - 12g",
    rating: 4,
    price: 46.9,
    previousPrice: null,
    sale: null,
    department: "most-selled",
  },
  {
    id: 6,
    image: venixLor,
    name: "Venyx L’Or 100ml",
    rating: 5,
    price: 150,
    previousPrice: null,
    sale: null,
    department: "highlight",
  },
  {
    id: 7,
    image: multvitWomen,
    name: "Multi- Vit Complex A-Z Mulheres 60 Cápsulas",
    rating: 5,
    price: 85,
    previousPrice: null,
    sale: null,
    department: "highlight",
  },
  {
    id: 8,
    image: modelingGel,
    name: "Corps Lígnea Body Contour Gel Modelador 500g",
    rating: 4,
    price: 60,
    previousPrice: null,
    sale: null,
    department: "most-desired",
  },
  {
    id: 9,
    image: vanillaShake,
    name: "Shake de Baunilha H+ HND - 550g",
    rating: 4,
    price: 79.9,
    previousPrice: 99.9,
    sale: 0.2,
    department: "most-desired",
  },
  {
    id: 10,
    image: strawberryShake,
    name: "Shake de Morango H+ HND - 550g",
    rating: 4,
    price: 79.9,
    previousPrice: 99.9,
    sale: 0.2,
    department: "most-desired",
  },
  {
    id: 11,
    image: siliconGlove,
    name: "Luva de Silicone Creme para as Mãos Hands 100g",
    rating: 4,
    price: 25,
    previousPrice: null,
    sale: null,
    department: "most-desired",
  },
  {
    id: 12,
    image: greenCoffee,
    name: "Café Verde 120 cápsulas",
    rating: 4,
    price: 69.9,
    previousPrice: null,
    sale: null,
    department: "healthy-life",
  },
  {
    id: 13,
    image: hyaluronicAcid,
    name: "Ácido Hialurônico com Colágeno HND 30 Sachês de 4g",
    rating: 4,
    price: 175,
    previousPrice: null,
    sale: null,
    department: "healthy-life",
  },
  {
    id: 14,
    image: slimMax,
    name: "Slim Max HND 120 Cápsulas",
    rating: 4,
    price: 140,
    previousPrice: null,
    sale: null,
    department: "healthy-life",
  },
  {
    id: 15,
    image: redfruitsTea,
    name: "Chá H+ Frutas Vermelhas 150g",
    rating: 4,
    price: 85,
    previousPrice: null,
    sale: null,
    department: "healthy-life",
  },
  {
    id: 16,
    image: ligneaLegoil,
    name: "Corps Lígnea Wonderful Gold Óleo para as Pernas - 150ml",
    rating: 4,
    price: 45,
    previousPrice: null,
    sale: null,
    department: "body&bath",
  },
  {
    id: 17,
    image: bodyScrub,
    name: "Corps Lígnea Body Contour Esfoliante Corporal - 200g",
    rating: 4,
    price: 49,
    previousPrice: null,
    sale: null,
    department: "body&bath",
  },
  {
    id: 18,
    image: massageGel,
    name: "Gel para Massagem Feelin Hot Morango 60ml",
    rating: 4,
    price: 27,
    previousPrice: null,
    sale: null,
    department: "body&bath",
  },
  {
    id: 19,
    image: wonderfulLegoil,
    name: "Óleo para as Pernas Wonderful 140ml",
    rating: 4,
    price: 39.9,
    previousPrice: null,
    sale: null,
    department: "body&bath",
  },
  {
    id: 20,
    image: modelingGel1,
    name: "Corps Lígnea Body Contour Gel Modelador 500g",
    rating: 4,
    price: 60,
    previousPrice: null,
    sale: null,
    department: "body&bath",
  },
  {
    id: 21,
    image: modelingGel2,
    name: "Corps Lígnea Body Contour Gel Modelador 500g",
    rating: 4,
    price: 60,
    previousPrice: null,
    sale: null,
    department: "body&bath",
  },
  {
    id: 22,
    image: modelingGel3,
    name: "Corps Lígnea Body Contour Gel Modelador 500g",
    rating: 4,
    price: 60,
    previousPrice: null,
    sale: null,
    department: "body&bath",
  },
  {
    id: 23,
    image: modelingGel4,
    name: "Corps Lígnea Body Contour Gel Modelador 500g",
    rating: 4,
    price: 60,
    previousPrice: null,
    sale: null,
    department: "body&bath",
  },
  {
    id: 24,
    image: lattitudeExpedition,
    name: "Lattitude Expedition 100ML",
    rating: 4,
    price: 129,
    previousPrice: null,
    sale: null,
    department: "fragrances",
  },
  {
    id: 25,
    image: empireVip,
    name: "Empire VIP 100ml",
    rating: 4,
    price: 150,
    previousPrice: null,
    sale: null,
    department: "fragrances",
  },
  {
    id: 26,
    image: empire,
    name: "Empire 100ml",
    rating: 4,
    price: 150,
    previousPrice: null,
    sale: null,
    department: "fragrances",
  },
  {
    id: 27,
    image: lattitudeStamina,
    name: "Lattitude Stamina 100ml",
    rating: 4,
    price: 129,
    previousPrice: null,
    sale: null,
    department: "fragrances",
  },
  {
    id: 28,
    image: empireGold,
    name: "Empire Gold 100ml",
    rating: 4,
    price: 150,
    previousPrice: null,
    sale: null,
    department: "fragrances",
  },
  {
    id: 29,
    image: lattitudeOrigini,
    name: "Colônia Lattitude Origini 100ml",
    rating: 4,
    price: 129,
    previousPrice: null,
    sale: null,
    department: "fragrances",
  },
  {
    id: 30,
    image: ellaJuicy,
    name: "Colônia Ella Juicy 100ml",
    rating: 4,
    price: 129,
    previousPrice: null,
    sale: null,
    department: "fragrances",
  },
  {
    id: 31,
    image: spotForher,
    name: "Spot For Her 75ml",
    rating: 4,
    price: 129,
    previousPrice: null,
    sale: null,
    department: "fragrances",
  },
  {
    id: 32,
    image: venyxCologne,
    name: "Deo Colônia Venyx L’Or 100ml",
    rating: 4,
    price: 150,
    previousPrice: null,
    sale: null,
    department: "arrived-now",
  },
  {
    id: 33,
    image: dynamicRollon,
    name: "Desodorante Roll On Dynamic",
    rating: 4,
    price: 17.9,
    previousPrice: null,
    sale: null,
    department: "arrived-now",
  },
  {
    id: 34,
    image: facialSoap,
    name: "Erva Doce Sabonete Cremoso Facial Hinode 250ml",
    rating: 4,
    price: 33.4,
    previousPrice: null,
    sale: null,
    department: "arrived-now",
  },
  {
    id: 35,
    image: chocolateShake,
    name: "HND Shake Triple Chocolate 450g",
    rating: 4,
    price: 109.9,
    previousPrice: null,
    sale: null,
    department: "arrived-now",
  },
];

export default products;
