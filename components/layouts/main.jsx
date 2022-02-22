import Head from "next/head";
import dynamic from "next/dynamic";
import { Box, Container } from "@chakra-ui/react";
import { Navbar } from "@components/ui";
import { DogLoader } from "@components/ui";

const LazyVoxelDog = dynamic(() => import("../ui/voxelDog"), {
  ssr: false,
  loading: () => <DogLoader />,
});

function MainLayout({ children, router }) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Gyeonghun's blog" />
        <meta name="author" content="Gyeonghun Park" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Gyeonghun Park's Blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Gyeonghun Park - Blog</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}
      </Container>
    </Box>
  );
}

export default MainLayout;
