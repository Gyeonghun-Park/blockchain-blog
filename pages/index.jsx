import NextLink from "next/link";
import dynamic from "next/dynamic";
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoGithub,
  IoBookSharp,
} from "react-icons/io5";
import { Section, Paragraph, DogLoader } from "@components/ui";
import { ArticleLayout } from "@components/layouts";

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
          Hello, I&apos;m a CS student based in Korea!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Gyeonghun Park
            </Heading>
            <p>Student ( Front / Back / Blockchain )</p>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Who is he?
          </Heading>
          <Paragraph>
            Gyeonghun is a student based in Korea with a passion for building
            digital services/stuff he wants. He is passionate about solving
            real-life problems with code from planning and design. Currently, he
            is into blockchain and this blog is also a portfolio for his
            blockchain works. However, there is another{" "}
            <Link
              href="https://distracted-liskov-02940c.netlify.app/"
              target="_blank"
            >
              portfolio
            </Link>{" "}
            related to front, backend, and cloud, so please check if you are
            interested. :)
          </Paragraph>

          <Box align="center" my={4}>
            <NextLink href="/works" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Blockchain portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Gyeonghun-Park" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  Gyeonghun-Park
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/gyeonghun_park" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @gyeonghun_park
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/gyeonghun-park-095971193/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  Gyeonghun Park
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://gyeonghun-park.github.io/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoBookSharp />}
                >
                  Gyeonghun&apos;s Blog
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </ArticleLayout>
  );
}

export default Home;
