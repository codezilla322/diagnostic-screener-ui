import React, { createContext, useContext } from "react";
import { IScreenerService } from "../services/IScreenerService";
import { MockScreenerService } from "../services/MockScreenerService";

interface ServiceContextType {
  screenerService: IScreenerService;
}

// Default to mock service using dependency injection
const defaultServices: ServiceContextType = {
  screenerService: new MockScreenerService(),
};

const ServiceContext = createContext<ServiceContextType>(defaultServices);

export const useServices = () => useContext(ServiceContext);

interface ServiceProviderProps {
  services?: Partial<ServiceContextType>;
  children: React.ReactNode;
}

export const ServiceProvider: React.FC<ServiceProviderProps> = ({
  services,
  children,
}) => {
  const value = {
    ...defaultServices,
    ...services,
  };

  return (
    <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
  );
};
