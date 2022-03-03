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
  <ArticleLayout title="Web Portfolio">
    <Container mt={8}>
      <Title>
        Web Portfolio <Badge>Next.js</Badge>
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
              href="https://github.com/Gyeonghun-Park/portfolio"
              target="_blank"
            >
              https://github.com/Gyeonghun-Park/portfolio{" "}
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

        <Box
          borderRadius="lg"
          mt={12}
          mb={6}
          p={3}
          textAlign="center"
          textColor="red.500"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
          This demo doesn$apos;t work properly in Safari browser.
        </Box>

        <Box align="center" my={4}>
          <Link
            href="https://distracted-liskov-02940c.netlify.app/"
            target="_blank"
          >
            <Button rightIcon={<ExternalLinkIcon />} colorScheme="teal">
              Demo Site
            </Button>
          </Link>
        </Box>
      </Section>

      <WorkImage
        src="/images/works/webPortfolio/2.png"
        alt="Web Portfolio demo"
      />
      <WorkImage
        src="/images/works/webPortfolio/3.png"
        alt="Web Portfolio demo"
      />
      <WorkImage
        src="/images/works/webPortfolio/4.png"
        alt="Web Portfolio demo"
      />
      <WorkImage
        src="/images/works/webPortfolio/5.png"
        alt="Web Portfolio demo"
      />
    </Container>
  </ArticleLayout>
);

export default Work;
