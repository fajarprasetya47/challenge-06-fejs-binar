import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import Router from './routes';

const CarsContext = createContext();
export const useCars = () => useContext(CarsContext);

export default function App() {
  const [cars, setCars] = useState();
  return (
    <>
      <CarsContext.Provider value={{ cars, setCars }}>
        <Router />
      </CarsContext.Provider>
    </>
  );
}

