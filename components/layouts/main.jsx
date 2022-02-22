import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

function MainLayout({ children, router }) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Gyeonghun's blog" />
        <meta name="author" content="Gyeonghun Park" />
        <title>Gyeonghun Park - Blog</title>
      </Head>

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
}

export default MainLayout;
