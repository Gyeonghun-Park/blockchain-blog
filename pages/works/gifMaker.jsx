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
  <ArticleLayout title="GIF Maker">
    <Container mt={8}>
      <Title>
        GIF Maker <Badge>Next.js</Badge>
      </Title>
      <Section>
        <Paragraph>
          Gif Maker Blockchain Web 3.0 App. You can generate GIFs by adding a
          keyword when sending Eth.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link
              href="https://github.com/Gyeonghun-Park/gif-portal-solidity"
              target="_blank"
            >
              https://github.com/Gyeonghun-Park/gif-portal-solidity{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Feature</Meta>
            <span>MetaMask Auth, Generating GIFs, Sending Eth</span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Next.js, Hardhat, Tailwind</span>
          </ListItem>

          <ListItem>
            <Meta>Platform</Meta>
            <span>TESTNET Rinkeby</span>
          </ListItem>

          <ListItem>
            <Meta>Mobile Friendly</Meta>
            <span>Good</span>
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
          You need some Rinkeby Eth to play the demo. <br /> Get FREE test
          Rinkeby Ethereum{" "}
          <Link href="https://faucets.chain.link/rinkeby" target="_blank">
            here <ExternalLinkIcon mx="2px" />
          </Link>
        </Box>

        <Box align="center" my={4}>
          <Link href="https://gif-portal-solidity.vercel.app/" target="_blank">
            <Button rightIcon={<ExternalLinkIcon />} colorScheme="teal">
              Demo Site
            </Button>
          </Link>
        </Box>

        <WorkImage src="/images/works/gifMaker/2.png" alt="Gif maker demo" />
      </Section>
    </Container>
  </ArticleLayout>
);

export default Work;
