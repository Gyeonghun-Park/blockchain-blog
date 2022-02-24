import { Container, Heading, Box, useColorModeValue } from "@chakra-ui/react";
import { Section } from "@components/ui";

function Home() {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      >
        Hello, I&apos;m a full-stack developer based in Korean!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            박경훈
          </Heading>
          <p>포기를 포기한 사나이</p>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
      </Section>
    </Container>
  );
}

export default Home;
