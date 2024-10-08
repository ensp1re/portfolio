"use client";

import {
  createContext,
  FC,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface IStateContext {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const StateContext = createContext<IStateContext | undefined>(undefined);

interface IStateProviderProps {
  children: ReactNode;
}

export const StateProvider: FC<IStateProviderProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <StateContext.Provider
      value={{ activeSection, setActiveSection, isOpen, setIsOpen }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
};
