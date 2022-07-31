import { Container, Divider, Stack } from "@mui/material";
import React from "react";
import { Navbar } from "../Navbar";

export interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Stack direction={"column"} paddingTop="5rem">
      <Navbar />
      <Divider />
      <Container fixed>{children}</Container>
    </Stack>
  );
};
