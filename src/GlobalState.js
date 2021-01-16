import React ,{createContext,useState} from 'react';


export const GlobalState = createContext();
export const DataProvider = ({children})=>{
  return (<GlobalState.Provider value={children}>
        {children}
        </GlobalState.Provider>
);

}