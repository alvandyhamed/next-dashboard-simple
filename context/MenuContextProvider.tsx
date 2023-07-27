"use client";
import { createContext, useState } from "react";

// Define the type of the context value
type MenuContextType = {
  open: boolean;
  toggle: () => void;
};

// Create the context with the initial value
export const MenuContext = createContext<MenuContextType>({
  open: false,
  toggle: () => {},
});

const MenuContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    console.log({ open });
    setOpen((prev) => !prev);
  };

  return (
    <MenuContext.Provider value={{ open, toggle }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
