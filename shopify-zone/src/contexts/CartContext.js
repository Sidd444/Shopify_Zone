import { createContext,useContext } from "react";

export const ClothesContext = createContext({
    arr:[],
    total:0
})

export const ClothesProvider = ClothesContext.Provider

export default function useClothes(){
    return useContext(ClothesContext)
}