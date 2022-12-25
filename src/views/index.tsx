import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const BasePage = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default BasePage;
