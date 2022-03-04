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
      <Section>
        <Paragraph>
          Gyeonghun&apos;s web portfolio. You can interact with the web and its
          elements.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
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
            <span>Web interaction,Showing Gyeonghun&apos;s other works</span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>React, PixiJS, Tailwind</span>
          </ListItem>

          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>

          <ListItem>
            <Meta>Mobile Friendly</Meta>
            <span>Moderate</span>
          </ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
        <Box
          borderRadius="lg"
          mt={12}
          mb={6}
          p={3}
          textAlign="center"
          textColor="red.500"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
          This demo doesn&apos;t work properly in Safari browser.
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
      </Section>
    </Container>
  </ArticleLayout>
);

export default Work;
