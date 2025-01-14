import { useContext } from "react";
import { LanguageContext } from "../../../context/language";

const Footer = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <footer className="bg-primary py-3">
      <div className="container">
        <p className="text-center m-0 text-white">{lang.founder}</p>
      </div>
    </footer>
  );
};

export default Footer;
