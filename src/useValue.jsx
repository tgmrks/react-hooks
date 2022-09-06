import { useContext } from "react";
import { AppContext } from "./AppContext";

export function useValue() {
    return useContext(AppContext);
}