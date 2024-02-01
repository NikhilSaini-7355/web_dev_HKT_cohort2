import { atom } from "recoil"

export const countAtom = atom({
    key:"countAtom", // key stores the unique id or key for the state variable with respect to other atoms/state variables
    default:0  // stores default value(initial value) of the  state variable
});