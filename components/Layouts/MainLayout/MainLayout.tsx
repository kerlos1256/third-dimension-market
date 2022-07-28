import { Container } from "@mui/material";
import React from "react";

export interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <Container fixed>{children}</Container>;
};
