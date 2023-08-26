import { createContext, useContext } from "react";


const dataContext = createContext({
  mail: 'name',
  text: 'sometext'
})


const { Provider, Consumer } = dataContext;
