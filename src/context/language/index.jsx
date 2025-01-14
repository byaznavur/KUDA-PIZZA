import PropTypes from "prop-types";
import { createContext, useState } from "react";
import languages from "../../data/languages";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [langType, setLangType] = useState(
    localStorage.getItem("language") || "en"
  );

  const changeLang = (e) => {
    setLangType(e.target.value);
    localStorage.setItem("language", e.target.value);
  };
  const state = { langType, lang: languages[langType], changeLang };
  return (
    <LanguageContext.Provider value={state}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node,
};
export default LanguageProvider;
