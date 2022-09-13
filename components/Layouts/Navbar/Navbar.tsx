import { Box, Container, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { animated, useSpring } from "react-spring";

const AnimatedBox = animated(Box);
const AnimatedTypography = animated(Typography);

export const Navbar: React.FC = () => {
  const bgProps = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });
  const logoProps = useSpring({ from: { y: -20 }, to: { y: 20 } });
  return (
    <AnimatedBox
      position="fixed"
      zIndex={10}
      top={0}
      left={0}
      width="100%"
      height="5rem"
      style={bgProps}
    >
      <Container fixed>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent="space-between"
        >
          <AnimatedTypography style={logoProps} variant="h3">
            Logo
          </AnimatedTypography>
          <Stack direction={"row"}>
            <Link></Link>
          </Stack>
        </Stack>
      </Container>
    </AnimatedBox>
  );
};
