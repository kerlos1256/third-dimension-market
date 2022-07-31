import React, { ReactNode } from "react";

interface RoutingContextInterface {
  visit: (url: string) => any;
  // getParam:(param:string)=> string
  // getParams:(params:string[])=> string[]
  // getHash:()=> string
}

export const routingContext = React.createContext<RoutingContextInterface>({
  visit: () => {},
});

export interface RotuingProviderProps extends RoutingContextInterface {
  children: ReactNode;
}

export const RoutingProvider: React.FC<RotuingProviderProps> = ({
  visit,
  ...props
}) => {
  return <routingContext.Provider value={{ visit }} {...props} />;
};
