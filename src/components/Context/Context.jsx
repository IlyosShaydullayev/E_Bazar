import { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [lang, setLang] = useState("uz");
  const [filterOpen, setFilterOpen] = useState(false)
  const [login, setLogin] = useState(true)

  return (
    <Context.Provider value={{ lang, setLang, filterOpen, login, setFilterOpen }}>{children}</Context.Provider>
  );
}

export { Context, Provider };