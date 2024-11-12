import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");
export const ApiProvider = ({ children }) => {
  const [termekLista, setTermekLista] = useState([]);
  const [katLista, setKatLista] = useState([]);

  const getAdat = async (vegpont, callbackFv) => {
    try {
      const response = await myAxios.get(vegpont);
      callbackFv(response.data)
    } catch (error) {
      console.log("Hiba történt az adat elküldésekor.", error);
    } finally {
    }
  };

  const postAdat = async (vegpont, adat) => {
    try {
      const response = await myAxios.post(vegpont,adat);
      console.log("adat:", response.data);
    } catch (error) {
      console.log("Hiba történt az adat elküldésekor.", error);
    } finally {
    }
  };
  
  
  useEffect(()=>{
    getAdat("/products", setTermekLista);
    getAdat("/products/categories", setKatLista);
  },[])

  return (
    <ApiContext.Provider value={{ termekLista, katLista, postAdat }}>
      {children}
    </ApiContext.Provider>
  );

};
