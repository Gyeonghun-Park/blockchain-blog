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
  <ArticleLayout title="Blog">
    <Container mt={8}>
      <Title>
        Blog <Badge>Next.js</Badge>
      </Title>
      <Section delay={0.1}>
        <Paragraph>
          webPortfol Blockchain Web 3.0 App with Next.js, Sanity.io, thirdweb
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link
              href="https://github.com/Gyeonghun-Park/gyeonghun-park.github.io-src"
              target="_blank"
            >
              https://github.com/Gyeonghun-Park/gyeonghun-park.github.io-src{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Feature</Meta>
            <span>
              MetaMask Auth, Sanity DB, thirdweb&apos;s smart contracts
            </span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Next.js, Sanity, thirdweb SDK, Tailwind</span>
          </ListItem>

          <ListItem>
            <Meta>Platform</Meta>
            <span>TESTNET Rinkeby</span>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <Link href="https://gyeonghun-park.github.io/" target="_blank">
            <Button rightIcon={<ExternalLinkIcon />} colorScheme="teal">
              Demo Site
            </Button>
          </Link>
        </Box>
      </Section>

      <WorkImage src="/images/works/blog/2.png" alt="Blog demo" />
    </Container>
  </ArticleLayout>
);

export default Work;
