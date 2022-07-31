import { Box, Container, Link, Stack, Typography } from "@mui/material";
import React from "react";

export const Navbar: React.FC = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      bgcolor={"primary.main"}
      height="5rem"
    >
      <Container fixed>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Typography variant="h3">Logo</Typography>
          <Stack direction={"row"}>
            <Link></Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
