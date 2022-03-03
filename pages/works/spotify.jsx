import {
  Container,
  List,
  ListItem,
  Badge,
  Link,
  Box,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta, Paragraph, WorkImage, Section } from "@components/ui";
import { ArticleLayout } from "@components/layouts";

const Work = () => (
  <ArticleLayout title="Spotify Clone">
    <Container mt={8}>
      <Title>
        Spotify Clone <Badge>Next.js</Badge>
      </Title>
      <Section delay={0.1}>
        <Paragraph>
          With Spotify, you can listen to music and play millions of songs and
          podcasts. Stream music and podcasts you love and find music
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link
              href="https://github.com/Gyeonghun-Park/spotify-clone"
              target="_blank"
            >
              https://github.com/Gyeonghun-Park/spotify-clone{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Feature</Meta>
            <span>
              Spotify Login, Playing Music, Music recommendation, My playlist
            </span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Next.js, Spotify API, Recoil, Tailwind</span>
          </ListItem>

          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>

          <ListItem>
            <Meta>Mobile Friendly</Meta>
            <span>Good</span>
          </ListItem>
        </List>

        <Box
          borderRadius="lg"
          mt={12}
          mb={6}
          p={3}
          textAlign="center"
          textColor="red.500"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
          You need a Spotify Premium account to use the music player!
        </Box>

        <Box align="center" my={4}>
          <Link
            href="https://spotify-clone-green-omega.vercel.app/"
            target="_blank"
          >
            <Button rightIcon={<ExternalLinkIcon />} colorScheme="teal">
              Demo Site
            </Button>
          </Link>
        </Box>
      </Section>

      <WorkImage src="/images/works/spotify/2.png" alt="Spotify demo" />
      <WorkImage src="/images/works/spotify/3.png" alt="Spotify demo" />
    </Container>
  </ArticleLayout>
);

export default Work;
