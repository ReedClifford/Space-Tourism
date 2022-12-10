import { useContext } from "react";
import { BurgerMenuToggle } from "../contexts/toggleContext";

export const useToggle = () => {
  return useContext(BurgerMenuToggle);
};
