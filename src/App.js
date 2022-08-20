import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Home from "./page";

const App = () => {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
};

export default App;
