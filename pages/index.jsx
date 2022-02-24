import NextLink from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from "react-icons/io5";
import { Section, Paragraph, GridItem, DogLoader } from "@components/ui";
import { ArticleLayout } from "@components/layouts";

import thumbnailTest from "@images/frogeum/frogeum.png";

const LazyVoxelDog = dynamic(() => import("../components/ui/voxelDog"), {
  ssr: false,
  loading: () => <DogLoader />,
});

function Home() {
  return (
    <ArticleLayout>
      <Container>
        <LazyVoxelDog />
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
          Hello, I&apos;m a full-stack developer based in Korea!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Gyeonghun Park
            </Heading>
            <p>Student ( Front / Back / Blockchain )</p>
          </Box>
        </Box>
      </Container>
    </ArticleLayout>
  );
}

export default Home;
