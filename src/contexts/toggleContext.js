import { createContext, useState } from "react";

export const BurgerMenuToggle = createContext();

export const BurgerMenuToggleProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const values = { active, setActive };
  return (
    <BurgerMenuToggle.Provider value={values}>
      {children}
    </BurgerMenuToggle.Provider>
  );
};
